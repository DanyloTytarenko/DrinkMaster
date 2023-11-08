import { useSelector } from 'react-redux';
import { Glass, Description, StyledImage, Hero } from './DrinkPageHero.styled';
import defaultImage from '../../../assets/images/emptyImage/defolt-8.png';
import Button from '../Button/Button';
import PageTitle from 'src/components/PageTitle/PageTitle';
import { selectTheme } from 'src/redux/theme/themeSlice';

const DrinkPageHero = ({ drinkDetails }) => {
  const theme = useSelector(selectTheme);
  const { _id, drink, glass, alcoholic, description, drinkThumb, favorite } =
    drinkDetails;

  return (
    <Hero>
      <div>
        <PageTitle title={drink} />
        <Glass theme={theme}>
          {glass} / {alcoholic}
        </Glass>
        <Description theme={theme}>{description}</Description>
        <Button drinkId={_id} favoriteStatus={favorite} />
      </div>
      <StyledImage
        src={drinkThumb}
        alt="picture Cocktail"
        onError={(event) => {
          event.currentTarget.src = defaultImage;
        }}
      />
    </Hero>
  );
};

export default DrinkPageHero;
