import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'chinese-rocks',
  shadows: { sm: '1px 1px 3px rgba(0, 0, 0, 0.5)' },
  components: {
    Button: {
      styles: {
        root: {
          border: 'none',
        },
      },
    },
  },
  colors: {
    'rdr' : ['#000009', '#7e1921', '#961c26', '#d41936', '#e3e3e3', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF'],
  },
};
