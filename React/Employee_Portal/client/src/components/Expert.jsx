import React, { useState } from 'react';
import axios from 'axios';

const Expert = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
   
            const url = "http://localhost:11434/api/generate";
            const payload = {
                model: "qwen",
                prompt: "Make this message better , professional for official mail:- " + inputText,
                stream: false
            };
        
            try {
                const response = await axios.post(url, payload, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
        
                if (response.status === 200) {
                    setOutputText( response.data.response);
                } else {
                    setOutputText( "Error: Unable to generate response.");
                }
            } catch (error) {
                console.error('Error:', error);
                setOutputText( "Error: Unable to generate response.");
            }
            setLoading(false);
          };
        
       
    return (
        <div>
            <h2>OHHHH</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={inputText}
                    onChange={handleInputChange}
                    rows="5"
                    cols="50"
                    placeholder="Enter your text here..."
                />
                <br />
                <button type="submit" disabled={loading}>
                    {loading ? 'Processing...' : 'Submit'}
                </button>
            </form>

            {outputText && (
                <div>
                    <h3>Output:</h3>
                    <p>{outputText}</p>
                </div>
            )}
        </div>
    );
};

export default Expert;
