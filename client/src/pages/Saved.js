import React, { Component } from "react";
import API from "../utils/API";
import SavedResult from "../components/SavedResult";


class Saved extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount() {
        this.loadBooks();
    }


    loadBooks() {
        API.getSavedBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .then(data => {
                console.log(this.state.savedBooks)
            })
            .catch(err => console.log(err));
    }

    handledelete = id => {
        console.log("delete function called");
        console.log(id);
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
        //getSavedBooks again after deleting 
    }

    render() {
        return (
            <div>
                <h1>Save</h1>

                {!this.state.savedBooks.length ? (<h1>No Saved Books</h1>) :
                    (<div> {this.state.savedBooks.map((info, i) => (
                        // <h3> {info.title}
                        //     {info.authors ? <p>{info.authors[0]}</p> : <p>No Authors</p>}


                        // </h3>


                        <SavedResult
                            id={info.googleId}
                            key={info._id}
                            title={info.title}
                            // author={info.authors ? (info.authors[0]) : <p>No Authors</p>}
                            // thumbnail={info.imageLinks ? (info.imageLinks.thumbnail) : <p>No image</p>}
                            // description={info.description}
                            handledelete={this.handledelete}

                        />

                    ))} </div>)

                }



                {/* <SearchResults result={this.state.result} /> */}
            </div >


        );
    }
}

export default Saved;