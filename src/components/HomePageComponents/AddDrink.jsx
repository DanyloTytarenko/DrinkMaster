import {
  TitleWrapper,
  AddDrinkWrapper,
  AppDescription,
  StyledLink,
  DesktopTitle,
  PictureWrapper,
} from './AddDrink.styled';
import HomePageImageMobile from '../../assets/homepageimages/asr_blue_iced_tea_mobile.png';
import HomePageImageTablet from '../../assets/homepageimages/asr_blue_iced_tea_tablet.png';

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
      <PictureWrapper>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`${HomePageImageTablet}`}
            width="359"
            height="445"
          />
          <source
            media="(min-width: 375px)"
            srcSet={`${HomePageImageMobile}`}
            width="252"
            height="313"
          />
          <img
            src={HomePageImageMobile}
            alt="Coctail image"
            width="252"
            height="313"
          />
        </picture>
      </PictureWrapper>
    </TitleWrapper>
  );
};
