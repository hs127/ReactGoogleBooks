import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import SaveBtn from "../components/SaveBtn";


// this.handleSave = this.handleSave.bind(this);

class Search extends Component {
    state = {
        result: [],
        search: ""
    };

    componentDidMount() {
        this.searchBooks("Becoming");
    }

    searchBooks = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data.items }))
            .then(data => {
                console.log(this.state.result[0].volumeInfo.title);
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });

    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);

    };

    handleSave = (bookData) => {
        // const { id, title } = bookData
        // console.log("Save the title, descriptin, and save = true");
        // // console.log(title1);
        // console.log(id)

        API.saveBook({
            googleId: bookData.id,
            title: bookData.title,
            saved: true
        }).then(data => console.log(data))

    };
    //save form Submit 
    //     if(this.state.title && this.state.author) {
    //     API.saveBook({
    //         title: this.state.title,
    //         author: this.state.author,
    //         synopsis: this.state.synopsis
    //     })
    //         .then(res => this.loadBooks())
    //         .catch(err => console.log(err));
    // }


    render() {
        return (
            <div>
                <h1>Search Page</h1>
                <h3> {this.state.search}</h3>
                <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                {!this.state.result.length ? (<h1>No Search</h1>) :
                    (<div> {this.state.result.map((data, i) => (
                        // <h3> {data.volumeInfo.title}
                        //     {data.volumeInfo.authors ? <p>{data.volumeInfo.authors[0]}</p> : <p>No Authors</p>}


                        // </h3>

                        <SearchResults
                            id={data.id}
                            key={data.id}
                            title={data.volumeInfo.title}
                            author={data.volumeInfo.authors ? (data.volumeInfo.authors[0]) : <p>No Authors</p>}
                            thumbnail={data.volumeInfo.imageLinks ? (data.volumeInfo.imageLinks.thumbnail) : <p>No image</p>}
                            description={data.volumeInfo.description}
                            handleSave={this.handleSave}

                        />

                    ))} </div>)

                }



                {/* <SearchResults result={this.state.result} /> */}
            </div >

        );
    }
}

export default Search;

