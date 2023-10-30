import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../colors';
export const List = styled.ul`
display: flex;
flex-wrap: wrap; 
justify-content:center;
align-items: center;
gap: 40px;
color: ${colors.light};
@media only screen and (min-width: 704px) {
row-gap: 80px;
column-gap: 20px;   
}
`;
export const DrinksItem = styled.li`
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
export const DrinkTitle = styled.h2`
font-size: 18px;
font-weight: 500;
line-height: 1.33;
margin-bottom: 0;
@media only screen and (min-width: 704px) {
font-size: 24px;
}
`
export const DrinkDesc = styled.p`
font-size: 14px;
@media only screen and (min-width: 704px) {
font-size: 16px;
}
`
export const DrinkAlc = styled.span`
font-size: 14px;
color: ${colors.disabled};
@media only screen and (min-width: 704px) {
font-size: 16px;
}
`
export const TitleWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`
export const BtnWrapper = styled.div`
display: flex;
gap: 8px;
`;
export const DeleteButton = styled.button`
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
color: ${colors.light};
padding: 18px 44px;
border-radius: 42px;
background: ${colors.secondaryDark};
font-weight: 600;
border:none;
`;