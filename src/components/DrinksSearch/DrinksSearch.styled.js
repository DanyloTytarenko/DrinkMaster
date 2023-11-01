import Select from 'react-select';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/images/searchIcon.svg';

export const StyledSearchWrapper = styled.div`
  background-color: #0a0a11;
`;

export const StyledSearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
  }
`;

export const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  width: 335px;
  height: 54px;
  padding: 18px 24px 18px 24px;
  background-color: transparent;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  /* opacity: 0.8; */
  color: #f3f3f3;
  /* text-align: center; */
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
  outline: none;
  box-shadow: none;

  &::placeholder {
    color: #f3f3f3;
    opacity: 1;
  }

  &:hover,
  &:focus {
    border-color: rgba(243, 243, 243, 0.5);
  }

  @media (min-width: 768px) {
    /* width: 264px; по макету*/
    width: 234px;
    height: 56px;
    padding: 14px 25px 15px 24px;
    font-size: 17px;
    line-height: 1.56;
  }
`;

export const StyledSearchButton = styled.button`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    border: none;
    padding: 0;
    background-color: transparent;

    top: 18px;
    right: 24px;
    cursor: pointer;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  display: block;
  stroke: #f3f3f3;
`;

export const StyledSelect = styled(Select)`
  .react-select__control {
    width: 335px;
    height: 54px;
    padding: 18px 24px 18px 24px;
    background: #161f37;
    border: none;
    outline: none;
    box-shadow: none;
    border-radius: 200px;
    /* cursor: pointer; */
    color: #f3f3f3;
    font-size: 14px;
    font-family: Manrope;
    font-weight: 400;
    line-height: 1.29;
    @media (min-width: 768px) {
      /* width: 199px; по макету*/
      width: 235px;
      height: 56px;
      padding: 14px 24px 15px 24px;
      font-size: 17px;
      line-height: 1.56;
    }
  }

  .react-select__placeholder {
    color: #f3f3f3;
    font-size: 14px;
    font-family: Manrope;
    font-weight: 400;
    line-height: 1.29;
    @media (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }
  .react-select__input-container {
    margin: 0;
    padding: 0;
    color: #f3f3f3;
  }

  .react-select__indicator-separator {
    /* border: none; */
    display: none;
  }

  .react-select__dropdown-indicator {
    color: #f3f3f3;
    padding: 0;
    position: absolute;
    /* transform: rotate(180deg); */

    right: 17px;
    cursor: pointer;

    @media (min-width: 768px) {
      right: 24px;
    }
  }

  .react-select-container {
  }
  .react-select__value-container {
    padding: 0;
  }

  .react-select__menu {
    background: #161f37;
    padding: 14px 8px 14px 8px;
    margin-top: 4px;
    width: 335px;
    max-height: 360px;
    border-radius: 20px;
    @media (min-width: 768px) {
      /* width: 199px; по макету*/
      width: 225px;
    }
  }

  .react-select__single-value {
    color: #f3f3f3;
    &:focus-within {
      color: brown;
    }
  }
  .react-select__menuList {
    max-height: 60px;
    background-color: #f3f3f3;
  }

  .react-select__option--is-selected {
    color: #f3f3f3;
  }

  .react-select__menu-list {
    color: #f3f3f3;
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #434d67;
      border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb:horizontal {
      background-color: #434d67;
      border-radius: 20px;
    }
  }

  .react-select__option--custom-selected {
    color: red;
  }

  .react-select__option {
    color: rgba(243, 243, 243, 0.4);
    background-color: transparent;
    &:focus,
    &:active,
    &:hover {
      color: #f3f3f3;
      background-color: transparent;
    }
  }
`;

export const customStyles = {
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
  }),
};
