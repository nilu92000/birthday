import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

interface FavoriteBirthdaysProps {
  favorites: string[];
}

const FavoriteBirthdays: React.FC<FavoriteBirthdaysProps> = ({ favorites }) => {
  return (
    <List>
      {favorites.map((favorite, index) => (
        <ListItem key={index}>
          <ListItemText primary={favorite} />
        </ListItem>
      ))}
    </List>
  );
};

export default FavoriteBirthdays;
