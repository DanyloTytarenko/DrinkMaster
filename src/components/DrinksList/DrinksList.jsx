import { DrinksListItem } from './DrinksListItem';
import { List } from './DrinksList.styled';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectOwnDrinks,
  selectFavoriteDrinks,
} from '../../redux/drinks/selectors';
export const DrinksList = () => {
  //  if (location.pathname === '/my') {
  //   listOfDrinks = useSelector(selectOwnDrinks);
  // } else if (location.pathname === '/favorites') {
  //   listOfDrinks = useSelector(selectFavoriteDrinks);
  // }
  return (
    <List>
      {listOfDrinks.map((drink, index) => (
        <DrinksListItem key={index} drink={drink} />
      ))}
    </List>
  );
};
