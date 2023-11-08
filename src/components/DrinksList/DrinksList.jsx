import { DrinksListItem } from './DrinksListItem';
import { List } from './DrinksList.styled';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectOwnDrinks,
  selectFavoriteDrinks,
} from '../../redux/drinks/selectors';
import {
  selectTheme
} from '../../redux/theme/themeSlice';
import NotFound from '../NotFound/NotFound'
export const DrinksList = () => {
  let listOfDrinks;
  if (location.pathname === '/DrinkMaster/my') {
    listOfDrinks = useSelector(selectOwnDrinks);
  } else if (location.pathname === '/DrinkMaster/favorites') {
    listOfDrinks = useSelector(selectFavoriteDrinks);
  }
  const theme = useSelector(selectTheme);
  return (
    (listOfDrinks.length > 0 ?
      <List theme={theme}>
      {listOfDrinks.map((drink) => (
        <DrinksListItem key={drink._id} drink={drink} />
      ))}
      </List> : 
    <NotFound message={'Your drinks list is empty'}/>
    )
    
  );
};
