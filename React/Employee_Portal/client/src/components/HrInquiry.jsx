import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Paper,
  Container,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const HrInquiry = () => {
  const navigate = useNavigate();
  const [hrInquiry, setHrInquiry] = useState({
    issueType: "",
    description: "",
  });

  const handleHrInquiryChange = (e) => {
    const { name, value } = e.target;
    setHrInquiry({ ...hrInquiry, [name]: value });
  };

  const handleSubmitHrInquiry = (e) => {
    e.preventDefault();
    alert("HR Inquiry submitted: " + JSON.stringify(hrInquiry));
    navigate("/");
  };

  return (
    <Container maxWidth="md" sx={{height: '100vh',
      backgroundImage: 'url(/back1.jfif)',
      backgroundSize: 'cover', 
      backgroundPosition: 'center',}}>
      <Box sx={{ mt: 6 }}>

        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8}>
            <Paper sx={{ padding: 3, boxShadow: 3 }}>
            <Typography variant="h4" align="center" color="secondary" gutterBottom>
          HR Inquiry Form
        </Typography>
              <form onSubmit={handleSubmitHrInquiry}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Issue Type</InputLabel>
                  <Select
                    name="issueType"
                    value={hrInquiry.issueType}
                    onChange={handleHrInquiryChange}
                    required
                    fullWidth
                    sx={{ mb: 3 }}
                  >
                    <MenuItem value="attendance">Attendance</MenuItem>
                    <MenuItem value="leave">Leave</MenuItem>
                    <MenuItem value="salary">Salary</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  name="description"
                  label="Description"
                  value={hrInquiry.description}
                  onChange={handleHrInquiryChange}
                  fullWidth
                  multiline
                  rows={4}
                  required
                  sx={{ mb: 3 }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ padding: 1.5 }}
                >
                  Submit Inquiry
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HrInquiry;
