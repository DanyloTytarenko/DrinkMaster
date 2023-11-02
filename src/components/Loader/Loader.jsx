import { LoaderWrap, StyledLoader } from './Loader.styled';
// import { ProgressBar } from 'react-loader-spinner';

const Loader = () => {
  return (
    <LoaderWrap>
      <StyledLoader />
    </LoaderWrap>
  )
}

export default Loader;