import gql from 'graphql-tag'

export const getUserDetailQuery = gql`
     query getUserDetail($id: ID!) {
        post(id: $id) {
            username
        }
    }
`

export const signupMutation = gql`
    mutation signup($username:String,$password:String) {
      signup(username: $username,password:$password) {
            username
        }
    }
`

export const loginMutation = gql`
    mutation login($username:String,$password:String) {
      login(username: $username,password:$password) {
            username
        }
    }
`
