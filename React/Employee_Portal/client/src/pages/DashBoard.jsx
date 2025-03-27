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
  Link,
  Button
} from "@mui/material";
import Navbar1 from "../components/Navbar1";

const Dashboard = () => {
  const params = useParams();
  const [dashdata, setDashdata] = useState({
    name: "",
    email: "",
    dept: "",
    empid: "",
  });
  const [deptmem, setDeptmem] = useState();
  
  React.useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("authToken");
      try {
        const res = await axios.get(
          `http://localhost:4000/api/dashboard/${params.id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
      });
        const res1 = await axios.get(
          `http://localhost:4000/api/users/${res.data.dept}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
      }
        );
        setDeptmem(res1.data);
        setDashdata(res.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchDashboardData();
  }, [params.id]);

  return (
    <Container maxWidth>
      <Box >
        <Navbar1/>

        {/* Employee Information */}
        <Paper sx={{
          padding: 3,
          marginTop: 3,
          backgroundColor: '#ffffffb3',
          boxShadow: 3,
          borderRadius: 2
        }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            Employee Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Name:</Typography>
              <Typography>{dashdata.name}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Email:</Typography>
              <Typography>{dashdata.email}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Employee ID:</Typography>
              <Typography>{dashdata.empid}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Department:</Typography>
              <Typography>{dashdata.dept}</Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* Department Members Table */}
        <Paper sx={{
          padding: 3,
          marginTop: 4,
          backgroundColor: '#ffffffb3',
          boxShadow: 3,
          borderRadius: 2
        }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 2 }}>
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
          <Link
            sx={{ display: 'block', textAlign: 'center', mt: 2, color: 'secondary.main', textDecoration: 'underline' }}
          >
            About the Department
          </Link>
        </Paper>

      
      </Box>
    </Container>
  );
};

export default Dashboard;
