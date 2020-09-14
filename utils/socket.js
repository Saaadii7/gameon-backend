module.exports = (server, app) => { 
    const options = { /* ... */ };
    const io = require('socket.io')(server);
    app.set('io', io);
    process.io = io;

    io.on('connection', socket => { 
        console.log('---------user connected-----------',);    
    });

    return io;
}
    
