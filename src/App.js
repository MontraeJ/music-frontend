import React, { useState } from 'react';
import SongTable from './Components/SongTable/SongTable';

function App() {

  const[entries,setEntries] = useState([{title: "Drive My Car", album:"Rubber Soul", artist: "The Beatles", genre: "Folk Rock", releaseDate: "12/03/1965"}])

  return (
    <div>
      <SongTable parentEntries = {entries}/>
       
    </div>
  );
}

export default App;
