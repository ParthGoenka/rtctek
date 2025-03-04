import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link
} from "@mui/material";
import Navbar1 from "../components/Navbar1";

const Dashboard = () => {
  const params = useParams();
  const [dashdata, setDashdata] = useState({
    name: "",
    email: "",
    dept:"",
    empid:"",
  });
  const [deptmem, setDeptmem] = useState();
  React.useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/dashboard/${params.id}`
        );
        const res1 = await axios.get(
          `http://localhost:4000/api/users/${res.data.dept}`);
          setDeptmem(res1.data);
          setDashdata(res.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchDashboardData();
  }, [params.id]); 

 
  return (
    <Container sx={{height: '100vh',
      backgroundImage: 'url(/back.jfif)',
      backgroundSize: 'cover', 
      backgroundPosition: 'center',}}>
  <Box sx={{ mt: 4 }}>
      <Navbar1 />
    

    {/* Employee Information */}
    <Paper sx={{ padding: 3, marginTop: 3 }} >
      <Typography variant="h6">Employee Information</Typography>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={4}>
          <Typography>Name: {dashdata.name}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography>Email: {dashdata.email}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography>Employee ID: {dashdata.empid}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography >Department: {dashdata.dept}</Typography>
        </Grid>
      </Grid>
    </Paper>

    {/* Department Members Table */}
    <Paper sx={{ padding: 3, marginTop: 4, }}>
    
      <Typography variant="h6" gutterBottom>
        Department Members
      </Typography>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="department members table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Employee ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deptmem?.map((member, idx) => (
              <TableRow hover key={idx}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>{member.empid}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
       
      </TableContainer>
      <Link color="secondary" href="/">
        About the Department
      </Link>
    </Paper>
    
  </Box>
</Container>
  );
};

export default Dashboard;
