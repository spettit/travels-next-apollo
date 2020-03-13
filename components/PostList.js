import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'

const GET_TRIPS = gql`
{
trips {
name
Description
CoverImage {
  url
}
}
}
`;


export default function PostList() {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    GET_TRIPS
  )

  // const loadingMorePosts = networkStatus === NetworkStatus.fetchMore

  // const loadMorePosts = () => {
  //   fetchMore({
  //     variables: {
  //       skip: allPosts.length,
  //     },
  //     updateQuery: (previousResult, { fetchMoreResult }) => {
  //       if (!fetchMoreResult) {
  //         return previousResult
  //       }
  //       return Object.assign({}, previousResult, {
  //         // Append the new posts results to the old one
  //         allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts],
  //       })
  //     },
  //   })
  // }

  if (error) return <ErrorMessage message="Error loading posts." />
  if (loading) return <div>Loading</div>

  const { trips } = data
  // const areMorePosts = allPosts.length < _allPostsMeta.count

  return (
    <section>
      <ul>
        {trips.map((trip, index) => (
          <li key={trip.id}>
            <div>
            {trip.name}
            </div>
            <p>{trip.Description}</p>
            {trip.CoverImage && <img src={trip.CoverImage.url.replace( 'upload/', 'upload/w_200/')} />}
          </li>
        ))}
      </ul>
      
      <style jsx>{`
        section {
          padding-bottom: 20px;
        }
        li {
          display: block;
          margin-bottom: 10px;
        }
        div {
          align-items: center;
          display: flex;
        }
        a {
          font-size: 14px;
          margin-right: 10px;
          text-decoration: none;
          padding-bottom: 0;
          border: 0;
        }
        span {
          font-size: 14px;
          margin-right: 5px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        button:before {
          align-self: center;
          border-style: solid;
          border-width: 6px 4px 0 4px;
          border-color: #ffffff transparent transparent transparent;
          content: '';
          height: 0;
          margin-right: 5px;
          width: 0;
        }
      `}</style>
    </section>
  )
}
