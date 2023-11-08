import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import {
  UserInfoWrap,
  UserLogoWrap,
  UserSvg,
  UserName,
} from './UserLogo.styled';

const UserLogo = () => {
  const user = useSelector(selectUser);

  return (
    <UserInfoWrap>
      <UserLogoWrap>
        <UserSvg
          width="44"
          height="44"
          src={user.avatar || 'src/images/user.jpg'}
          alt="User avatar"
          onError={(event) => {
            event.currentTarget.src = 'src/images/user.jpg';
          }}
        />
      </UserLogoWrap>
      <UserName>{user.name}</UserName>
    </UserInfoWrap>
  );
};

export default UserLogo;
