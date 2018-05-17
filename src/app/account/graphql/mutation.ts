import gql from 'graphql-tag'

export const signupMutation = gql`
    mutation signup($username:String,$password:String) {
      signup(username: $username,password:$password) {
            username
        }
    }
`
