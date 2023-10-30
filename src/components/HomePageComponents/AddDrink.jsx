import {
  AddDrinkWrapper,
  AppDescription,
  AddDrinksButton,
  HomePageImage,
} from './AddDrink.styled';

export const AddDrink = () => {
  return (
    <AddDrinkWrapper>
      <AppDescription>
        Unlock your inner mixologist with Drink Master, your one-stop
        destination for exploring, crafting, and mastering the worlds finest
        beverages.
      </AppDescription>
      <AddDrinksButton>Add drinks</AddDrinksButton>
      <HomePageImage
        // src={photo}
        alt="Coctail photo"/>
    </AddDrinkWrapper>
  );
};
