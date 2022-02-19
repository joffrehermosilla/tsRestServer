//conexion 1

const express = require('express');

const app = express();

const http = require('http');

const server = http.createServer(app);

//server.listen(3000);

app.use(express.static('public'));

const socketIo = require('socket.io');

//var iox = socketIo.listen(server);
const io = require('socket.io')(http);
const iogetDoc = require('socket.io')(http);
const ioaddDoc = require('socket.io')(http);
const ioeditDoc = require('socket.io')(http);


io.on('connect', function(socket){
    io.emit("documents", Object.keys(documents));
    console.log("nueva conexion id:" + socket.id);
    let previousId;
      
        const safeJoin = currentId => {
        socket.leave(previousId);
        socket.join(currentId, () => console.log(`Socket ${socket.id} joined room ${currentId}`));
        previousId = currentId;
      };


    
    });

    ///////////

    iogetDoc.on("connect", socket => {
        // ...
      
        socket.on("getDoc", docId => {
          safeJoin(docId);
          socket.emit("document", documents[docId]);
        });
      
        // ...
      });
      
      ioaddDoc.on("connect", socket => {
        // ...
      
        socket.on("addDoc", doc => {
          documents[doc.id] = doc;
          safeJoin(doc.id);
          io.emit("documents", Object.keys(documents));
          socket.emit("document", doc);
        });
      
        // ...
      });
      
      ioeditDoc.on("connect", socket => {
        // ...
      
        socket.on("editDoc", doc => {
          documents[doc.id] = doc;
          socket.to(doc.id).emit("document", doc);
        });
      
        // ...
      });
      
    





    //conexion 2

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');

  
});

server.listen(3000, ()=> {
  console.log('Socket.io configuracion server.js listening on *:3000');

});

////////////////////////









