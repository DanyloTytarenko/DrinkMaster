import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-wrap: wrap; 
justify-content:center;
align-items: center;
gap: 40px;
@media only screen and (min-width: 704px) {
row-gap: 80px;
column-gap: 20px;   
}
`;
export const DrinksItem = styled.li`
color:white;
width: 335px;
display: flex;
flex-direction: column;
gap: 18px;
@media only screen and (min-width: 704px) {
width: 342px;
gap: 24px;   
};
@media only screen and (min-width: 1140px) {
width: 400px; 
}
`;
export const DrinkPhoto = styled.img`
width: 100%;
height: auto;
border-radius: 8px;
background: linear-gradient(180deg, rgba(10, 10, 17, 0.02) 51.18%, rgba(10, 10, 17, 0.77) 97.66%), url(<path-to-image>), lightgray 50% / cover no-repeat;
`;
export const BtnWrapper = styled.div`
display: flex;
gap: 8px;
`;
export const DeleteButton = styled.button`
color:white;
display: flex;
width: 46px;
height:46px;
justify-content: center;
align-items: center;
border:none;
border-radius: 40px;
background: #161F37;
@media only screen and (min-width: 704px) {
width: 56px;
height:56px;
}
`;
export const SeeMoreButton = styled.button`
color:white;
padding: 18px 44px;
border-radius: 42px;
background: #161F37;
font-weight: 600;
border:none;
`;