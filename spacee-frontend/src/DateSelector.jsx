// create a new component for displaying the images

import React, { useState } from "react";
import axios from "axios";

export const DateSelector = (props) => {
    /*const [date, setDate] = useState(new Date()); // initialize date
    const [images, setImages] = useState([]);
    const onClick = () => {
      let dateString = date.toString();
      // on submit:
      // 1. send the request to the backend
      axios.get(`http://localhost:8080`, { params : {
        date: dateString }})
      .then(res => {
        // 2. return the photos from the backend to be displayed
        for(let image of res.data[dateString]){
          images.push(image);
        }
        console.log("number of images: " + images.length);
      })

    }*/
    return (
      <div id="date-selector">
        <h1>Date Selector</h1>
        <input
          type="date"
          value={props.date}
          onChange={(e) => props.setDate(e.target.value)}
        ></input>
        <button onClick={() => props.submit()}>Submit</button>
      </div>
    );
}