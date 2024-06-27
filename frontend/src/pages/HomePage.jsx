
// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const backgroundImageUrl = 'https://media.istockphoto.com/id/1397038664/photo/cars-parked-in-multistorey-garage.jpg?s=1024x1024&w=is&k=20&c=Kg7oNXr4vlJ3HHLNn7gFPQ4rzV_U5XRwmE_RvuruT7w=';
const carImageUrl = 'https://media.istockphoto.com/id/1397038664/photo/cars-parked-in-multistorey-garage.jpg?s=1024x1024&w=is&k=20&c=Kg7oNXr4vlJ3HHLNn7gFPQ4rzV_U5XRwmE_RvuruT7w=';

function HomePage() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to JR Car Parking
      </Typography>
      <img src={carImageUrl} alt="Car Parking" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
      <Button variant="contained" color="primary">
        <Link to="/signup" style={{ color: 'inherit', textDecoration: 'none' }}>
          Register
        </Link>
      </Button>
    </Grid>
  );
}

export default HomePage;