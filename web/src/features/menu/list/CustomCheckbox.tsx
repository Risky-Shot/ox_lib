import { Checkbox, createStyles, Stack } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    backgroundColor: theme.colors.rdr[4],
    '&:checked': { backgroundColor: theme.colors.rdr[3], borderColor: theme.colors.rdr[3] },
  },
  inner: {
    '> svg > path': {
      fill: theme.colors.rdr[4],
    },
  },
}));

const CustomCheckbox: React.FC<{ checked: boolean }> = ({ checked }) => {
  const { classes } = useStyles();
  return (
    <Checkbox
      checked={checked}
      size="md"
      classNames={{ root: classes.root, input: classes.input, inner: classes.inner }}
    />
  );
};

export default CustomCheckbox;
