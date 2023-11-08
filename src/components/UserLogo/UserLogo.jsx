import {
  UserInfoWrap,
  UserLogoWrap,
  UserSvg,
  UserName,
} from './UserLogo.styled';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors'
import {selectTheme } from '../../redux/theme/themeSlice'
import userLogoImg from '../../images/user.jpg';
const UserLogo = () => {
  const theme = useSelector(selectTheme);
  const user = useSelector(selectUser);
  return (
    <UserInfoWrap>
      <UserLogoWrap>
        <img
          width="44"
          height="44"

          src={user.avatar || userLogoImg}
          alt="User avatar"
          onError={(event) => {
            event.currentTarget.src = userLogoImg;

          }}
        />
      </UserLogoWrap>
      <UserName theme={theme}>{user.name}</UserName>
    </UserInfoWrap>
  );
};

export default UserLogo;
