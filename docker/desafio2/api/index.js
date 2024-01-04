const express = require('express')
const mysql = require('mysql')

const app = express()

const config = {
  host: 'database',
  user: 'root',
  password: 'root',
  database: 'nodedb',
}

const addRoutes = (app) => {
  app.get('/', (req, res) => {
    const connection = mysql.createConnection(config);
  
    connection.query(`SELECT name FROM people`, (err, result, fields) => {
      if(err) throw err

      res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ul>
          ${!!result.length ? result.map(people => `<li>${people.name}</li>`).join('') : ''}
        </ul>
      `)
    })

    connection.end()
  })
}

const listenApp = (app) => {
  const port = 3000
  app.listen(port, () => {
    console.log('rodando na porta: ', port)
  })
}

addRoutes(app)
listenApp(app)