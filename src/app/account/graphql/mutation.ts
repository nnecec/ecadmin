import gql from 'graphql-tag'

export const signup = gql`
    mutation signup($username:String,$password:String) {
      signup(username: $username,password:$password) {
            username
        }
    }
`
