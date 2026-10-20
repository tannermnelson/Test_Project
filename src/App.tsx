import { useState, type FormEvent } from 'react';
import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';

export default function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    setGreeting(trimmed ? `Hello ${trimmed}!` : '');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Test_Project
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2 }}>
          <TextField
            label="What's your name?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <Button type="submit" variant="contained">
            Say Hello
          </Button>
        </Box>

        {greeting && (
          <Typography variant="h5" sx={{ mt: 4 }}>
            {greeting}
          </Typography>
        )}
      </Paper>
    </Container>
  );
}
