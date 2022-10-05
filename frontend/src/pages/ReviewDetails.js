import React from "react";
import { useParams } from "react-router-dom";
// import useFetch from "../hooks/useFetch";
import { useQuery, gql } from "@apollo/client";

const REVIEW = gql`
  query GetReview($id: ID!){
    review(id: $id) {
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

function ReviewDetails() {
  const { reviewId } = useParams();
  // const { loading, error, data } = useFetch(
  //   `http://localhost:1337/api/reviews/${reviewId}`
  // );
  const { loading, error, data } = useQuery(REVIEW, {
    variables: {id: reviewId}
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="review-card">
      <h2>{data.review.data.attributes.title}</h2>
      <div className="rating">{data.review.data.attributes.rating}</div>
      <small>console list</small>

      <p>{data.review.data.attributes.body}</p>
    </div>
  );
}

export default ReviewDetails;
