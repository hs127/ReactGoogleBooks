import React from "react";
import "./style.css";
import SaveBtn from "../SaveBtn";

function SearchResults(props) {
  console.log(props.result);

  return (
    //issue: for some searches theres a issue with images - Harry potter and how to kill a mockingbird - auhtors
    <ul className="list-group search-results">
      {props.result.map((data, i) => (
        <li key={`book${i}`} className="list-group-item">
          {data.volumeInfo.imageLinks ? <img src={data.volumeInfo.imageLinks.thumbnail} /> : <p>No image</p>}
          <h3>Title: {data.volumeInfo.title}</h3>
          <h4>Author: </h4>
          {data.volumeInfo.authors ? <p>{data.volumeInfo.authors[0]}</p> : <p>No Authors</p>}

          <h4>Description</h4> <p>{data.volumeInfo.description}</p>
          <h4>Preview Link</h4> <p> <a href={data.volumeInfo.previewLink}></a></p>

          <SaveBtn />
          {/* <p><img alt="Book" src={data.volumeInfo.imageLinks.thumbnail} className="img-fluid" /></p> */}
        </li>

      ))
      }
    </ul >


  );
}

export default SearchResults;
