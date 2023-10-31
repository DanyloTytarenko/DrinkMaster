export const inputStyled = {
  background: 'transparent',
  '& .MuiOutlinedInput-root': {
    fieldset: {
      borderRadius: '200px',
      border: '1px solid rgba(243, 243, 243, 0.50)',
      opacity: 0.8,
    },
    '&:hover > fieldset': {
      borderColor: 'black',
    },
    '&:focuse > fieldset': {
      borderColor: 'black',
    },
  },
};

export const inputProps = {
  sx: {
    color: '#F3F3F3',
    fontFamily: 'Manrope',
    fontSize: '14px',
  },
};

export const datePickerStyled = {
    width: '100%',
    '& .MuiOutlinedInput-root': {
    '&:hover > fieldset': { borderColor: 'black' },
    '&:focuse > fieldset': { borderColor: 'black' },
    borderRadius: '200px',
  },
};

export const outlineStyled = {
  '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(243, 243, 243, 0.50)',
  },
  backgroundColor: 'transparent',
  border: '1px',
  borderRadius: 200,
  opacity: 0.8,
  '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'black',
  },
  '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'black',
  },
};
