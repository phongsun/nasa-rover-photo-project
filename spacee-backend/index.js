// API key: 2MLKplsaFV5GpSfHL76beZ5mXcXQRNfmAxFAw2ve
const express = require("express");
const bodyParser = require("body-parser");
const api_key = '2MLKplsaFV5GpSfHL76beZ5mXcXQRNfmAxFAw2ve';
const request = require('request');
const _ = require('lodash');
const cors = require('cors')

const app = express();
const port = 8080;
app.use(cors())
app.get("/", (req, res) => {
  request(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${req.query.date}&api_key=${api_key}`, { json: true }, (nasaErr, nasaRes, nasaBody) => {
    // if invalid link
    //if (nasaErr) { return console.log(nasaErr); }

    var date = req.query.date
    var jsonImages = [];
    
    // gather only the image url and date from each photo taken on the specified date
    for (var photo of nasaBody.photos) {
      jsonImages.push({
        image_url: photo.img_src,
        image_date: photo.earth_date
      })
    }

    jsonImages = _.groupBy(jsonImages, "image_date")

    res.send(jsonImages); // send the condensed json data back to the frontend
  });
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
