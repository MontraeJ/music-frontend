import React, { useState, useEffect } from 'react';
import SongTable from './Components/SongTable/SongTable';
import axios from "axios";

function App() {

const[entries,setEntries] = useState([{title: "Drive My Car", album:"Rubber Soul", artist: "The Beatles", genre: "Folk Rock", releaseDate: "12/03/1965"}])
//async f(x) with Axios to retrieve the song from the database and then console log the response from the server
const getAllSongs = async () => {
  try{
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music') 
    setEntries(response.data)
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
      <SongTable parentEntries = {entries}/>
       
    </div>
  );
}

export default App;
