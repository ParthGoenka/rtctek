import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Paper,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar1 from "./Navbar1";
import Footer from "./Footer";

const Referral = () => {
  const navigate = useNavigate();
  const [referral, setReferral] = useState({
    referralName: "",
    referralEmail: "",
    referralPhone: "",
  });

  const handleReferralChange = (e) => {
    const { name, value } = e.target;
    setReferral({ ...referral, [name]: value });
  };

  const handleSubmitReferral = (e) => {
    e.preventDefault();
    alert("Referral submitted: " + JSON.stringify(referral));
    navigate(`/`);
  };

  return (
    <div>
      <Navbar1/>
      <Container maxWidth="md">
      <Box sx={{ mt: 6, mb:6 }}>
        

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper sx={{ padding: 4, display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" color="secondary" sx={{ mb: 3 }}>
                Referral Form
              </Typography>
              <form onSubmit={handleSubmitReferral}>
                <TextField
                  name="referralName"
                  label="Referral Name"
                  value={referral.referralName}
                  onChange={handleReferralChange}
                  fullWidth
                  required
                  sx={{ marginBottom: 2 }}
                />

                <TextField
                  name="referralEmail"
                  label="Referral Email"
                  value={referral.referralEmail}
                  onChange={handleReferralChange}
                  fullWidth
                  required
                  sx={{ marginBottom: 2 }}
                />

                <TextField
                  name="referralPhone"
                  label="Referral Phone"
                  value={referral.referralPhone}
                  onChange={handleReferralChange}
                  fullWidth
                  required
                  sx={{ marginBottom: 3 }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ alignSelf: "flex-end" }}
                >
                  Submit Referral
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
      <Footer/>
    </div>
    
  );
};

export default Referral;
