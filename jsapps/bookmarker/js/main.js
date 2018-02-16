// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark(e) {
    // Get form Values
    var siteName =  document.getElementById('siteName').value;
    var sitUrl =  document.getElementById('siteUrl').value;

    var bookmark = {
        name : siteName,
        url : sitUrl
    };

    /*
    // Local Storage Test
    localStorage.setItem('test', 'Hello World');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
    */

    // Test if Bookmark is Null
    if (localStorage.getItem('bookmarks') === null) {
        // Init Array
        var bookmarks = [];
        // Add to array
        bookmarks.push(bookmark);
        // Set to LocalStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        // Get bookmarks from local storage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // Add new bookmark to Bookmarks array
        bookmarks.push(bookmark);
        // Re-set back to local Storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    // Show the bookmarks
    fetchBookmarks();

    // Prevent form from submitting
    e.preventDefault();
}

// Function to fetch the bookmarks
function fetchBookmarks() {
    // console.log(bookmark);
}