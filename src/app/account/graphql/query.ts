import gql from 'graphql-tag';

export const getUserDetail = gql`
     query getUserDetail($id: ID!) {
        post(id: $id) {
            username
        }
    }
`;
