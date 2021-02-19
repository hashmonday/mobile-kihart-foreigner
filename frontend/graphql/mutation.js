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

export const setPrintDate = gql`
  mutation setPrintDate($id: ID!, $check_in: DateTime) {
    updatePerson(input: { where: { id: $id }, data: { check_in: $check_in } }) {
      person {
        id
      }
    }
  }
`

export const canclePrintDate = gql`
  mutation canclePrintDate($id: ID!) {
    updatePerson(input: { where: { id: $id }, data: { check_in: null } }) {
      person {
        id
      }
    }
  }
`

export const setCollectedDate = gql`
  mutation setCollectedDate($id: ID!, $specimen_collected: DateTime) {
    updatePerson(
      input: {
        where: { id: $id }
        data: { specimen_collected: $specimen_collected }
      }
    ) {
      person {
        id
      }
    }
  }
`

export const cancleCollectedDate = gql`
  mutation cancleCollectedDate($id: ID!) {
    updatePerson(
      input: { where: { id: $id }, data: { specimen_collected: null } }
    ) {
      person {
        id
      }
    }
  }
`
