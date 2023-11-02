import { DrinksListItem } from './DrinksListItem';
import { List } from './DrinksList.styled';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectOwnDrinks,
  selectFavoriteDrinks,
} from '../../redux/drinks/selectors';
export const DrinksList = () => {
  let listOfDrinks;
  // const listOfDrinks = [
  //   {
  //     photo:
  //       'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
  //     name: 'Pornstar Martini',
  //     alco: 'Alcoholic ',
  //     desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. ',
  //   },
  //   {
  //     photo:
  //       'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
  //     name: 'Pornstar Martini',
  //     alco: 'Alcoholic ',
  //     desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. ',
  //   },
  //   {
  //     photo:
  //       'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
  //     name: 'Pornstar Martini',
  //     alco: 'Alcoholic ',
  //     desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. ',
  //   },
  //   {
  //     photo:
  //       'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
  //     name: 'Pornstar Martini',
  //     alco: 'Alcoholic ',
  //     desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. ',
  //   },
  //   {
  //     photo:
  //       'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
  //     name: 'Pornstar Martini',
  //     alco: 'Alcoholic ',
  //     desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. ',
  //   },
  //   {
  //     photo:
  //       'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
  //     name: 'Pornstar Martini',
  //     alco: 'Alcoholic ',
  //     desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. ',
  //   },
  //   {
  //     photo:
  //       'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
  //     name: 'Pornstar Martini',
  //     alco: 'Alcoholic ',
  //     desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. ',
  //   },
  //   {
  //     photo:
  //       'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
  //     name: 'Pornstar Martini',
  //     alco: 'Alcoholic ',
  //     desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. ',
  //   },
  //   {
  //     photo:
  //       'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
  //     name: 'Pornstar Martini',
  //     alco: 'Alcoholic ',
  //     desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. ',
  //   },
  //   {
  //     photo:
  //       'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
  //     name: 'Pornstar Martini',
  //     alco: 'Alcoholic ',
  //     desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. ',
  //   },
  //   {
  //     photo:
  //       'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
  //     name: 'Pornstar Martini',
  //     alco: 'Alcoholic ',
  //     desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. ',
  //   },
  //   {
  //     photo:
  //       'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
  //     name: 'Pornstar Martini',
  //     alco: 'Alcoholic ',
  //     desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. ',
  //   },
  //   {
  //     photo:
  //       'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
  //     name: 'Pornstar Martini',
  //     alco: 'Alcoholic ',
  //     desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. ',
  //   },
  //   {
  //     photo:
  //       'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
  //     name: 'Pornstar Martini',
  //     alco: 'Alcoholic ',
  //     desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. ',
  //   },
  // ];
  console.log(location.pathname);
  if (location.pathname === '/DrinkMaster/my') {
    listOfDrinks = useSelector(selectOwnDrinks);
    console.log(listOfDrinks);
  } else if (location.pathname === '/DrinkMaster/favorites') {
    listOfDrinks = useSelector(selectFavoriteDrinks);
    console.log(listOfDrinks);
  }
  return (
    <List>
      {listOfDrinks.map((drink, index) => (
        <DrinksListItem key={index} drink={drink} />
      ))}
    </List>
  );
};
