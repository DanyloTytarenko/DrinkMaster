import { DrinksListItem } from './DrinksListItem';
import { List } from './DrinksList.styled';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectOwnDrinks,
  selectFavoriteDrinks,
} from '../../redux/drinks/selectors';
import { Alert } from '@mui/material';
export const DrinksList = () => {
  let listOfDrinks;
  console.log(location.pathname);
  if (location.pathname === '/DrinkMaster/my') {
    listOfDrinks = useSelector(selectOwnDrinks);
    console.log(listOfDrinks);
  } else if (location.pathname === '/DrinkMaster/favorites') {
    listOfDrinks = useSelector(selectFavoriteDrinks);
    console.log(listOfDrinks);
  }
  return (
    (listOfDrinks.length > 0 ?
      <List>
      {listOfDrinks.map((drink) => (
        <DrinksListItem key={drink._id} drink={drink} />
      ))}
      </List> : 
    <Alert severity='info' variant='outlined'>Your drink list is empty</Alert>
    )
    
  );
};
