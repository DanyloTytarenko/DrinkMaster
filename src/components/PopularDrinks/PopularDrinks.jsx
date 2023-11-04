import { List, ListItem, Photo,DescrWrapper,DrinkName, DrinkDescr, PopularDrinks, PopularTitle , DrinkLink } from './PopularDrinks.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPopularDrinks } from '../../redux/drinks/operations';
import {
  selectPopularDrinks
} from '../../redux/drinks/selectors';
import FollowUs from '../FollowUs/FollowUs';
export const PopularDrinksComponent = () => {
const dispatch = useDispatch();
useEffect(() => {
    dispatch(fetchPopularDrinks());
  }, [dispatch]);
    
    let listOfPopularDrinks = useSelector(selectPopularDrinks);
  
    return (
        <PopularDrinks>
            <div>
                <PopularTitle>Follow us</PopularTitle>
             <FollowUs></FollowUs>   
            </div>
            <div>
            <PopularTitle>Popular drinks</PopularTitle>
        <List>
      {listOfPopularDrinks.map((drink) => (
          <ListItem key={drink.id}>
              <DrinkLink to={`/drink/${drink.id}`}>
                  <Photo src={drink.drinkThumb} alt={drink.drink}/>
              <DescrWrapper>
                  <DrinkName>{drink.drink}</DrinkName>
                  <DrinkDescr>{drink.description}</DrinkDescr>
                  </DescrWrapper>
              </DrinkLink>
          </ListItem>
          
      ))}
        </List>
            </div>
    </PopularDrinks>
  );
};
