import React, { useState, useEffect } from 'react';
import { useDispatch,  useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors'
import { logOut, updateUser } from '../../redux/auth/operations'
import UserLogo from '../UserLogo/UserLogo';
import { Modal, TextDropDown, LogOutBtn, Text, LogOutWrapper, CancelButton, CloseBtn, NameInput, SaveBtn, PhotoWrapper, AddBtn, Photo, Form, ImgInput, BackDrop } from './Modal.styled';
import { UserLogoWrap, UserSvg } from '../UserLogo/UserLogo.styled';
import sprite from './sprite.svg'
import userLogoImg from '../../images/user.jpg';
import { Backdrop } from '@mui/material';
export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [LogOut, setLogOut] = useState(false);
  const [EditProfile, setEditProfile] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [inputName, setInputName] = useState(user.name);
  const [photo, setPhoto] = useState(user.avatar);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    handleBodyScroll(!isOpen);
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
       handleBodyScroll(!isOpen);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const avatar = e.target.elements.avatar.files[0];
    dispatch(updateUser({ name, avatar }));
    closeModal();
  }
  const handlePhoto = (e) => {
    const avatar = e.target.files[0];
    const avatarURL = URL.createObjectURL(avatar);
    setPhoto(avatarURL)
  }
  const handleBodyScroll = (showBackdrop) => {
  if (showBackdrop) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};
    return (
        <>
            <div onClick={toggleMenu}>
                <UserLogo />
        </div>
        <BackDrop open={isOpen} onClick={toggleMenu}/>
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
          ) : EditProfile ? (
            <>
                        <CloseBtn onClick={closeModal}>
                            <svg width="18px" height="18px" stroke="#F3F3F3">
                            <use href={`${sprite}#icon-close`} />
                             </svg>
                </CloseBtn>
                <Form onSubmit={handleSubmit}>
                  <Photo>
                        <PhotoWrapper>
                          {/* <svg width="100px" height="100px" stroke="#F3F3F3">
                            <use href={`${sprite}#icon-user`} />
                            </svg> */}
                      <img width="100" height="100" src={photo || userLogoImg} alt="User avatar" onError={(event) => {
                      event.currentTarget.src = userLogoImg;
                    }}/>
                    </PhotoWrapper>
                    <AddBtn htmlFor="avatar">
                        <svg width="34px" height="34px">
                            <use href={`${sprite}#icon-add`} />
                      </svg>
                      <ImgInput type="file" name="avatar" id='avatar' accept=".jpg, .jpeg, .png" onChange={handlePhoto} />
                    </AddBtn>
                  </Photo>   
                        
                        <NameInput
                    type="text"
                    name="name"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                  />
                  <SaveBtn type='submit'>Save changes</SaveBtn>
                </Form>
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