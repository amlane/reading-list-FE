import { gql } from "apollo-boost";

const getBooksQuery = gql`
{
    books{
        name
        id
    }
}
`

const getAuthorsQuery = gql`
{
    authors{
        name
        id
    }
}
`

const addBookMutation = gql`
mutation($name: String!, $genre: String!, $author_id: ID!){
    addBook(name: $name, genre: $genre, author_id: $author_id){
        name
        id
    }
}
`

export { getBooksQuery, getAuthorsQuery, addBookMutation };