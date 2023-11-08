import {
  SubContainer,
  FlexBox,
  DivFollowUs,
  Undertitle,
} from './AddDrinkPage.styled';
import AddDrinkForm from 'src/components/AddDrinkForm/AddDrinkForm';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import MainAppContainer from 'src/components/MainAppContainer/MainAppContainer';
import PageTitle from 'src/components/PageTitle/PageTitle';
import FollowUs from 'src/components/FollowUs/FollowUs';
import { PopularDrinksComponent } from 'src/components/PopularDrinks/PopularDrinks';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectTheme } from 'src/redux/theme/themeSlice';

const AddDrinkPage = () => {
  const theme = useSelector(selectTheme);
  return (
    <>
      <Header></Header>
      <MainAppContainer>
        <SubContainer>
          <PageTitle
            theme={theme}
            title={'Add drink'}
            marginMobile={'40px'}
            marginTablet={'60px'}
            marginDesktop={'60px'}
          ></PageTitle>
          <FlexBox>
            <AddDrinkForm theme={theme} />
            <div>
              <DivFollowUs>
                <Undertitle theme={theme}>Follow Us</Undertitle>
                <FollowUs theme={theme}></FollowUs>
              </DivFollowUs>
              <PopularDrinksComponent></PopularDrinksComponent>
            </div>
          </FlexBox>
        </SubContainer>
      </MainAppContainer>

      <Footer></Footer>
    </>
  );
};

export default AddDrinkPage;
