export const inputStyled = {
  mb: '14px',
  background: 'transparent',
  '& .MuiOutlinedInput-root': {
    '&>fieldset': {
      borderRadius: '200px',
      border: '1px solid rgba(243, 243, 243, 0.20)',
      opacity: 0.8,
    },
    '&:hover > fieldset': {
      borderColor: 'rgba(243, 243, 243, 0.50)',
    },
    '&:focus > fieldset': {
      borderColor: 'rgba(243, 243, 243, 0.50)',
    },
  },
};

export const inputProps = {
  sx: {
    opacity: 1,
    color: 'rgba(243, 243, 243, 0.50)',
    fontFamily: 'Manrope',
    fontSize: '14px',
    '&:hover, focus': {
      color: '#F3F3F3',
    },
  },
};

export const datePickerStyled = {
  width: '100%',
  '& .MuiOutlinedInput-notchedOutline': {
    border: '1px solid rgba(243, 243, 243, 0.20)',
    opacity: 0.8,
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '200px',
    '&:hover > fieldset': { borderColor: 'rgba(243, 243, 243, 0.50)' },
    '&:focus > fieldset': { borderColor: 'rgba(243, 243, 243, 0.50)' },
  },
  svg: { color: '#F3F3F3' },
  input: {
    color: 'rgba(243, 243, 243, 0.50)',
    fontFamily: 'Manrope',
    fontSize: '14px',
    textTransform: 'lowercase',
    '&:hover, focus': {
      color: '#F3F3F3',
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

export const iconStyled = {
  color: '#F3F3F3',
};

export const buttonStyled = {
  mt: '14px',
  pt: '18px',
  pb: '18px',
  fontFamily: 'Manrope',
  fontSize: '14px',
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
  fontSize: '12px',
  fontWeight: 600,
  lineHeight: '16px',
  textDecoration: 'underline',
};
