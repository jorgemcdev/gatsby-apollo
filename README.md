<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's Apollo Query
</h1>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.


## pages/index.js

```
// This query is executed at build time by Gatsby.
export const GatsbyQuery = graphql`
  {
    rickAndMorty {
      character(id: 1) {
        name
        image
      }
    }
  }
`;

// This query is executed at run time by Apollo.
const APOLLO_QUERY = gql`
  {
    character(id: 2) {
      name
      image
    }
  }
`;


export default ({
  data: {
    rickAndMorty: { character },
  },
}) => (
    <Layout>
      <SEO title="Home" />
      <div style={{ textAlign: 'center', width: '600px', margin: '50px auto' }}>
        <h1>{character.name} With His Pupper</h1>
        <p> Rick & Morty API data loads at build time</p>
        <div>
          <img src={character.image} alt={character.name} style={{ width: 300 }} />
        </div>

        <hr />

        <Query query={APOLLO_QUERY}>
          {({ data, loading, error }) => {
            if (loading) return <p>Loading pupper...</p>;
            if (error) return <p>Error: ${error.message}</p>;

            return (
              <div>
                <h1>{data.character.name} With His Pupper</h1>
                <p> Morty API data loads at run time.</p>
                <img src={data.character.image} alt={data.character.name} style={{ width: 300 }} />
              </div>
            );
          }}
        </Query>

      </div>
    </Layout>
);


```
