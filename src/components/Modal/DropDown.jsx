import React, { useState, useEffect } from 'react';
import UserLogo from '../UserLogo/UserLogo';
import { Modal, TextDropDown, LogOutBtn, Text, LogOutWrapper, CancelButton, CloseBtn, NameInput, SaveBtn, PhotoWrapper, AddBtn, Photo } from './Modal.styled';
import { UserLogoWrap, UserSvg } from '../UserLogo/UserLogo.styled';
import sprite from './sprite.svg'
export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [LogOut, setLogOut] = useState(false);
    const [EditProfile, setEditProfile] = useState(false);
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
                             <LogOutBtn>Log out</LogOutBtn> 
                             <CancelButton onClick={handleClickLogOut}>Cancel</CancelButton>                         
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
                        
                        <NameInput/>
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
            <LogOutBtn onClick={handleClickLogOut}>Log out</LogOutBtn>
          </>
        )}
                
          </Modal>
        </>
  );
}