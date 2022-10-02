import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

function HomePage() {
  const { loading, error, data } = useFetch("http://localhost:1337/api/reviews");
  if (loading) return <p>loading..</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {data.map((review) => (
        <div className="review-card" key={review.id}>
          <div className="rating">{review.attributes.rating}</div>
          <h1>{review.title}</h1>

          <small>console list</small>

          <p>{review.attributes.body.substring(0, 200)}...</p>
          <Link to={`/details/${review.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
