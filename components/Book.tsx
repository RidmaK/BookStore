import { Card, Image, Text, Button, Group } from '@mantine/core';
import { Book as BookType } from '../types';

interface BookProps {
  book: BookType;
}

export function Book({ book }: BookProps) {
  return (
    <Card  padding="lg" bg="none" className='card'>
      <Card.Section className='card-section'>
        <Image src={book.cover} alt={book.title} className='image' />
      </Card.Section>

      <Group p="apart" style={{ marginBottom: 5, marginTop: 5 }}>
        <Text fw={700} size="xl" >{book.title}</Text>
        <Text w={500} color="teal">${book.price}</Text>
      </Group>

      <Text size="sm" style={{ lineHeight: 1.5 }}>
        {book.description}
      </Text>

      <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }} className="add-to-cart">
        Add to Cart
      </Button>
    </Card>
  );
}
