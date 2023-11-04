import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Title,
  Glass,
  Description,
  StyledImage,
  StyledImageContainer,
} from './DrinkPageHero.styled';
import defaultImage from '../../../assets/images/drink-image.jpg';
import { StyledSearchWrapper } from '../../DrinksSearch/DrinksSearch.styled';
import Button from '../Button/Button';

const DrinkPageHero = ({ drinkDetails }) => {
  const { drink, glass, alcoholic, description, drinkThumb } = drinkDetails;

  return (
    <StyledSearchWrapper>
      <Title>{drink}</Title>
      <Glass>
        {glass} / {alcoholic}
      </Glass>
      <Description>{description}</Description>
      <Button />
      <StyledImageContainer>
        <StyledImage
          src={drinkThumb}
          alt="picture Cocktail"
          height={400}
          onError={(event) => {
            event.currentTarget.src = defaultImage;
          }}
        />
      </StyledImageContainer>
    </StyledSearchWrapper>
  );
};

export default DrinkPageHero;
