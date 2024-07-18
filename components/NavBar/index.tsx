import React, { useState } from 'react';
import { Flex, Title, Text, Box, Burger, Drawer, ScrollArea } from '@mantine/core';
import Link from 'next/link';
import styles from './index.module.css';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

const Navbar: React.FC = () => {
  const [opened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened((prev) => !prev);
  };

  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        py="sm"
        px="lg"
        className={styles.navbar}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}
      >
        <Box>
          <Title order={4} onClick={() => console.log('Clicked Logo')}>
            <Text color="white" size="xl">
              Book Store
            </Text>
          </Title>
        </Box>
        <Box className={styles.navItems}>
          <Flex gap={20} className={styles.desktopNav}>
            <Link href="/" className={styles.navLink} onClick={() => console.log('Clicked Home')}>
              Home
            </Link>
            <Link href="/filter" className={styles.navLink}>
              Books
            </Link>
            <Link
              href="#new-arrivals"
              className={styles.navLink}
              onClick={() => console.log('Clicked New Arrivals')}
            >
              New Arrivals
            </Link>
          </Flex>
          <ColorSchemeToggle />
          <Box mt={25}>
            <Burger opened={opened} onClick={handleToggle} className={styles.mobileNavToggle} />
          </Box>
        </Box>
      </Flex>
      <Drawer
        opened={opened}
        onClose={handleToggle}
        title="Navigation"
        padding="md"
        size="sm"
        position="right"
      >
        <ScrollArea style={{ height: '100%' }}>
          <Flex direction="column">
            <Link href="/" className={styles.navLinkDrawer} onClick={handleToggle}>
              Home
            </Link>
            <Link href="/filter" className={styles.navLinkDrawer} onClick={handleToggle}>
              Books
            </Link>
            <Link href="#new-arrivals" className={styles.navLinkDrawer} onClick={handleToggle}>
              New Arrivals
            </Link>
          </Flex>
        </ScrollArea>
      </Drawer>
    </>
  );
};

export default Navbar;
