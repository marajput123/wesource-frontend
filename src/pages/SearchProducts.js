import { useState } from 'react';
import { Container, Grid, Link } from '@mui/material';
import MainProductBox from '../components/MainProductBox';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/system';
const notes = [{ id: '0' }, { id: '0' }, { id: '0' }];

const SearchProducts = () => {
  return (
    <>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: '10rem',
          }}
          maxWidth="md"
        >
          <Box
            sx={{ flex: 1, borderRight: 'solid gray 2px', textAlign: 'center' }}
          >
            <Link variant="body2" component={RouterLink} to="/">
              Search Products
            </Link>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Link variant="body2" component={RouterLink} to="/">
              My Groups
            </Link>
          </Box>
        </Container>

        <Grid container spacing={4} justifyContent="center">
          {notes.map((note) => (
            <Grid item key={note.id}>
              <MainProductBox />
            </Grid>
          ))}
        </Grid>
    </>
  );
};

export default SearchProducts;
