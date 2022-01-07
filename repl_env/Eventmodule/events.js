// Events Module
// nodejs has built in module called as "Events"
// where you can create-,fire- and listen for- your own events.
// Ex.1 - registering for the events to be fired only one time using once.
// Ex.2 - create an event emitter instance and register a couple of callbacks
// Ex.3 - registering for the event with callback parameters

const event = require("events");

const eventEmitter = new event();

// declaring event

eventEmitter.on('saymyname',()=>{
    console.log("your name is sumeet");
})

eventEmitter.on('saymyname',()=>{
    console.log("your name is jumde");
})

// event with multiple parameters
eventEmitter.on('checkpage',(sc,msg)=>{
    console.log(`status code is ${sc} and page is ${msg}`)
})
// calling event , we can call multiple event with same event name
eventEmitter.emit('saymyname');

// calling event with multipul arguments
eventEmitter.emit("checkpage",200,"ok");