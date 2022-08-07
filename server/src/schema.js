const {gql} = require('apollo-server');

const typeDefs = `
    type Query {
        "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
    }
    
    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        "Uniqiue identifier"
        id: ID!
        "Title of the track"
        title: String!
        "Author of the track"
        author: Author!
        "Optional: Thumbnail for the track"
        thumbnail: String
        "Optional: Length of the track"
        length: Int
        "Optional: Count of modules within a track"
        modulesCount: Int
    }

    "Author of a complete Track or a Module"
    type Author {
        "Unqiue identifier"
        id: ID!
        "Author name"
        name: String!
        "Optional: Profile photo URL"
        photo: String
    }
`

module.exports = typeDefs;
