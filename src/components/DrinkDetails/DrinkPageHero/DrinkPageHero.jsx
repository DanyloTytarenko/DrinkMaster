import { Glass, Description, StyledImage, Hero } from './DrinkPageHero.styled';
import defaultImage from '../../../assets/images/emptyImage/drink-image.jpg';
import Button from '../Button/Button';
import PageTitle from 'src/components/PageTitle/PageTitle';

const DrinkPageHero = ({ drinkDetails }) => {
  const { _id, drink, glass, alcoholic, description, drinkThumb, favorite } =
    drinkDetails;

  return (
    <Hero>
      <div>
        <PageTitle title={drink} />
        <Glass>
          {glass} / {alcoholic}
        </Glass>
        <Description>{description}</Description>
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
