import {
  List,
  ListItem,
  Photo,
  DescrWrapper,
  DrinkName,
  DrinkDescr,
  PopularDrinks,
  PopularTitle,
  DrinkLink,
} from './PopularDrinks.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPopularDrinks } from '../../redux/drinks/operations';
import { selectPopularDrinks } from '../../redux/drinks/selectors';
import DummyDrinkThumb from 'src/images/dummyDrinkThumb.png';
import {
  selectTheme
} from '../../redux/theme/themeSlice';
export const PopularDrinksComponent = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularDrinks());
  }, [dispatch]);

  let listOfPopularDrinks = useSelector(selectPopularDrinks);

  return (
    <PopularDrinks theme={theme}>
      <div>
        <PopularTitle>Popular drinks</PopularTitle>
        <List>
          {listOfPopularDrinks.map((drink) => (
            <ListItem key={drink._id}>
              <DrinkLink to={`/drink/${drink._id}`}>
                <Photo
                  src={drink.drinkThumb}
                  alt={drink.drink}
                  onError={(event) => {
                    event.currentTarget.src = DummyDrinkThumb;
                  }}
                />
                <DescrWrapper>
                  <DrinkName theme={theme}>{drink.drink}</DrinkName>
                  <DrinkDescr theme={theme}>{drink.description}</DrinkDescr>
                </DescrWrapper>
              </DrinkLink>
            </ListItem>
          ))}
        </List>
      </div>
    </PopularDrinks>
  );
};
