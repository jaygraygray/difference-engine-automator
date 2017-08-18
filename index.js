const express = require('express');
      app = express();
      bodyParser = require('body-parser');
      cors = require('cors');
      port = 9999;
var   { buildSchema } = require('graphql');
      graphqlHTTP = require('express-graphql')

app.use(cors())
app.use(bodyParser.json())

var schema = buildSchema(`
      type Query {
            name: String,
      }
`);

var root = {
      hello: () => {
            return 'Hello from the Other Side!'
      },
}

app.use('/graphql', graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true
}))

app.listen(port, console.log('Connected on port', port))


students: {
      
}



