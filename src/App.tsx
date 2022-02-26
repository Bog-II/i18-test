import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import {
  Box,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Alert,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import NavigationIcon from '@mui/icons-material/Navigation';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>

        {count % 2 === 0 ? (
          <Alert severity="error">This is an error alert — check it out!</Alert>
        ) : (
          <Alert severity="success">
            This is a success alert — check it out!
          </Alert>
        )}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            border: 1,
            borderColor: 'black',
            padding: 2,
            borderRadius: 4,
          }}
        >
          <Button
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </Button>

          <FormControl fullWidth>
            <InputLabel>Language</InputLabel>
            <Select defaultValue={'EN'} label="Language">
              <MenuItem value={'EN'}>EN</MenuItem>
              <MenuItem value={'FR'}>FR</MenuItem>
              <MenuItem value={'RU'}>RU</MenuItem>
            </Select>
          </FormControl>

          <Fab variant="extended" size="small" color="primary" aria-label="add">
            <NavigationIcon sx={{ mr: 1 }} />
            Extended
          </Fab>
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
          >
            <NavigationIcon sx={{ mr: 1 }} />
            Extended
          </Fab>
          <Fab variant="extended" color="primary" aria-label="add">
            <NavigationIcon sx={{ mr: 1 }} />
            Extended
          </Fab>
        </Box>
      </header>
    </div>
  );
}

export default App;
