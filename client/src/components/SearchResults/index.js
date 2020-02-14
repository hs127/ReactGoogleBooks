import React from "react";
import "./style.css";


function SearchResults(props) {

  return (
    //issue: for some searches theres a issue with images - Harry potter and how to kill a mockingbird - auhtors
    <ul className="list-group search-results">

      <li className="list-group-item">
        {/* {data.volumeInfo.imageLinks ? <img src={data.volumeInfo.imageLinks.thumbnail} /> : <p>No image</p>} */}
        {/* <h1 id="key">{props.id}</h1> */}
        <h3>Title: {props.title}</h3>
        <img src={props.thumbnail} />
        <h4>Author: {props.author} </h4>
        <h4>Description</h4> <p>{props.description}</p>

        <button type="submit" onClick={() => props.handleSave(props)} className="btn btn-success">
          Save
        </button>
        {/* <h4>Description</h4> <p>{data.volumeInfo.description}</p>
          <h4>Preview Link</h4> <p> <a href={data.volumeInfo.previewLink}></a></p> */}
        {/* <p><img alt="Book" src={data.volumeInfo.imageLinks.thumbnail} className="img-fluid" /></p> */}
      </li>

    </ul >


  );
}

export default SearchResults;
