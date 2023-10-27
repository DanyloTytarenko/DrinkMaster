import {
    DrinksItem,
    DeleteButton,
    SeeMoreButton,
    DrinkPhoto,
    BtnWrapper
} from './DrinksList.styled';
import sprite from './svg/sprite.svg';
export const DrinksListItem = ({drink}) => {

return (
    <DrinksItem>
        <DrinkPhoto src={drink.photo} alt="Photo of cocktail" /> 
        <div>
            <h2>{drink.name}</h2>
            <p>{drink.alco }</p>
        </div>
        <p>{drink.desc}</p>
        <BtnWrapper>
            <SeeMoreButton>See more</SeeMoreButton>
            <DeleteButton>
                <svg width='24px' height='24px' stroke='#F3F3F3'>
              <use href={`${sprite}#icon-trash`}/>
            </svg>
            </DeleteButton>   
        </BtnWrapper>
   </DrinksItem> 
  );
};