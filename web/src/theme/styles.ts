import { createStyles } from '@mantine/core';

export const inputStyles = createStyles((theme) => ({
  eyeIcon: {
    color: theme.colors.rdr[2],
  },
  inputField:{
    input : {   
    border: `3px double ${theme.colors.rdr[4]}`,
    backgroundColor: theme.colors.rdr[1], 
    color: theme.colors.rdr[4],
    '&:focus-within': {
      backgroundColor: theme.colors.rdr[2],
      outline: 'none',
      border: `2px solid ${theme.colors.rdr[4]}`,
      color: theme.colors.rdr[4],
      "::placeholder":{
        color: theme.colors.gray[7]
      }
    },
    "::placeholder":{
      color: theme.colors.gray[5]
    },
    "::-ms-reveal":{
      display: 'none'
    }
  }
  }
}));