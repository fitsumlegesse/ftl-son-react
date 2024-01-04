import React, { useState } from 'react';
import axios from 'axios';
import './AddSong.css';

export const AddSong = () => {
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/addSong', {
        ArtistName: artist,
        SongName: song,
        Link: youtubeLink,
      });

      console.log('Data sent successfully:', response.data);

      setSubmitted(true);
      setArtist('');
      setSong('');
      setYoutubeLink('');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div className="add-song-container">
      <h1>Add a Song</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="song-form">
          <div className="form-group">
            <label htmlFor="artist" className="label">
              Artist Name:
            </label>
            <input
              type="text"
              id="artist"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              placeholder="Enter artist name"
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="song" className="label">
              Song Name:
            </label>
            <input
              type="text"
              id="song"
              value={song}
              onChange={(e) => setSong(e.target.value)}
              placeholder="Enter song name"
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="youtubeLink" className="label">
              YouTube Link (Optional):
            </label>
            <input
              type="text"
              id="youtubeLink"
              value={youtubeLink}
              onChange={(e) => setYoutubeLink(e.target.value)}
              placeholder="Enter YouTube link"
              className="input-field"
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      ) : (
        <div className="thank-you-message">
          <h2>Thank you for submitting!</h2>
          <button onClick={() => setSubmitted(false)} className="submit-button">
            Add Another Song
          </button>
        </div>
      )}
    </div>
  );
};

export default AddSong;
