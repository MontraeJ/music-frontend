import React, { useState, useEffect } from 'react';
import SongTable from './Components/SongTable/SongTable';
import axios from "axios";

function App() {

const[entries,setEntries] = useState([{title: "Drive My Car", album:"Rubber Soul", artist: "The Beatles", genre: "Folk Rock", releaseDate: "12/03/1965"}])
//async f(x) with Axios to retrieve the song from the database and then console log the response from the server
const getAllSongs = async () => {
  try{
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music') 
    //setEntries(response.data)
  }
  catch{
    console.log ("file not found") //is that supposed to say "file not found"?
  } 
}
useEffect (()=>{//runs at different points...here it will run at the beginning
getAllSongs ()
})
return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Music Library</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Title</a>
        <a class="nav-link" href="#">Album</a>
        <a class="nav-link" href="#">Artist</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>
      <SongTable parentEntries = {entries}/>
      
         </div>
  );
}

export default App;
