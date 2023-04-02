import { MultiSelect, Select, createStyles } from '@mantine/core';
import { ISelect } from '../../../../typings';
import { Control, useController } from 'react-hook-form';
import { FormValues } from '../../InputDialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  row: ISelect;
  index: number;
  control: Control<FormValues>;
}

const useStyles = createStyles((theme) => ({
  selectBox:{
    item: {
      // applies styles to selected item
      '&[data-selected]': {
          backgroundColor: theme.colors.rdr[3],
          color: theme.colorScheme === 'dark' ? theme.white : theme.colors.teal[9]
      },

      '&[data-hovered]': {
        backgroundColor: theme.colors.rdr[3],
      },
    }
  }
}));

const SelectField: React.FC<Props> = (props) => {
  const controller = useController({
    name: `test.${props.index}.value`,
    control: props.control,
    rules: { required: props.row.required },
  });

 const { classes } = useStyles();
  return (
    <>
      {props.row.type === 'select' ? (
        <Select
          data={props.row.options}
          value={controller.field.value}
          name={controller.field.name}
          ref={controller.field.ref}
          onBlur={controller.field.onBlur}
          onChange={controller.field.onChange}
          disabled={props.row.disabled}
          label={props.row.label}
          description={props.row.description}
          withAsterisk={props.row.required}
          clearable={props.row.clearable}
          icon={props.row.icon && <FontAwesomeIcon icon={props.row.icon} fixedWidth />}
          className={classes.selectBox}
        />
      ) : (
        <>
          {props.row.type === 'multi-select' && (
            <MultiSelect
              data={props.row.options}
              value={controller.field.value}
              name={controller.field.name}
              ref={controller.field.ref}
              onBlur={controller.field.onBlur}
              onChange={controller.field.onChange}
              disabled={props.row.disabled}
              label={props.row.label}
              description={props.row.description}
              withAsterisk={props.row.required}
              clearable={props.row.clearable}
              icon={props.row.icon && <FontAwesomeIcon icon={props.row.icon} fixedWidth />}
            />
          )}
        </>
      )}
    </>
  );
};

export default SelectField;
