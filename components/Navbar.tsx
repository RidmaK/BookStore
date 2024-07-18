import React from 'react';
import { Container, Flex, Title, Text, Anchor, Box } from '@mantine/core';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';

interface NavbarProps {
  // Add any props you might need, such as active link or callback functions
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
      py="sm"
      px="lg"
      bg="#1d3557"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}
    >
      <Box>
        <Title order={4} onClick={() => console.log('Clicked Logo')}>
          <Text color="blue" size="xl">
            Book Store
          </Text>
        </Title>
      </Box>
      <Box>
        <Flex gap={20}>
          <Anchor href="#" mt={5} className='nav-link' onClick={() => console.log('Clicked Home')}>
            Home
          </Anchor>
          <Anchor href="#new-arrivals" mt={5} className='nav-link' onClick={() => console.log('Clicked New Arrivals')}>
            New Arrivals
          </Anchor>
          <ColorSchemeToggle />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
