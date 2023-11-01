import React, { useState, useEffect } from 'react';
import { useDispatch,  useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors'
import { logOut } from '../../redux/auth/operations'
import UserLogo from '../UserLogo/UserLogo';
import { Modal, TextDropDown, LogOutBtn, Text, LogOutWrapper, CancelButton, CloseBtn, NameInput, SaveBtn, PhotoWrapper, AddBtn, Photo } from './Modal.styled';
import { UserLogoWrap, UserSvg } from '../UserLogo/UserLogo.styled';
import sprite from './sprite.svg'
export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [LogOut, setLogOut] = useState(false);
  const [EditProfile, setEditProfile] = useState(false);
  const dispatch = useDispatch();
   const user = useSelector(selectUser);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    };
      const handleClickEdit= () => {
          setEditProfile(!EditProfile);
    };
     const handleClickLogOut= () => {
          setLogOut(!LogOut);
    };
     const closeModal= () => {
         setLogOut(false);
         setEditProfile(false);
         setIsOpen(false);
  };
    return (
        <>
            <div onClick={toggleMenu}>
                <UserLogo />
            </div>
            <Modal open={isOpen}>
                {LogOut ? (
                    <>
                        <CloseBtn onClick={closeModal}>
                            <svg width="18px" height="18px" stroke="#F3F3F3">
                            <use href={`${sprite}#icon-close`} />
                             </svg>
                        </CloseBtn>
                        <Text>Are you sure you want to log out?</Text>
                        <LogOutWrapper>
                             <LogOutBtn type="button" onClick={() => dispatch(logOut())}>Log out</LogOutBtn> 
                             <CancelButton type="button" onClick={handleClickLogOut}>Cancel</CancelButton>                         
                        </LogOutWrapper>
                    </>
                ) : EditProfile ? (<>
                        <CloseBtn onClick={closeModal}>
                            <svg width="18px" height="18px" stroke="#F3F3F3">
                            <use href={`${sprite}#icon-close`} />
                             </svg>
                        </CloseBtn>
                        <Photo>
                        <PhotoWrapper>
                          <svg width="100px" height="100px" stroke="#F3F3F3">
                            <use href={`${sprite}#icon-user`} />
                            </svg>
                        </PhotoWrapper><AddBtn>
                        <svg width="34px" height="34px">
                            <use href={`${sprite}#icon-add`} />
                            </svg>
                        </AddBtn></Photo>
                        
              <NameInput value={ user.name} />
                        <SaveBtn>Save changes</SaveBtn>
                    </>
        ) : (
                            <>                    
            <TextDropDown onClick={handleClickEdit}>
              <span>Edit profile</span>
              <svg width="14px" height="14px" stroke="#F3F3F3">
                <use href={`${sprite}#icon-edit`} />
              </svg>
            </TextDropDown>
            <LogOutBtn type="button" onClick={handleClickLogOut}>Log out</LogOutBtn>
          </>
        )}
                
          </Modal>
        </>
  );
}