import axios from "axios";

// The search method retrieves books from the server
// It accepts a "query" or term to search the google api for 
export default {
    search: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?", { params: { q: query } });
    },
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    },
    getSavedBooks: function () {
        return axios.get("/api/books");
    },
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id)
    }
};

// import axios from "axios";
// const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// // const APIKEY = "&apikey=trilogy";

// export default {
//     search: function (query) {
//         return axios.get(BASEURL + query);
//     }
// };