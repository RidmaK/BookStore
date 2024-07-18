import { Button, Container, Group, useMantineColorScheme } from '@mantine/core';
import { IoMoonOutline, IoSunnyOutline, IoCloudOutline } from 'react-icons/io5';
import { FaShoppingCart } from "react-icons/fa";
import Link from 'next/link';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
      <Group>
        <Button
          variant="link"
          onClick={() => setColorScheme('light')}
          style={{ padding: '0' }}
          bg="none"
          className='nav-btn'
        >
          <IoSunnyOutline />
        </Button>
        <Button
          variant="link"
          onClick={() => setColorScheme('dark')}
          style={{ padding: '0' }} 
          bg="none"
          className='nav-btn'
        >
          <IoMoonOutline />
        </Button>
        <Button
          variant="link"
          onClick={() => setColorScheme('auto')}
          style={{ padding: '0' }} 
          bg="none"
          className='nav-btn'
        >
          <IoCloudOutline />
        </Button>
        <Button
          component={Link}
          href="/cart"
          style={{ padding: '0' }} 
          bg="none"
          className='nav-btn'
        >
          <FaShoppingCart />
        </Button>
      </Group>
  );
}
