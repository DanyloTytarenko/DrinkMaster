import {
  TitleWrapper,
  AddDrinkWrapper,
  AppDescription,
  StyledLink,
  DesktopTitle,
  HomePageImage,
} from './AddDrink.styled';
import PageTitle from '../../components/PageTitle/PageTitle';

export const AddDrink = () => {
  return (
    <TitleWrapper>
    <DesktopTitle>
      <PageTitle
        title="Craft Your Perfect Drink with Drink Master"
        theme="dark"
        marginMobile="16px"
        marginTablet="28px"
        marginDesktop="28px"
      />
      <AddDrinkWrapper>
        <AppDescription>
          Unlock your inner mixologist with Drink Master, your one-stop
          destination for exploring, crafting, and mastering the worlds finest
          beverages.
        </AppDescription>
        <StyledLink to="/add">Add drinks</StyledLink>
      </AddDrinkWrapper>
      </DesktopTitle>
      <HomePageImage src="../../../public/homepage.jpg" alt="Coctail photo" />
    </TitleWrapper>
  );
};
