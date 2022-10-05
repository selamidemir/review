import React from "react";
// import useFetch from "../hooks/useFetch";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const REVIEW = gql`
  query {
    reviews {
      data {
        id
        attributes {
          title,
          rating,
          body
        }
      }
    }
  }
`;

function HomePage() {
  // const { loading, error, data } = useFetch("http://localhost:1337/api/reviews");
  const { loading, error, data } = useQuery(REVIEW);

  if (loading) return <p>loading..</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {data.reviews.data.map((review, index) => (
        <div className="review-card" key={index}>
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
