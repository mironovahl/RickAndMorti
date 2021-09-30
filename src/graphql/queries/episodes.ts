import { gql } from '@apollo/client'

const getEpisodes = gql`
  query Episodes($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      results {
        id
        name
        type
        dimension
        residents {
          id
          name
        }
        created
      }
    }
  }
`

export { getEpisodes }
