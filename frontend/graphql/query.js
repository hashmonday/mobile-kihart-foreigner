import gql from 'graphql-tag'

export const personsQuery = gql`
  query personsQuery {
    persons(limit: -1) {
      id
      created_at
      updated_at
      pid
      full_name
      address
      nationality
      appointment_date
      check_in
      specimen_collected
      published_at
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
