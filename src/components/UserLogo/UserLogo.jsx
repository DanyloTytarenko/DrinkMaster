import {
  UserInfoWrap,
  UserLogoWrap,
  UserSvg,
  UserName,
} from './UserLogo.styled';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
const UserLogo = () => {
  const user = useSelector(selectUser);
  return (
    <UserInfoWrap>
      <UserLogoWrap>
        <img
          width="44"
          height="44"
          src={user.avatar || '../../images/user.jpg'}
          alt="User avatar"
          onError={(event) => {
            event.currentTarget.src = '/src/images/user.jpg';
          }}
        />
      </UserLogoWrap>
      <UserName>{user.name}</UserName>
    </UserInfoWrap>
  );
};

export default UserLogo;
