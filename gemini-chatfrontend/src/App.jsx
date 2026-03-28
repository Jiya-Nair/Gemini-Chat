import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ChatInput from './components/ChatInput.jsx'
import ChatResponse from './components/ChatResponse.jsx'
import { fetchChatResponse } from './services/api';
function App() {
  const [count, setCount] = useState(0)
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (question) => {
    
    setLoading(true);
    setResponse(null);
    try{
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);
    }catch(error){
        alert("Failed to get response")
    }finally{
        setLoading(false);
    }
  }

  return (
    
    <div className="App">
    <header className="custom-header text-white text-center py-4">
        <h1 className="text-4xl font-bold">Welcome to  Chat</h1>{}
    </header>
    <ChatInput onSubmit={handleSubmit}/>
    <ChatResponse response={response}/>
      
      </div>
  )
}

export default App
