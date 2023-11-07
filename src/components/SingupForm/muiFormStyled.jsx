export const inputProps = {
  sx: {
    opacity: 1,
    color: 'rgba(243, 243, 243, 0.50)',
    fontFamily: 'Manrope',
    fontSize: {xs:'14px', sm: '17px', lg: '17px'},
    '&:hover, focus': {
      color: '#F3F3F3',
    },
  },
};

export const datePickerStyled = {
  textField: {
    error: false,
    sx: {
      width: '100%',
      mt: '14px',
      '& .MuiOutlinedInput-notchedOutline': {
        border: '1px solid rgba(243, 243, 243, 0.20)',
        opacity: 0.8,
      },
      '& .MuiOutlinedInput-root': {
        borderRadius: '200px',
        '&:hover > fieldset': {
          borderColor: 'rgba(243, 243, 243, 0.50)',
        },
        '&.Mui-focused > fieldset': {
          borderColor: 'rgba(243, 243, 243, 0.50)',
        },
      },
      svg: { color: '#F3F3F3' },
      input: {
        ...inputProps.sx,
        textTransform: 'lowercase',
      },
    },
  },
  layout: {
    sx: {
      '.MuiDateCalendar-root': {
        backgroundColor: '#161F37',
      },
      '.MuiPickersCalendarHeader-label': {
        fontFamily: 'Manrope',
        fontSize: '16px',
        fontWeight: 500,
        letterSpacing: '-0.32px',
        color: '#F3F3F3',
      },
      '.MuiSvgIcon-root': {
        color: '#F3F3F3',
      },
      '.MuiPickersYear-root .MuiPickersYear-yearButton.Mui-selected, .MuiPickersMonth-root .MuiPickersMonth-monthButton.Mui-selected, .MuiButtonBase-root.MuiPickersDay-root.Mui-selected':
        {
          color: '#161F37',
          backgroundColor: '#F3F3F3',
        },
      '.MuiDayCalendar-weekDayLabel': {
        fontFamily: 'Manrope',
        fontSize: '14px',
        fontWeight: 500,
        color: 'rgba(243, 243, 243, 0.50)',
      },
      '.MuiPickersYear-root, .MuiPickersMonth-root': {
        fontFamily: 'Manrope',
        fontSize: '16px',
        fontWeight: 500,
        letterSpacing: '-0.32px',
        color: '#F3F3F3',
      },
      '.MuiPickersDay-root': {
        fontFamily: 'Manrope',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '18px',
        letterSpacing: '-0.28px',
        color: '#F3F3F3',
        '&:hover': {
          color: '#161F37',
          backgroundColor: '#F3F3F3',
        },
      },
      '.MuiPickersYear-yearButton, .MuiPickersMonth-monthButton': {
        width: '72px',
        fontFamily: 'Manrope',
        fontSize: '16px',
        fontWeight: 500,
        letterSpacing: '-0.32px',
        borderRadius: '18px',
        '&:hover': {
          color: '#161F37',
          backgroundColor: '#F3F3F3',
        },
      },
    },
  },
};

export const outlineStyled = {
  '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(243, 243, 243, 0.20)',
  },
  backgroundColor: 'transparent',
  border: '1px',
  borderRadius: 200,
  opacity: 0.8,
  '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(243, 243, 243, 0.50)',
  },
  '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(243, 243, 243, 0.50)',
  },
};

export const outlineError = {
  '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: 'red',
  },
  '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'red',
  },
};
export const outlineSucces = {
  '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: 'green',
  },
  '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'green',
  },
};

export const iconStyled = {
  color: '#F3F3F3',
};


export const buttonStyled = {
  mt: '28px',
  pt: '18px',
  pb: '18px',
  fontFamily: 'Manrope',
  fontSize: {xs:'14px', sm: '16px', lg: '16px'},
  fontWeight: 600,
  lineHeight: '18px',
  textTransform: 'capitalize',
  borderRadius: '42px',
  background: '#F3F3F3',
  color: '#161F37',
  '&:hover': {
    backgroundColor: 'transparent',
    border: '1px solid rgba(243, 243, 243, 0.2)',
    color: '#F3F3F3',
  },
};

export const linkStyled = {
  mt: '14px',
  color: '#F3F3F3',
  fontFamily: 'Manrope',
  fontSize: {xs:'12px', sm: '14px', lg: '14px'},
  fontWeight: 600,
  lineHeight: {xs:'16px', sm: '18px', lg: '18px'},
  textDecoration: 'underline',
};
