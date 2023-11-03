import {
  AddDrinkWrapper,
  AppDescription,
  StyledLink,
  HomePageImage,
} from './AddDrink.styled';

export const AddDrink = () => {
  return (
    <>
    <AddDrinkWrapper>
      <AppDescription>
        Unlock your inner mixologist with Drink Master, your one-stop
        destination for exploring, crafting, and mastering the worlds finest
        beverages.
      </AppDescription>
      <StyledLink to="/AddDrinkPage">Add drinks</StyledLink>
      </AddDrinkWrapper>
      <HomePageImage src="../../../public/homepage.jpg" alt="Coctail photo" />
      </>
  );
};
