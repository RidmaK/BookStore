import { Container, MantineProvider, createTheme, rem } from '@mantine/core';

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(280),  // Extra extra small screens (mobile)
  xs: rem(360),   // Extra small screens (mobile)
  sm: rem(480),   // Small screens (tablets)
  md: rem(600),   // Medium screens (small laptops)
  lg: rem(720),   // Large screens (desktops)
  xl: rem(840),   // Extra large screens (large desktops)
  xxl: rem(1080),  // Extra extra large screens (widescreen desktops)
  xxxl: rem(1280), // Ultra wide screens
  xxxx: rem(1440), // Extra ultra wide screens
};


export const theme = createTheme({
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
            ? CONTAINER_SIZES[size]
            : rem(size),
        },
      }),
    }),
  },
  
});
