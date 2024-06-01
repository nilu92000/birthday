// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Calendar from './components/Calendar';
import BirthdayList from './components/BirthdayList';
import FavoriteBirthdays from './components/FavoriteBirthdays';

const App: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleAddFavorite = (birthday: string) => {
    setFavorites((prevFavorites) => [...prevFavorites, birthday]);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Birthdays Calendar
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Birthdays on {selectedDate?.toLocaleDateString()}</Typography>
          <BirthdayList selectedDate={selectedDate} onAddFavorite={handleAddFavorite} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Favorite Birthdays</Typography>
          <FavoriteBirthdays favorites={favorites} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
