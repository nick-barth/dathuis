import gql from "graphql-tag";

export const GET_SEARCH_RESULTS = gql`
query search($searchString: String!){
  search(filter: $searchString) {
    first_name
    last_name
	origin
	photo
  }
}
`;
