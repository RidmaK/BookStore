// pages/cart.tsx
import React from 'react';
import { Container, Table, Button, NumberInput, Text, Title, Flex } from '@mantine/core';
import { useCartStore } from '@/stores/cartStore';
import Link from 'next/link';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  return (
    <Container size="xxxx" mt={100}>
      <Title order={2}>Shopping Cart</Title>
      {cart.length === 0 ? (
        <Text mt={20}>Your cart is empty</Text>
      ) : (
        <Table mt={20}>
          <thead>
            <tr>
              <th>Book</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <NumberInput
                    value={item.quantity}
                    onChange={(value: any) => handleQuantityChange(item.id, value || 1)}
                    min={1}
                    max={100}
                  />
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <Button color="red" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {cart.length > 0 && (
        <Flex gap={10}>
          <Button mt={20} color="red" onClick={clearCart}>
            Clear Cart
          </Button>
          <Button mt={20} color="green" component={Link} href="/checkout">
            Proceed to Checkout
          </Button>
        </Flex>
      )}
    </Container>
  );
};

export default CartPage;
