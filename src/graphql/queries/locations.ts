import { gql } from '@apollo/client'

import { CHARACTER_FIELDS } from '../fragments'

const getLocations = gql`
  ${CHARACTER_FIELDS}
  query Locations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      results {
        id
        name
        type
        dimension
        residents {
          ...CharacterFields
        }
      }
    }
  }
`

export { getLocations }
