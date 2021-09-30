import { gql } from '@apollo/client'

const getLocations = gql`
  query Locations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      results {
        id
        name
        type
      }
    }
  }
`

export { getLocations }
