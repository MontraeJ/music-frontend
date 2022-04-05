
const SongTable = (props) => {
    return (      <table>
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
            {props.parentEntries.map((entry, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{entry.title}</td>
                  <td>{entry.album}</td>
                  <td>{entry.artist}</td>
                  <td>{entry.genre}</td>
                  <td>{entry.releaseDate}</td>
                </tr>
              );
            })}
          </tbody>
          </table> );
}
 
export default SongTable;