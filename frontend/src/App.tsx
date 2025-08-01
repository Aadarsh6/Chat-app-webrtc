// import { useEffect, useState } from 'react'
// import './App.css'

// function App() {
//   const [socket, setSocket] = useState()
//   const [message, setMessage] = useState()
//   // const [display, setDisplay] = useState()


// const sendMessage=()=>{
//   if(!socket) return
//   //@ts-ignore
//   socket.send(message)
//   console.log(message);
  
// }

// useEffect(()=>{
//   const ws = new WebSocket("ws://localhost:8080")
//   //@ts-ignore
//   setSocket(ws)
//   console.log('User connected');
//   ws.onmessage=(event)=>{
//     console.log(event.data);
//     // setDisplay(event.data)
//     alert(event.data)
//   }
// })

//   return (
//     <>

//     <h3>{message}</h3>

//     <input type="text"      
//     //@ts-ignore
//     onChange={(e)=>setMessage(e.target.value)}
//     />
//     <button
//     onClick={sendMessage}
//     >send</button>
//     </>
//   )
// }

// export default App

import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App