import { Title, Text, Anchor, Container, Flex, Button } from '@mantine/core';
import classes from './Welcome.module.css';
import { BookList } from '../BookList';
import { useState } from 'react';
import Link from 'next/link';

export function Welcome() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Flex
        justify="center"
        mih={200}
        style={{
          backgroundImage: 'url(/bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
        align="center"
        direction="column"
        mt={60}
      >
        <Title className={`${classes.title} ${'title-popup'}`} ta="center">
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: 'red', to: 'yellow' }}
          >
            NEW ARRIVALS
          </Text>
        </Title>
        <Button component={Link} href="/filter" className="buy-me" variant="filled" color="violet">
          Buy Me
        </Button>
      </Flex>
      <BookList />
    </>
  );
}
