// Added { onSubmit } inside the parentheses
import { useState } from 'react';

const ChatInput = ({ onSubmit }) => { 
    const [question, setQuestion] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        
       
        if (question.trim() !== '') { 
            onSubmit(question);
            setQuestion('');
        }
    };

    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="question" className="fw-bold">Ask me Anything</label>
                    <input 
                        type="text"
                        className="form-control" 
                        id="question"
                        placeholder="Enter your question..."
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                </div>
               
                <button 
                    type="submit" 
                    className="btn text-white mt-3" 
                    style={{ backgroundColor: '#ff69b4', border: 'none' }}
                >
                    Submit Question
                </button>
            </form>
        </div>
    );
};

export default ChatInput;