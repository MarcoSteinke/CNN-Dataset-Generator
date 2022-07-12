const express = require('express')
const app = express()
const port = 8080

const tensorflow = require('tfjs')
const fs = require("fs");

// read API key
const buffer = fs.readFileSync("credentials.txt");
const apiRequestToken = buffer.toString();
const CNNImageFetcher= require("./src/fetch/CNNImageFetcher.js");
const cnnImageFetcher = new CNNImageFetcher(apiRequestToken);

app.get('/', (req, res) => res.send("hello data"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))