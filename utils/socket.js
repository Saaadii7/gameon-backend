module.exports = (server, app) => { 
    const options = { /* ... */ };
    const io = require('socket.io')(server, options);

    app.set('io', io);
    process.io = io;

    io.on('connection', socket => { 
        console.log('---------user connected-----------', socket.id);    
    });

    return io;
};
