import { DrinksListItem } from "./DrinksListItem";
import {
  List
} from './DrinksList.styled';
export const DrinksList = () => {
    const listOfDrinks = [
        {
            photo: 'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
            name: 'Pornstar Martini',
            alco: 'Alcoholic ',
            desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. '
        },
         {
            photo: 'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
            name: 'Pornstar Martini',
            alco: 'Alcoholic ',
            desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. '
        },
          {
            photo: 'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
            name: 'Pornstar Martini',
            alco: 'Alcoholic ',
            desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. '
        },
           {
            photo: 'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
            name: 'Pornstar Martini',
            alco: 'Alcoholic ',
            desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. '
        },
            {
            photo: 'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
            name: 'Pornstar Martini',
            alco: 'Alcoholic ',
            desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. '
        },
             {
            photo: 'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
            name: 'Pornstar Martini',
            alco: 'Alcoholic ',
            desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. '
        },
              {
            photo: 'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
            name: 'Pornstar Martini',
            alco: 'Alcoholic ',
            desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. '
    }, {
            photo: 'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
            name: 'Pornstar Martini',
            alco: 'Alcoholic ',
            desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. '
        },
               {
            photo: 'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
            name: 'Pornstar Martini',
            alco: 'Alcoholic ',
            desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. '
    }, {
           photo: 'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
            name: 'Pornstar Martini',
            alco: 'Alcoholic ',
            desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. '
    }, {
            photo: 'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
            name: 'Pornstar Martini',
            alco: 'Alcoholic ',
            desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. '
    }, {
            photo: 'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
            name: 'Pornstar Martini',
            alco: 'Alcoholic ',
            desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. '
    }, {
           photo: 'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
            name: 'Pornstar Martini',
            alco: 'Alcoholic ',
            desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. '
    }, {
           photo: 'https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg',
            name: 'Pornstar Martini',
            alco: 'Alcoholic ',
            desc: 'The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. '
    }
]
return (
    <List>
      {listOfDrinks.map(drink => (
        <DrinksListItem  drink={drink}/>
      ))}
    </List>
  );
};