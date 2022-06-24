import { gql } from "@apollo/client";

export const ADD_CLIENT = gql`
    mutation addClient($name: String!, $email: String!, $phone: String!){
        addClient(name: $name, email: $email, phone: $phone){
            id
            email
            name
            phone
        }
    }
`;

export const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;
