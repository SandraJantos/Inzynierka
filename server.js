const express = require('express'); //
const path = require('path');
const compression = require('compression')

const cors = require('cors');
const User = require('./models/User.js');
const passport = require('passport');
const SocketIo = require('socket.io');
const users = require('./routes/api/users');
const books = require('./routes/api/books');
const chats = require('./routes/api/chats');
const channel = require('./routes/api/channel');

const app = express(); 


//const dev = app.get('env') !== 'production';
const port = process.env.PORT || 5000;

//app.use(express.static(path.join(__dirname, 'client')));

//set env vars
const bodyParser = require('body-parser');

//const db = process.env.MONGODB_URI;

const db = require('./config/keys').mongoURI;
let dbUrl = 'mongodb://superSam:superSam123@ds155299.mlab.com:55299/sam_db';
const mongoose = require('mongoose');
let loggedUsers = [];

//app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use('/api/users',users);
app.use('/api/books',books);
app.use('/api/chats',chats);
app.use('/api/channel',channel);

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: webpackConfig.output.publicPath
// }));
// app.use(require('webpack-hot-middleware')(compiler));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/public/index.html'));
// });
//load routers

app.use(cors())

if (process.env.NODE_ENV === 'production'){
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
}

mongoose.Promise = global.Promise;
mongoose.connect(db)
    .then(() => console.log("sucdsdsdsddddcess"))
    .catch(err => console.log(err))
app.use(passport.initialize());
require('./config/passport')(passport);


 
// const server = app.listen(port, function(err) {
//   if (err) {  
//     consoles.log(err);
//     return;
//   }
//   console.log('server listening on port: %s', port);
// });

// const server = require('http').createServer(app);
// const io = require('socket.io').listen(server);

const server = app.listen(port,  function(err) {
  if (err) {
    return;
  } 
  console.log('server listening on port: %s', port);
});

// const io = new SocketIo(server, {path: '/api/chat'})
//const socketEvents = require('./socketEvents')(io);
let usersJoined = [];
let connectedUsers = { }
function addUser(userList, user){
  let newList = Object.assign({}, userList)
  newList[user.name] = user
  return newList
}

function removeUser(userList, username){
  let newList = Object.assign({}, userList)
  delete newList[username]
  return newList
}

const io = new SocketIo(server,{ path: '/api/chat'}) 
  io.on('connection', function(socket) {
   // socket.join('general');
 // socket.on('connectedUser', (users) =>{
 //  console.log(users);
 //        socket.name = users;
 //        userss.push(socket.name);
 //        io.sockets.emit('connectedUser', userss);
 //    });
  socket.on('joinRoom', function(room,name) {
socket.join(room);

    });
    socket.on('USER_CONNECTED', (user)=>{
      console.log(user);
    user.socketId = socket.id
    connectedUsers = addUser(connectedUsers, user)
    socket.user = user


    io.emit('USER_CONNECTED', connectedUsers)
    console.log(connectedUsers);

  })
    socket.on('disconnect', ()=>{
    if("user" in socket){
      connectedUsers = removeUser(connectedUsers, socket.user.name)

      io.emit('USER_DISCONNECTED', connectedUsers)
      console.log("Disconnect", connectedUsers);
    }
  })
    socket.on('chat mounted', function(user) {
      socket.emit('receive socket', socket.id)
    })
    socket.on('leave channel', function(channel) {
      socket.leave(channel)
    })
    socket.on('get users', function(users) {
    io.sockets.clients('room')
    })
    socket.on('send message', function(msg) {
     io.sockets.emit('new message',msg);
    });
    socket.on('new channel', function(channel) {
      io.sockets.emit('new channel', channel)
    });
    socket.on('typing', function (data) {
      socket.broadcast.to(data.channel).emit('typing bc', data.user);
    });
    socket.on('stop typing', function (data) {
      socket.broadcast.to(data.channel).emit('stop typing bc', data.user);
    });
    socket.on('new private channel', function(socketID, channel) {
      socket.broadcast.to(socketID).emit('receive private channel', channel);
    })
  });
//    

// io.on('connection', function(socket) {
//  socket.on('new user', function(data,callback) {
//    if (data in loggedUsers){
//      callback(false)
//    } else{
//      callback(true);
//      socket.nickname = data,
//      loggedUsers[socket.nickname] = socket;
//    }
//  })
// })