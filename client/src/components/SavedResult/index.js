import React from "react";
import "./style.css";


function SavedResult(props) {

  return (
    //issue: for some searches theres a issue with images - Harry potter and how to kill a mockingbird - auhtors
    <ul className="list-group search-results">

      <li className="list-group-item">
        {/* {data.volumeInfo.imageLinks ? <img src={data.volumeInfo.imageLinks.thumbnail} /> : <p>No image</p>} */}
        <h1 id="{prop.key}">{props.id}</h1>
        <h3>Title: <p id="title"> {props.title}</p></h3>
        {/* <img src={props.thumbnail} />
        <h4>Author: {props.author} </h4>
        <h4>Description</h4> <p>{props.description}</p> */}

        <button type="submit" onClick={() => props.handledelete(props.id)} className="btn btn-success">
          Delete
        </button>

      </li>

    </ul >


  );
}

export default SavedResult;
