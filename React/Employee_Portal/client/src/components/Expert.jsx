import React, { useState } from "react";
import axios from "axios";
import emailjs from '@emailjs/browser';
import Navbar1 from "./Navbar1"
import Footer from "./Footer"

import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Box,
  CircularProgress,
} from "@mui/material";

const Expert = () => {
  const [inputText, setInputText] = useState("");
  const [inputText1, setInputText1] = useState(
    "Convert the next message to official mail to Reporting manager."
  );
  const [outputText, setOutputText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleNewChat = () => {
    setInputText("");
    setOutputText("");
    setInputText1( "Convert this message to official mail to Reporting manager");
  }

    const currentDate = new Date();

  const handleEmail = () => {
    setLoading(true);
    const templateParams = {
      toEmail: 'parthgoenka90.6@gmail.com', 
      message: outputText, 
      subject: "Daily Status Report",
      name: 'parthgoenka',
      time: currentDate,
    };

    // Send email via EmailJS
    emailjs
      .send('service_fp1zpne', 'template_esvgrtr', templateParams, {publicKey:'hDfmnyi34-MpLUVQD'})
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          setLoading(false)
          handleNewChat();
        },
        (error) => {
          console.error('Error sending email:', error);
          handleNewChat();
        }
      );
      
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const url = "http://localhost:11434/api/generate";
    const payload = {
      model: "qwen",
      prompt: inputText1 + inputText,
      stream: false,
    };

    try {
      const response = await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setOutputText(response.data.response);
        setInputText1(response.data.response);
        setInputText("");
      } else {
        setOutputText("Error: Unable to generate response.");
      }
    } catch (error) {
      console.error("Error:", error);
      setOutputText("Error: Unable to generate response.");
    }
    setLoading(false);
  };

  return (
    <div>
        <Navbar1 />
        <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 6, marginBottom: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
          Daily Status Mail Generator
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Enter Your Daily Status"
            value={inputText}
            onChange={handleInputChange}
            multiline
            rows={5}
            variant="outlined"
            placeholder="Write your status here..."
            sx={{ marginBottom: 2 }}
          />
          <Box textAlign="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading || inputText.trim() === ""}
              sx={{ padding: "10px 20px", fontSize: "16px" }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Generate Report"
              )}
            </Button>
          </Box>
        </form>
      </Paper>
      {outputText && (
        <Box sx={{ marginTop: 5 }}>
          <Typography variant="h6" gutterBottom>
            Generated Report:
          </Typography>
          <Paper sx={{ padding: 2 }}>
            <TextField
              fullWidth
              value={outputText}
              contentEditable={false}
              multiline
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
          </Paper>
          <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ padding: "10px 20px", fontSize: "16px", margin:"15px", width:"250px" }}
              onClick={handleNewChat}
            >
              New Chat
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading || outputText.trim() === ""}
              sx={{ padding: "10px 20px", fontSize: "16px", margin:"15px", width:"250px"  }}
              onClick={handleEmail}
            >
                {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Send"
              )}
              
            </Button>
        </Box>
      )}
    </Container>
    <Footer />
    </div>
    
  );
};

export default Expert;
