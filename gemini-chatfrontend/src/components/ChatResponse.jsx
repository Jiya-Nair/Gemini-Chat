const ChatResponse = ({ response }) => {
    if (!response) {
        return null; 
    }
    return (
        <div className="container mt-4">
            <h2>Response</h2>
            <p>{response}</p>
        </div>
    )
}
export default ChatResponse;