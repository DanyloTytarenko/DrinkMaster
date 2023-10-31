import { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import UserLogo from '../UserLogo/UserLogo';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import {
  HeaderContainer
} from './Header.styled';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <HeaderContainer>
      <Logo />
      {windowWidth >= 1440 && <Navigation />}
      <ThemeToggler />
      <UserLogo />
      {windowWidth < 1440 && <BurgerMenu />}
    </HeaderContainer>
  );


  // return (
  //   <HeaderContainer>
  //     <Logo />
  //     {windowWidth >= 1440 ? (
  //       <Navigation />
  //     ) : (
  //       <BurgerMenu /> // Покажем бургер-меню на мобильных устройствах
  //     )}
  //     <ThemeToggler />
  //     <UserLogo />
  //   </HeaderContainer>
  // );

};

export default Header;

// import { useState } from 'react';
// import Logo from '../Logo/Logo';
// import UserLogo from '../UserLogo/UserLogo';
// import BurgerIcon from '../BurgerIcon'; // Здесь должен быть компонент иконки бургер-меню
// import Navigation from '../Navigation/Navigation';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const openMenu = () => {
//     setIsMenuOpen(true);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <>
//       <div className="desktop-header">
//         <Logo />
//         <UserLogo />
//       </div>
//       <div className="mobile-header">
//         <BurgerIcon onClick={openMenu} />
//       </div>
//       {isMenuOpen && (
//         <div className="modal-menu">
//           <BurgerIcon onClick={closeMenu} /> {/* Иконка закрытия меню */}
//           <Navigation />
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;


