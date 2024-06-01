import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

interface BirthdayListProps {
  selectedDate: Date | null;
  onAddFavorite: (birthday: string) => void;
}

const BirthdayList: React.FC<BirthdayListProps> = ({ selectedDate, onAddFavorite }) => {
  // Dummy data for demonstration
  const birthdays = selectedDate ? [
    { name: 'Anna Apple', description: 'American writer' },
    { name: 'Bob Banana', description: 'Canadian architect' }
  ] : [];

  return (
    <List>
      {birthdays.map((birthday, index) => (
        <ListItem key={index}>
          <ListItemText primary={birthday.name} secondary={birthday.description} />
          <Button onClick={() => onAddFavorite(birthday.name)}>Add to Favorites</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default BirthdayList;
