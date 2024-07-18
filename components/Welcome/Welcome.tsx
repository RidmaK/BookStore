import { Title, Text, Anchor, Container, Flex } from '@mantine/core';
import classes from './Welcome.module.css';
import { BookList } from '../BookList';
import { useEffect, useState } from 'react';
import books from '@/data/books';

export function Welcome() {
  const [bookData, setBooks] = useState<any>(books);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Flex justify="center" mih={200} bg="rgb(249, 247, 243)" align="center" mt={60}>
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
      </Flex>
      <BookList books={bookData} />
    </>
  );
}
