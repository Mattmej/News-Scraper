$(document).ready(function() {
    var articleContainer = $(".article-container");

    $(document).on("click", ".btn-save", saveArticle);
    $(document).on("click", ".scrape-new", scrapeArticles);

    // ensures the page loads with all the saved info
    loadPage();

    function loadPage() {
        
        // Empties the article container.
        articleContainer.empty();

        // Gets info from the headlines api
        // Data is the headlines that have NOT been saved.
        $.get("/api/.headlines?saved=false")
        .then(function(data) {
            
            // If the data exists and has a length (not null or length = 0), then...
            if (data && data.length) {
                displayArticles(data)
            }

            // Otherwise, display an empty article container.
            else {
                displayEmpty();
            }
        });
    }

    function displayArticles(articles) {
        var articleSections = [];

        for (var i = 0; i < articles.length; i++) {
            
            // push the created article sections into the articleSections array
            articleSections.push(createArticleSection(articles[i]));
        }

        // Add on the items in articleSections array into the articleContainer.
        articleContainer.append(articleSections);
    }

    // note: methods here, such as .headline and .url, 
    // are defined in scrape.js
    function createArticleSection(article) {
        var section = 
        `<div class = "card">
            <div class = "card-body">
                <h3 class = "card-title">
                    <a href = ${article.url}>
                        ${article.headline}
                    </a>
                    <a class = "btn btn-primary save">
                        Save Article
                    </a>
                </h3>
                <p class = "card-text">
                    ${article.summary}
                </p>
            
            
            </div>
        </div>`;
        section.data("_id", article._id);
        return section;
    }

    // This function is for the situation in which we don't have
    // any new articles.
    function displayEmpty() {
        var emptyCase = `
            <div class = "alert alert-warning" role = "alert">
                <h5>No new articles available.</h5>
            </div>`;
        articleContainer.append(emptyCase);
    }

    function saveArticle() {

        // The target for saving will be the save button attached to the article.
        // This variable will select the data inside the card's parent (the data inside the article)
        var saveTarget = $(this).parents(".card").data();
        saveTarget.saved = true;

        $.ajax({
            method: "PUT",
            url: "/api/headlines/" + saveTarget._id,
            data: saveTarget
        }).then(function(data) {
            if (data.saved) {
                loadPage();
            }
        });
    }

    function scrapeArticles() {
        $.get("/api/fetch")
        .then(function(data) {
            loadPage();
        })
    }

});