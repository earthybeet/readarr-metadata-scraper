export const bookResource = {
    Asin :  "B004E3XHA4",
    AverageRating :  3.8999999999999999,
    Contributors :  [{ForeignId: 228,
        Role:"Author"}],
Description :  "The classic epic poem about the Trojan War.",
EditionInformation :  "",
ForeignId :  5907,
Format :  "Kindle Edition",
ImageUrl :  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328366141i/9935816.jpg",
IsEbook : true,
Isbn13 :  null,
Language :  "eng",
NumPages :  454,
Publisher :  "",
RatingCount :  1,
ReleaseDate : null,
Title :  "The Iliad",
Url :  "https://www.goodreads.com/book/show/9935816-the-iliad",
}
export const seriesResource= {
    ForeignId: 123123,
    Title: "example series",
    Description:"test"
}

export const authorResource= {
    AverageRating : 3.9500000000000002,
    Description :  "Garry Wills is an author and historian, and a frequent contributor to the New York Review of Books. In 1993, he won a Pulitzer Prize for General Non-Fiction for his book Lincoln at Gettysburg: The Words That Remade America, which describes the background …",
    ForeignId : 228,
    ImageUrl :  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/authors/1349412880i/228.jpg",
    Name :  "Garry Wills",
    RatingCount : 19316,
    Series :  null,
    Url :  "http://www.goodreads.com/author/show/228.Garry_Wills",
    Works :  null
}
export const workResource = {
    ForeignId:1231234,
    Title: "test",
    Url: "test",
    Genres:["horror"],
    RelatedWorks:[123123],
    Books:[bookResource],
    Series:[seriesResource],
    Authors:[authorResource]
}