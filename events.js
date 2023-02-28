var fs = require('fs');
var rs = fs.createReadStream('./NODE_SAMPLE_FILE.txt');
rs.on('open', function(){
    console.log('The file is open');
});

var events = require('events');
var eventemitter = new events.EventEmitter();

eventemitter.on(('scream'), function(){
    console.log('A scream is heard');
});

eventemitter.emit('scream'); 