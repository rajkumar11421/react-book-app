import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import BookService from '../services/BookService'

const AddBookComponent = () => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const history = useNavigate();
    const {id} = useParams();

    const saveOrUpdateBook = (e) => {
        e.preventDefault();

        const book = {title, price}

        if(id){
            BookService.updateBook(id, book).then((response) => {
                history.push('/books')
            }).catch(error => {
                console.log(error)
            })

        }else{
        	BookService.createBook(book).then((response) =>{

                console.log(response.data)
    
                history.push('/book');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        BookService.getBookById(id).then((response) =>{
            setTitle(response.data.title)
            setPrice(response.data.price)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const pageTitle = () => {

        if(id){
            return <h2 className = "text-center">Update Book</h2>
        }else{
            return <h2 className = "text-center">Add Book</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                    	   pageTitle()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Title:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter title"
                                        name = "title"
                                        className = "form-control"
                                        value = {title}
                                        onChange = {(e) => setTitle(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Price :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter price"
                                        name = "price"
                                        className = "form-control"
                                        value = {price}
                                        onChange = {(e) => setPrice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateBook(e)} >Submit </button>
                                <Link to="/books" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddBookComponent
