import express from 'express'
import fs from "fs";
import http from "http";
import https from "https";
import {getBook} from './bookscraper.js'
import getAuthor from "./authorscraper.js";


const privateKey  = fs.readFileSync('./certs/bookinfo-club.key', 'utf8');
const certificate = fs.readFileSync('./certs/bookinfo-club.crt', 'utf8');

const credentials = {key: privateKey, cert: certificate};

const app = express()
app.use(express.json())

app.get('/v1/author/:id', async (req, res)=>{
    const id = req.params.id
    console.log('requesting author id /v1/author',id)
    const goodreadsUrl = `https://www.goodreads.com/author/show/${id}`
    const authorInfo= await getAuthor(id,goodreadsUrl)
    console.log(authorInfo)
    res.status(200);
    res.send({...authorInfo,Works:[]})
});
app.get('/v1/work/:id', async (req, res)=>{
    const id = req.params.id
    console.log('getting work /v1/work', id)
    const {work,author} = await getBook(id)
    const authorInfo= await getAuthor(author[0].id,author[0].url)
    const response= {
        ForeignId:work.ForeignId,
        Title: work.Title,
        Url: work.Url,
        Genres:["horror"],
        RelatedWorks:[],
        Books:[work],
        Series:[],
        Authors:[authorInfo]
    }
    console.log(response)
    res.send(response)
});
app.post('*', async (req, res)=>{
    console.log('post body',req.body)
    // const books= []
    const authors = {}

    const books = await Promise.all(req.body.map(async (id)=>{
        console.log('getting',id)
        const bookResult = await getBook(id)
        console.log('retrieved book:',bookResult)
        if (!(bookResult.author[0].id in authors) ){
            const authorResult= await getAuthor(bookResult.author[0].id,bookResult.author[0].url)
            authors[bookResult.author[0].id] = authorResult
            console.log('retrieved author:',authorResult)
        }
        return bookResult
    }))

    const works= books.map(({work})=>{
        return {
            ForeignId:work.ForeignId,
            Title: work.title,
            Url: work.Url,
            Genres:["horror"],
            RelatedWorks:[],
            Books:[work],
            Series:[],
            // Authors:authors
        }
    })
    const response = {
        Works:works,
        Series:[],
        Authors:Object.values(authors)
    }
    res.send(response)
});

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, async () => {
    console.log('listening')
}
);
httpsServer.listen(443);

// app.listen(8816, async () => {
//     console.log('listening')
//     console.log(privateKey)
// })