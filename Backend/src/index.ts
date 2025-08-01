import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({port: 8080})

interface User{
    socket: WebSocket,
    room: string
}


let user = 0;
//@ts-ignore
let allSocket: User[] = [];

wss.on('connection', (socket)=>{
    
    user = user + 1;
    console.log("user connect ", user);
    socket.on("message", (message)=>{
        //@ts-ignore
        const parsedMessage = JSON.parse(message)
        if(parsedMessage.type == "join"){
            console.log(`User joined room ` + parsedMessage.payload.roomId);
            
            allSocket.push({
                socket,
                room: parsedMessage.payload.roomId
            })
       }if( parsedMessage.type == "chat"){
        console.log("user want's to chat");
        console.log(parsedMessage.payload.message);
        
        let currentUserRoom = null;
        for(let i = 0; i < allSocket.length; i++){
            if(allSocket[i].socket==socket){
                currentUserRoom = allSocket[i].room
            }
        }
        for(let i = 0; i<allSocket.length; i++){
            if(allSocket[i].room == currentUserRoom){
                allSocket[i].socket.send(parsedMessage.payload.message)            
            }
        }
       }
        })
    })
    

