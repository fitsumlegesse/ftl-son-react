import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewSong.css'

export const ViewSong = () => {
  const [data, setData] = useState([]);

  // Function to fetch data from backend
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/viewsong');
      const newData = response.data.map(item => ({
        ...item,
        status: localStorage.getItem(`status_${item._id}`) || ''
      }));
      setData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  // Function to handle marking an item as done
  const markAsDone = (id) => {
    setData(prevData =>
      prevData.map(item =>
        item._id === id ? { ...item, status: 'Already Played' } : item
      )
    );
    localStorage.setItem(`status_${id}`, 'Already Played');
  };

  return (
    <div className="song-container">
      <button className="fetch-button" onClick={fetchData}>Fetch Data</button>
      <table className="song-table">
        <thead>
          <tr>
            <th>Artist Name</th>
            <th>Song Name</th>
            <th>Link</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item._id}>
              <td>{item.ArtistName}</td>
              <td>{item.SongName}</td>
              <td>
                <a className="link" href={item.Link} target="_blank" rel="noopener noreferrer">
                  {item.Link}
                </a>
              </td>
              <td>
                {item.status ? (
                  <span className="status">{item.status}</span>
                ) : (
                  <button className="mark-button" onClick={() => markAsDone(item._id)}>
                    Mark as Done
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
