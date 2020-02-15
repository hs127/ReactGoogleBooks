import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="book">Book Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="books"
          list="books"
          type="text"
          className="form-control"
          placeholder="Type in a book"
          id="breed"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
