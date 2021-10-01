import { gql } from '@apollo/client'

import { CHARACTER_FIELDS } from '../fragments'

const getEpisodes = gql`
  ${CHARACTER_FIELDS}
  query Episodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      results {
        id
        episode
        name
        characters {
          ...CharacterFields
        }
        created
      }
    }
  }
`

export { getEpisodes }
