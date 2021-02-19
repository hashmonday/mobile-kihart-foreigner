import gql from 'graphql-tag'

export const personalTemplatesQuery = gql`
  query personalTemplatesQuery {
    personalTemplates {
      id
      template_name
      address
      telephone_number
    }
  }
`

export const personByIDQuery = gql`
  query personByIDQuery($id: ID!) {
    person(id: $id) {
      id
      created_at
      updated_at
      first_name
      last_name
      date_of_birth
      address
      telephone_number
      note
      passport_number
      published_at
    }
  }
`
