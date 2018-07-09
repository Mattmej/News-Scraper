# News-Scraper

### Description

This app is an example of using MongoDB to create various schema and using the cheerio node package to scrape articles from the New York Times website.

Although the functionality is not yet completed, the file structure and logic have been completed. The webpage displays properly. Currently there is a bug in the 'scrape articles' button that does not allow the scraped articles to be displayed, instead returning a 404 error. The problem most likely lies with one of the 'get' requests, perhaps in either one of the public javascript files or one of the 'fetch' files in either the 'controllers' or 'routes' folder. 