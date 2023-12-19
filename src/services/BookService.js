import axios from 'axios'

const BOOK_BASE_REST_API_URL = 'http://localhost:8080';

class BookService{

    getAllBooks(){
        return axios.get(BOOK_BASE_REST_API_URL+'/getBooks')
    }

    createBook(book){
        return axios.post(BOOK_BASE_REST_API_URL+'/createBooks', book)
    }

    getBookById(bookId){
        return axios.get(BOOK_BASE_REST_API_URL+'/getBook' + '/' + bookId);
    }

    updateBook(bookId, book){
        return axios.put(BOOK_BASE_REST_API_URL + '/updateBook/' +bookId, book);
    }

    deleteBook(bookId){
        return axios.delete(BOOK_BASE_REST_API_URL + '/deleteBook/' + bookId);
    }
}
export default new BookService();