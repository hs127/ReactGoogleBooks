import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";


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

    handleSave = event => {
        event.preventDefault();
        console.log("Save the title, descriptin, and save = true");

    }
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
                <SearchResults result={this.state.result} />
            </div>

        );
    }
}

export default Search;

