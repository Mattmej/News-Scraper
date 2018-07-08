const request = require("request");
const cheerio = require("cheerio");

const scrapeArticles = function() {
    request("http://wwww.nytimes.com", {json: true}, (err, res, body) => {
        if (err) {
            return console.log(err);
        }

        var $ = cherrio.load(body.data);
        var articles = [];
        $(".articles").each(function(i, element) {
            
            var head = $(this)
                .children(".story-heading")
                .text()
                .trim();

            var url = $(this)
            .children(".story-heading")
            .children("a")
            .attr("href");

            var summary = $(this)
                .children(".summary")
                .text()
                .trim();

            // if the heading, summary, and url exist, then...
            if (head && sum && url) {
                
                var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                var summaryNeat = summary.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                var addedData = {
                    headline: headNeat,
                    summary: summaryNeat,
                    url: url
                };

                articles.push(addedData);
            }


        });

        return articles;
    });
};

module.exports = scrapeArticles;