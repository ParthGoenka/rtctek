import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid, Paper, Container, MenuItem, Select, InputLabel, FormControl, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, TablePagination } from '@mui/material';

const Dashboard = () => {
  const [employeeInfo] = useState({
    name: "Parth Goenka",
    email: "parthgoenka@gmail.com",
    employeeId: "1148",
    department: "Engineering"
  });

  const [hrInquiry, setHrInquiry] = useState({
    issueType: "",
    description: "",
  });

  const [referral, setReferral] = useState({
    referralName: "",
    referralEmail: "",
    referralPhone: "",
  });


  const handleHrInquiryChange = (e) => {
    const { name, value } = e.target;
    setHrInquiry({ ...hrInquiry, [name]: value });
  };

  const handleReferralChange = (e) => {
    const { name, value } = e.target;
    setReferral({ ...referral, [name]: value });
  };

  const handleSubmitHrInquiry = (e) => {
    e.preventDefault();
    alert("HR Inquiry submitted: " + JSON.stringify(hrInquiry));
    setHrInquiry({
        issueType: "",
        description: "",
      });
  };

  const handleSubmitReferral = (e) => {
    e.preventDefault();
    alert("Referral submitted: " + JSON.stringify(referral));
    setReferral({
        referralName: "",
        referralEmail: "",
        referralPhone: "",
      })
  };

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Employee Portal Dashboard
        </Typography>

        {/* Employee Information */}
        <Paper sx={{ padding: 2, marginBottom: 3 }}>
          <Typography variant="h6">Employee Information</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Typography>Name: {employeeInfo.name}</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography>Email: {employeeInfo.email}</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography>Employee ID: {employeeInfo.employeeId}</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography>Department: {employeeInfo.department}</Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* HR Inquiry Form */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ padding: 3 }}>
              <Typography variant="h6">HR Inquiry Form</Typography>
              <form onSubmit={handleSubmitHrInquiry}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Issue Type</InputLabel>
                  <Select
                    name="issueType"
                    value={hrInquiry.issueType}
                    onChange={handleHrInquiryChange}
                    required
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
                  sx={{ marginBottom: 2 }}
                />

                <Button type="submit" variant="contained" color="primary">
                  Submit Inquiry
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* Referral Form */}
          <Grid item xs={12} sm={6}>
            <Paper sx={{ padding: 3 }}>
              <Typography variant="h6">Referral Form</Typography>
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
                  sx={{ marginBottom: 2 }}
                />

                <Button type="submit" variant="contained" color="primary">
                  Submit Referral
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>

        {/* Department Members Table */}
        <Paper sx={{ padding: 3, marginTop: 4 }}>
          <Typography variant="h6" gutterBottom>
            Department Members
          </Typography>
          <TableContainer sx={{ maxHeight: 400 }}>
            <Table stickyHeader aria-label="department members table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {departmentMembers.map((member) => (
                  <TableRow hover key={member.id}>
                    <TableCell>{member.name}</TableCell>
                    <TableCell>{member.email}</TableCell>
                    <TableCell>{member.role}</TableCell>
                  </TableRow>
                ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard;
