import { gql } from '@apollo/client'

export const CHARACTER_FIELDS = gql`
  fragment CharacterFields on Character {
    id
    name
    status
    image
  }
`
