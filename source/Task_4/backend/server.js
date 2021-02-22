const jsonServer = require('json-server')
const auth = require('basic-auth')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const secret = 'secret'
const jwt = require('express-jwt')
const jwtBase = require('jsonwebtoken')
const { networkInterfaces } = require('os')

server.use(middlewares)

server.get('/token', (req, res) => {
  let user = auth(req)
  let db = router.db
  let users = db.get('user').value()
  let foundUser = users.find((u) => u.username === user.name && u.password === user.pass)
  if (foundUser) {
    let token = jwtBase.sign({
      id: foundUser.id
    }, secret)
    res.json({
      token: token
    })
  } else res.status(401).json({error: 'Incorrect credentials'})
})

server.use(jwt({ secret: secret, algorithms: ['HS256'] }).unless({
  path: [
    '/token'
  ]
}))

server.use(jsonServer.bodyParser)

server.post('/selection', (req, res) => {
  let token = req.headers.authorization.split(' ')[1]
  let userId = jwtBase.verify(token, secret).id
  res.sendStatus(200)
  console.log("selection [" + req.body + "] (item ids) posted by user " + userId + " (user id) ")
})

server.use((req, res, next) => {
  let userHasPermission = false
  //res.status(200)
  if (req.path === '/token')
    if (req.method === 'GET')
      userHasPermission = true
  if (req.path === '/item')
    if (req.method === 'GET')
      userHasPermission = true
  if (req.path.substring(0,6) === '/item/')
    if (req.method === 'GET')
      userHasPermission = true
  if (req.path === '/selection')
    if (req.method === 'POST')
      userHasPermission = true
  if (userHasPermission) next()
  else res.sendStatus(403)
})

server.use(router)
server.listen(3001, () => {
  let nets = networkInterfaces()
  let ip
  for (let name of Object.keys(nets))
    for (let net of nets[name])
      if (net.family === 'IPv4' && !net.internal)
        ip = net.address
  console.log('\x1b[32mCompiled successfully!\x1b[0m')
  console.log('')
  console.log('RESTful web services are now exposed by \x1b[1mTask_4_Backend\x1b[0m.')
  console.log('')
  console.log('  \x1b[1mLocal:\x1b[0m            http://localhost:\x1b[1m3001\x1b[0m')
  console.log('  \x1b[1mOn Your Network:\x1b[0m  http://' + ip + ':\x1b[1m3001\x1b[0m')
})
