$(document).ready(function() {

    var articleContainer = $(".article-container");

    $(".btn-deleteArticle").on("click", deleteArticle);
    $(".btn-displayNotes").on("click", displayArticleNotes);
    $(".btn-saveNote").on("click", saveNote);
    $(".btn-deleteNote").on("click", deleteNote);

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

    function renderNotes(data) {
        var notesToDisplay = [];
        var currentNote;
        if (!data.notes.length) {
            currentNote = `
                <p>No notes for this article.</p>`
        }

        else {
            for (var i = 0; i < data.notes.length; i++) {
                currentNote = `
                    <li class = "list-group-item note">
                        ${data.notes[i].body}
                        <button class = "btn btn-danger btn-deleteNote>Delete</button>
                    </li>`;

                // Attach note id to the button of the current note.
                currentNote.children("button").data("_id", data.notes[i]._id);
                notesToDisplay.push(currentNote);
            }
        }

        // Append the notes to display to the note container.
        $(".note-container").append(notesToDisplay);
    }

    function deleteArticle() {
        var deleteTarget = $(this).parents(".card").data();

        $.ajax({
            method: "DELETE",
            url: `/api/headlines/${deleteTarget._id}`
        })
        .then(function(data) {

            // If the response to the ajax call was successful, then...
            if(data.ok) {
                loadPage();
            }
        });
    }

    function displayArticleNotes() {
        var currentArticle = $(this).parents(".card").data();

        $.get(`/api/notes/${currentArticle._id}`)
        .then(function(data) {
            var modalBody = `
                <div class = "container-fluid text-center>
                    <h4>Article Notes: ${currentArticle._id}</h4>
                    <hr>
                    <ul class = "list-group note-container"></ul>
                    <textarea placeholder = "New Note" rows = "4" cols = "60"></textarea>
                    <button class = "btn btn-success btn-saveNote" data-toggle="modal" data-target="#noteModal">Display Note</button>
                </div>`;
            $(".modal-body").append(modalBody);
            

            var noteData = {
                _id: currentArticle._id,
                notes: data || []
            };

            $(".btn-saveNote").data("article", noteData);
            renderNotes(noteData);
        });
    }

    function saveNote() {
        var noteData;
        var newNote = $("textarea").val().trim();
        if (newNote) {
            noteData = {
                _id: $(this).data("article")._id,
                noteText: newNote
            };
            $.post("/api/notes", noteData).then(function() {

            })
        }
    }





















});