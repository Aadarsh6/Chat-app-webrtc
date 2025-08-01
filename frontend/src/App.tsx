import { useEffect, useRef, useState } from "react"

const App = () => {

  const [message, setMessage] = useState(["hi there", "hello"])
//@ts-ignore
  const wsRef = useRef();
  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080")
    ws.onmessage = (event)=>{  
      setMessage(m=> [...m, event.data])
    }
    wsRef.current = ws

    ws.onopen = () => {
      ws.send(JSON.stringify({
        "type": "join",
        "payload": {
          "roomId": "red"
        }
      }))
    }
    
  },[])

  return (
    <div className="flex flex-col p-10 bg-black w-full h-screen ">
      <div className="h-[90vh] bg-red-200 p-20 pr-10 flex flex-col gap-2">
        {message.map((message, index) => (
          <div 
          key={index}
          className="bg-white/50 w-fit p-4 rounded-3xl font-semibold text-black/80">{message}</div>
        ))}
      </div>
      <div className="h-[10vh] bg-white/50 flex gap-2 items-center justify-center">
      <input type="text" id="message" className="bg-white/80 w-1/2 h-10 "></input>
      <button className="bg-purple-600 hover:bg-purple-500 text-white p-4 rounded-2xl"
      onClick={()=>{
        //@ts-ignore
        const message = document.getElementById("message")?.value;
        //@ts-ignore
        wsRef.current.send(JSON.stringify({
          "type": "chat",
            "payload":{
	          "message": message
        }

        }))
      }}
      >Send</button>
      </div>

      </div>

  )
}

export default App