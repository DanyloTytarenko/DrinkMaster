import {
  AddDrinkWrapper,
  AppDescription,
  Link,
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
      <Link to="/AddDrinkPage">Add drinks</Link>
      <HomePageImage src="../../assets/homepage_img.jpg" alt="Coctail photo" />
    </AddDrinkWrapper>
  );
};
