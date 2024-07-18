import { Button, Group, useMantineColorScheme, Indicator } from '@mantine/core';
import { IoMoonOutline, IoSunnyOutline, IoCloudOutline } from 'react-icons/io5';
import { FaShoppingCart } from "react-icons/fa";
import Link from 'next/link';
import { useCartStore } from '@/stores/cartStore';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

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
        style={{ paddingRight: '0', position: 'relative' }} 
        bg="none"
        className='nav-btn'
      >
        <Indicator label={totalItems} size={18} mr="lg" mt="sm" color="red">
          <FaShoppingCart />
        </Indicator>
      </Button>
    </Group>
  );
}
