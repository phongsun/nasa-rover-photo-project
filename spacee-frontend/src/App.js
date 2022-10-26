import logo from './logo.svg';
import './App.css';
import { DateSelector } from './DateSelector';
import React, { useState } from "react";
import axios from "axios";
import ResultsPanel from './ResultsPanel';
//TO-DO: Make image display component
//Find out how to display images from link

function App() {
  const [date, setDate] = useState(new Date()); // initialize date
  const [images, setImages] = useState([]);
  const [beforeImages, setBeforeImages] = useState([]);
  const [test, setTest] = useState(0);

  const submit = () => {
    let dateString = date.toString();
    // on submit:
    // 1. send the request to the backend
    setBeforeImages([])
    axios.get(`http://localhost:8080`, { params : {
      date: dateString }})
    .then(res => {
      console.log("yuh");
      // 2. return the photos from the backend to be displayed
      for(let image of res.data[dateString]){
        beforeImages.push(<img src = {image.image_url} width="100"/>);
      }
      setImages(beforeImages);
      console.log("number of images: " + images.length);
    })

  }

  return (
    <div className="App">
      <h1>NASA Photo Selector</h1>
      <p>Select what date you want to select photos from.</p>
      <DateSelector submit = {submit}
      date = {date} 
      setDate = {(newDate) => {
        setDate(newDate);
      }}/>
      <ResultsPanel
      images = {images}
      />

    </div>
  );
}

export default App;
