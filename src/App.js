import React, { useState } from 'react';




function App() {

  const[entries,setEntries] = useState([{title: "Drive My Car", album:"Rubber Soul", artist: "The Beatles", genre: "Folk Rock", releaseDate: "12/03/1965"}])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>ReleaseDate</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Drive My Car</td>
              <td>Rubber Soul</td>
              <td>The Beatles</td>
              <td>Folk Rock</td>
              <td>12/03/1965</td>
            </tr>
          </tbody>
          </table>
    </div>
  );
}

export default App;
