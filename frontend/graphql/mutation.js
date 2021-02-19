import gql from 'graphql-tag'

export const createPersonMutation = gql`
  mutation createPersonMutation(
    $pid: String
    $full_name: String
    $address: String
    $nationality: String
    $appointment_date: DateTime
    $check_in: DateTime
    $specimen_collected: DateTime
  ) {
    createPerson(
      input: {
        data: {
          pid: $pid
          full_name: $full_name
          address: $address
          nationality: $nationality
          appointment_date: $appointment_date
          check_in: $check_in
          specimen_collected: $specimen_collected
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
