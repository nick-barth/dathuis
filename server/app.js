const { ApolloServer, gql } = require('apollo-server');

const data = require('./db.json');

const typeDefs = gql`
  type Person {
    first_name: String
    last_name: String
	email: String
	gender: String
	photo: String
	origin: String
  }

  type Query {
    search(filter: String): [Person]!
  }
`;

const resolvers = {
  Query: {
    search: (parent, args, context, info) => {
		const results = args.filter ?
			data.filter((item) => {
				const search = args.filter.toLowerCase();
				const firstNameMatch = item.first_name.toLowerCase().includes(search);
				const lastNameMatch = item.last_name ? item.last_name.toLowerCase().includes(search) : false;
				return (firstNameMatch || lastNameMatch)
			}).slice(0,10)
		: [];

		return results;
	}
  },
};

const server = new ApolloServer({ typeDefs, resolvers, context: (data) => data });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
