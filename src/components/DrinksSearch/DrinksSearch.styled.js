import Select from 'react-select';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/images/searchIcon.svg';
import { colors } from '../../colors';

export const StyledSearchWrapper = styled.div`
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 60px;
  }
  @media (min-width: 1440px) {
    margin-top: 80px;
  }
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
    justify-content: start;
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
  /* border: 1px solid rgba(243, 243, 243, 0.2); */
  border: ${({ theme }) =>
    theme === 'dark'
      ? '1px solid rgba(243, 243, 243, 0.2)'
      : '1px solid rgba(10, 10, 17, 0.20)'};
  /* color: ${colors.light}; //#f3f3f3 */
  color: ${({ theme }) =>
    theme === 'dark' ? colors.light : colors.primaryDark};
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
  outline: none;
  box-shadow: none;
  transition: border-color 250ms ease;

  &::placeholder {
    /* color: ${colors.light}; //#f3f3f3 */
    color: ${({ theme }) =>
      theme === 'dark' ? colors.light : colors.primaryDark};
    opacity: 1;
  }

  &:hover,
  &:focus {
    /* border-color: rgba(243, 243, 243, 0.5); */
    border-color: ${({ theme }) =>
      theme === 'dark' ? 'rgba(243, 243, 243, 0.5)' : 'rgba(10, 10, 17, 0.50)'};
  }

  @media (min-width: 768px) {
    /* width: 264px; по макету*/
    width: 230px;
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
  /* stroke: ${colors.light}; //#f3f3f3 */
  stroke: ${({ theme }) =>
    theme === 'dark' ? colors.light : colors.primaryDark};
`;

export const StyledSelect = styled(Select)`
  .react-select__control {
    width: 335px;
    height: 54px;
    padding: 18px 24px 18px 24px;
    background-color: ${colors.secondaryDark}; //#161f37
    /* background-color: ${({ theme }) =>
      theme === 'dark' ? colors.secondaryDark : colors.secondaryDark}; */
    border: none;
    outline: none;
    box-shadow: none;
    border-radius: 200px;
    /* color: ${colors.light}; //#f3f3f3 */
    color: ${({ theme }) =>
      theme === 'dark' ? colors.light : colors.primaryDark};
    font-size: 14px;
    font-family: Manrope;
    font-weight: 400;
    line-height: 1.29;
    @media (min-width: 768px) {
      /* width: 199px; по макету*/
      width: 229px;
      height: 56px;
      padding: 14px 24px 15px 24px;
      font-size: 17px;
      line-height: 1.56;
    }
  }

  .react-select__placeholder {
    color: ${colors.light}; //#f3f3f3
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
    color: ${colors.light}; //#f3f3f3
  }

  .react-select__indicator-separator {
    /* border: none; */
    display: none;
  }

  .react-select__dropdown-indicator {
    color: ${colors.light}; //#f3f3f3
    padding: 0;
    position: absolute;

    right: 17px;
    cursor: pointer;

    @media (min-width: 768px) {
      right: 24px;
    }
  }

  .react-select__value-container {
    padding: 0;
  }

  .react-select__menu {
    /* background-color:${colors.secondaryDark}; //#161f37; */
    background-color: ${({ theme }) =>
      theme === 'dark' ? colors.secondaryDark : colors.white};
    padding: 14px 8px 14px 8px;
    margin-top: 4px;
    width: 335px;
    max-height: 360px;
    border-radius: 20px;
    @media (min-width: 768px) {
      /* width: 199px; //по макету*/
      width: 225px;
    }
  }

  .react-select__single-value {
    color: ${colors.light}; //#f3f3f3
    width: 160px;
  }
  .react-select__menuList {
    max-height: 60px;
    /* background-color: ${colors.light}; //#f3f3f3 */
    background-color: ${({ theme }) =>
      theme === 'dark' ? colors.light : colors.primaryDark};
  }

  .react-select__menu-list {
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      /* background-color: ${colors.gray}; //#434d67; */
      background-color: ${({ theme }) =>
        theme === 'dark' ? colors.gray : colors.light};
      border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb:horizontal {
      /* background-color: ${colors.gray}; //#434d67; */
      background-color: ${({ theme }) =>
        theme === 'dark' ? colors.gray : colors.light};
      border-radius: 20px;
    }
  }

  .react-select__option {
    background-color: transparent;
    text-overflow: ellipsis;
    transition:
      color 250ms ease,
      background-color 250ms ease;

    &:focus,
    &:active,
    &:hover {
      /* color: ${colors.light}; //#f3f3f3 */
      color: ${({ theme }) =>
        theme === 'dark' ? colors.light : colors.primaryDark};
      cursor: pointer;
    }
  }
`;

export const customStyles = {
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    color:
      state.isSelected || state.isFocused
        ? colors.light
        : 'rgba(243, 243, 243, 0.4)',
  }),
};

export const customStylesLight = {
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    color:
      state.isSelected || state.isFocused
        ? colors.primaryDark
        : 'rgba(10, 10, 17, 0.4)',
  }),
};
