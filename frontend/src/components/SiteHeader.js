import React from 'react'
import {Link} from 'react-router-dom'
import {useQuery, gql} from '@apollo/client'

const CATEGORIES = gql`
  query GetCategories {
    categories {
      data {
        id 
        attributes {
          name
        }
      }
    }
  }
`;

function SiteHeader() {
  const { loading, error, data } = useQuery(CATEGORIES)

  if (loading) return <p>loading categories...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='site-header'>
        <Link to='/'><h1>Selo Reviews</h1></Link>
        <nav className='categories'>Filter By Category : 
          {
            data.categories.data.map(category => <Link to={`/category/${category.id}`} key={category.id}> {category.attributes.name}</Link>)
          }
        </nav>
    </div>
  )
}

export default SiteHeader