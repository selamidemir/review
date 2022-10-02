import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function ReviewDetails() {
  const {reviewId} = useParams()
  const {loading, error, data} = useFetch(`http://localhost:1337/api/reviews/${reviewId}`)

  if(loading) return <p>Loading...</p>
  if(error) return <p>{error}</p>

  return (
    <div className='review-card'>
      <div className='rating'>{data.attributes.rating}</div>

      <small>console list</small>

      <p>{data.attributes.body}</p>
      
    </div>
  )
}

export default ReviewDetails