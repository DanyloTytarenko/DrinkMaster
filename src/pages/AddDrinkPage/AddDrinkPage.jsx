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
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import {selectTheme}

const AddDrinkPage = () => {
  const theme = useSelector(selectTheme);

  return (
    <>
      <Header></Header>
      <MainAppContainer>
        <SubContainer>
          <PageTitle
            title={'Add drink'}
            marginMobile={'40px'}
            marginTablet={'60px'}
            marginDesktop={'60px'}
          ></PageTitle>
          <FlexBox>
            <AddDrinkForm />
            <div>
              <DivFollowUs>
                <Undertitle>Follow Us</Undertitle>
                <FollowUs></FollowUs>
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
