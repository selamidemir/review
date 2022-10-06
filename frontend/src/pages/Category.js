import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      data {
        id
        attributes {
          name
          reviews {
            data {
              id
              attributes {
                title
                body
                rating
                categories {
                  data {
                    id
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

function Category() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {data.category.data.attributes.reviews.data.map((review, index) => (
        <div className="review-card" key={index}>
          <div className="rating">{review.attributes.rating}</div>
          <h1>{review.title}</h1>
          {/* {console.log("bir : ", review.attributes.categories.data)} */}
          {
            review.attributes.categories.data.map(cat => <small key={cat.id}> {cat.attributes.name} </small> )
          }

          <p>{review.attributes.body.substring(0, 200)}...</p>
          <Link to={`/details/${review.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default Category;
