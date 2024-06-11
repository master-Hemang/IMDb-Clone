import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/movies/${id}`).then((response) => {
      setMovie(response.data);
    });
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <img src={movie.imageUrl} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.longDescription}</p>
    </div>
  );
};

export default MovieDetail;
