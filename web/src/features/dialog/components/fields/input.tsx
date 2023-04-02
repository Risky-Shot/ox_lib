import { createStyles, PasswordInput, TextInput } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { IInput } from '../../../../typings/dialog';
import { UseFormRegisterReturn } from 'react-hook-form';

import {inputStyles} from '../../../../theme/styles';

interface Props {
  register: UseFormRegisterReturn;
  row: IInput;
  index: number;
}

// const useStyles = createStyles((theme) => ({
//   eyeIcon: {
//     color: theme.colors.rdr[2],
//   },
//   inputField:{
//     input : {   
//     border: `3px double ${theme.colors.rdr[4]}`,
//     backgroundColor: theme.colors.rdr[1], 
//     color: theme.colors.rdr[4],
//     '&:focus-within': {
//       backgroundColor: theme.colors.rdr[2],
//       outline: 'none',
//       border: `2px solid ${theme.colors.rdr[4]}`,
//       color: theme.colors.rdr[4],
//       "::placeholder":{
//         color: theme.colors.gray[7]
//       }
//     },
//     "::placeholder":{
//       color: theme.colors.gray[5]
//     },
//     "::-ms-reveal":{
//       display: 'none'
//     }
//   }
//   }
// }));

const InputField: React.FC<Props> = (props) => {
  const { classes } = inputStyles();

  return (
    <>
      {!props.row.password ? (
        <TextInput
          {...props.register}
          defaultValue={props.row.default}
          label={props.row.label}
          description={props.row.description}
          icon={props.row.icon && <FontAwesomeIcon icon={props.row.icon} fixedWidth />}
          placeholder={props.row.placeholder}
          disabled={props.row.disabled}
          withAsterisk={props.row.required}
          className={classes.inputField}
        />
      ) : (
        <PasswordInput
          {...props.register}
          defaultValue={props.row.default}
          label={props.row.label}
          description={props.row.description}
          icon={props.row.icon && <FontAwesomeIcon icon={props.row.icon} fixedWidth />}
          placeholder={props.row.placeholder}
          disabled={props.row.disabled}
          withAsterisk={props.row.required}
          visibilityToggleIcon={({ reveal, size }) => (
            <FontAwesomeIcon
              icon={reveal ? 'eye-slash' : 'eye'}
              fontSize={size}
              cursor="pointer"
              className={classes.eyeIcon}
              fixedWidth
            />
          )}
          // className={classes.inputField}
        />
      )}
    </>
  );
};

export default InputField;
