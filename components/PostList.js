import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_TRIPS = gql`
  {
    trips {
      id
      name
      commentary
      CoverImage {
        url
      }
    }
  }
`;

export default function PostList() {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    GET_TRIPS
  );

  if (error) return <div>Error loading posts.</div>
  if (loading) return <div>Loading</div>;

  const { trips } = data;
  // const areMorePosts = allPosts.length < _allPostsMeta.count

  return (
    <section>
      <ul>
        {trips.map((trip, index) => (
          <li key={trip.id}>
            <div>{trip.name}</div>
            <p>{trip.commentary}</p>
            {trip.CoverImage && (
              <img
                src={trip.CoverImage.url.replace("upload/", "upload/w_200/")}
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
