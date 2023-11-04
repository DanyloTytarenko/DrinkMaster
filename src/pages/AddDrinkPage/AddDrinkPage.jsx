import {
  Container,
  FlexBox,
  DivFollowUs,
  Undertitle,
} from './AddDrinkPage.styled';
import AddDrinkForm from 'src/components/AddDrinkForm/AddDrinkForm';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import PageTitle from 'src/components/PageTitle/PageTitle';
import FollowUs from 'src/components/FollowUs/FollowUs';

const AddDrinkPage = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <PageTitle
          title={'Add drink'}
          marginMobile={'40px'}
          marginTablet={'60px'}
          marginDesktop={'60px'}
        ></PageTitle>
        <FlexBox>
          <AddDrinkForm />
          <DivFollowUs>
            <Undertitle>Follow Us</Undertitle>
            <FollowUs></FollowUs>
          </DivFollowUs>
        </FlexBox>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default AddDrinkPage;
