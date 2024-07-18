import { Button, Container, Group, useMantineColorScheme } from '@mantine/core';
import { IoMoonOutline, IoSunnyOutline, IoCloudOutline } from 'react-icons/io5';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
      <Group>
        <Button
          variant="link"
          onClick={() => setColorScheme('light')}
          style={{ padding: '0' }}
          bg="none"
        >
          <IoSunnyOutline />
        </Button>
        <Button
          variant="link"
          onClick={() => setColorScheme('dark')}
          style={{ padding: '0' }} 
          bg="none"
        >
          <IoMoonOutline />
        </Button>
        <Button
          variant="link"
          onClick={() => setColorScheme('auto')}
          style={{ padding: '0' }} 
          bg="none"
        >
          <IoCloudOutline />
        </Button>
      </Group>
  );
}
