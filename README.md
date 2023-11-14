# Readarr Metadata scraper

POC substitute for [Readarr's](https://github.com/Readarr/Readarr) metadata provider api.bookinfo.club.
Exposes endpoints that provide Readarr compatible metadata by scraping Goodreads.



**Use at your own risk**. Whilst functional, certain metadata is missing or incorrect. This could lead to data corruption in
existing libraries so recommend only to be used for evaluation purposes.     

Am unable to maintain this in the long term, but It may help others to build more robust scrapers for bookinfo outages.

### How to use

Copy the **scraper** directory to where you compose readarr .

Add the following _volume_ to Readarr in your `docker-compose.yml`:

    ./scraper/certs/bookinfo-club.crt:/etc/ssl/certs/bookinfo-club.crt

then add the scraper to your `docker-compose.yml`:
```
readarr-metadata-scraper:
    build: scraper
    container_name: readarr-metadata-scraper
    depends_on:
      - readarr
    networks:
      default:
        aliases:
          - api.bookinfo.club
```

see the [docker-compose.yml](docker-compose.yml) for a working example. 

### Acknowledgements 

[Bilbioreads](https://biblioreads.eu.org/) for providing the GoodReads scraping code. 
### License
Licensed under the GNU AGPLv3. Please see [LICENSE.txt](LICENSE.txt) for more information.

