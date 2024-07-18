import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button, Container, Box, Image, NumberInput, Text, Title, Flex } from '@mantine/core';
import books from '@/data/books';
import { Book as BookType } from '@/types';
import { useCartStore } from '@/stores/cartStore';

const SingleBookPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState<BookType | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    if (id) {
      const foundBook = books.find((b) => b.id === parseInt(id as string));
      setBook(foundBook || null);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (book) {
      addToCart({ ...book, quantity });
    }
  };

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };

  if (!book) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container size="xxxx" mt={100}>
      <Flex align="center" justify="center" gap={40}>
        <Box>
          <Image src={book.cover} alt={book.title} width={300} height={400} mb={20} />
        </Box>
        <Box>
          <Title>{book.title}</Title>
          <Text mt={10} size="lg">
            by {book.author}
          </Text>
          <Text mt={10} size="sm" color="dimmed">
            {book.category}
          </Text>
          <Text mt={20} size="xl" color="blue">
            ${book.price.toFixed(2)}
          </Text>
          <Text mt={20}>{book.description}</Text>
          <NumberInput
            mt={20}
            value={quantity}
            onChange={handleQuantityChange}
            min={1}
            max={100}
            step={1}
            label="Quantity"
          />
          <Button mt={20} onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Box>
      </Flex>
    </Container>
  );
};

export default SingleBookPage;
