import axios from "axios";

export default {
    
    getNewBooks: function(title){
        return axios.get("https://www.googleapi.com/books/v1/volumes?q=" + title);
    },

    //gets saved books
    getSavedBooks: function(){
        return axios.get("/api/books/");
    },

    //delete the book with the certain id
    deleteBook: function(id){
        return axios.delete("/api/books/" + id);
    },

    //saves a book to the database
    saveBook: function(bookInfo){
        return axios.post("/api/books", bookInfo);
    }
};