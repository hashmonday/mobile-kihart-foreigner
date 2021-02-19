import gql from 'graphql-tag'

export const createPersonMutation = gql`
  mutation createPersonMutation(
    $pid: String
    $full_name: String
    $address: String
    $appointment_date: Date
  ) {
    createPerson(
      input: {
        data: {
          pid: $pid
          full_name: $full_name
          address: $address
          appointment_date: $appointment_date
        }
      }
    ) {
      person {
        id
      }
    }
  }
`

export const updatePersonMutation = gql`
  mutation updatePersonMutation(
    $id: ID!
    $first_name: String!
    $last_name: String!
    $date_of_birth: Date!
    $address: String!
    $telephone_number: String!
    $passport_number: String
    $node: String
  ) {
    updatePerson(
      input: {
        where: { id: $id }
        data: {
          first_name: $first_name
          last_name: $last_name
          date_of_birth: $date_of_birth
          address: $address
          telephone_number: $telephone_number
          passport_number: $passport_number
          note: $node
        }
      }
    ) {
      person {
        id
      }
    }
  }
`
