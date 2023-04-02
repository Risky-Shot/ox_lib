import {createStyles, Checkbox } from '@mantine/core';
import { ICheckbox } from '../../../../typings/dialog';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  row: ICheckbox;
  index: number;
  register: UseFormRegisterReturn;
}

const useStyles = createStyles((theme) => ({
  checkbox : {
    input:{
      backgroundColor: theme.colors.rdr[4]
    }
    
  }
}))

const CheckboxField: React.FC<Props> = (props) => {
  const { classes } = useStyles();
  return (
    <Checkbox
      {...props.register}
      sx={{ display: 'flex' }}
      required={props.row.required}
      label={props.row.label}
      defaultChecked={props.row.checked}
      color={'rdr.3'}
      className={classes.checkbox}
    />
  );
};

export default CheckboxField;
