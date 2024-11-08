import {useState} from 'react';
import axios from 'axios';
import CGLogo from '../assets/chatGPT.png';
import '../../public/Chat.css'

function Chat() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // API communication
    axios
      .post("http://localhost:5000/chat", { prompt })
      .then((res) => {
        setResponse(res.data);
        console.log(res.data)
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
    
  };

  return (
    <div className='body'>
      <div className="wrapper">
        <img />	
        <form onSubmit={handleSubmit}>
          <img src={CGLogo} alt="" className={loading ? 'cg-logo loading' : 'cg-logo'} />
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your thought... :)"
          />
          <button type="submit">Ask</button>
        </form>
        <p className="response-area">
          {loading ? 'loading...' : response}
        </p>
        <div className="footer">~ NOLAN ~</div>
      </div>
    </div>
  );
}

export default Chat;