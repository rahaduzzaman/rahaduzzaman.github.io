var bform = document.getElementById('myForm');
// Listen for form submit
bform.addEventListener('submit', saveBookmark)
// Save Bookmark
function saveBookmark(e) {
    // Get the Values of user input
    var siteName =  document.getElementById('siteName').value;
    var siteUrl =  document.getElementById('siteUrl').value;

    if (!validateForm(siteName, siteUrl)) {
        return false;
    }


    var bookmark = {
        name : siteName,
        url : siteUrl
    };

    // Test if Bookmark is Null
    if (localStorage.getItem('bookmarks') === null) {
        var bookmarks = [];
        bookmarks.push(bookmark);
        // Set to LocalStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        // Get bookmarks from local storage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // Add new bookmark to Bookmarks array
        bookmarks.push(bookmark);
        // Reset back to local Storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    // Show the bookmarks
    fetchBookmarks();

    bform.reset();
    // Prevent form from submitting
    e.preventDefault();
}

function deleteBookmark(url) {
    // Get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    for (var i = 0; i < bookmarks.length; i++) {
        if(url == bookmarks[i].url) {
            bookmarks.splice(i, 1);
        }
    }

    // Updated bookmarks again Set to LocalStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // re run the show bookmarks 
    fetchBookmarks();
}


// Function to render the bookmarks
function fetchBookmarks() {
    // Get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // get the bookmark holder ID
    var bookmarkResults = document.getElementById('bookmarkResults');

    bookmarkResults.innerHTML = '';
    // Loop through the bookmarks
    for(var i=0; i< bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarkResults.innerHTML += '<div class="single-bookmark well">' +
                                        '<h3> Name: <span class="text-primary">'+ name + '</span></h3>' +
                                        '<hr />' +
                                        '<h4>' +
                                        '<a class="btn btn-primary" target="_blank" href="'+url+'">Visit</a> ' +
                                        '<button onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" type="submit">Delete</a> ' +
                                        '</h4>' +
                                    '</div>';
    }
}

// Validate form
function validateForm(sName, sUrl) {
    if (!sName || !sUrl) {
        alert('Please fill the form');
    }

    var exp = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(exp)

    if (!sUrl.match(regex)) {
        alert('Please use a Valid URL');
        return false;
    }
    return true;
}