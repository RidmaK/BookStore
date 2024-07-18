import { useState, useEffect } from 'react';
import { Container, Group, Text, Button, NumberInput, Flex, Box } from '@mantine/core';
import { Book as BookType } from '@/types';

interface CartItem extends BookType {
  quantity: number;
}

const ShoppingCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const updateQuantity = (id: number, quantity: number) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: quantity > 0 ? quantity : 1 } : item
    );
    saveCart(newCart);
  };

  const removeFromCart = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    saveCart(newCart);
  };

  if (cart.length === 0) {
    return <Container>No items in cart.</Container>;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container size="md" mt={40}>
      <Group direction="column" spacing="lg">
        {cart.map((item) => (
          <Flex key={item.id} justify="space-between" align="center">
            <Box>
              <Text size="lg">{item.title}</Text>
              <Text size="sm" color="dimmed">
                by {item.author}
              </Text>
              <Text size="sm" color="blue">
                ${item.price.toFixed(2)}
              </Text>
            </Box>
            <Group>
              <NumberInput
                value={item.quantity}
                onChange={(value) => updateQuantity(item.id, value)}
                min={1}
                max={100}
                step={1}
              />
              <Button color="red" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </Group>
          </Flex>
        ))}
        <Text size="lg" mt={20}>
          Total: ${total.toFixed(2)}
        </Text>
      </Group>
    </Container>
  );
};

export default ShoppingCart;
