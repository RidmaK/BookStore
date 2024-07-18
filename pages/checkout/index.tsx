// pages/checkout.tsx
import React from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';
import {
  Container,
  TextInput,
  Button,
  Box,
  Title,
  Flex,
  Text,
  Image,
  Divider,
} from '@mantine/core';
import { useCartStore } from '@/stores/cartStore';

const checkoutSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  address: z.string().min(5, 'Address must be at least 5 characters long'),
  city: z.string().min(2, 'City must be at least 2 characters long'),
  postalCode: z.string().min(4, 'Postal code must be at least 4 characters long'),
  country: z.string().min(2, 'Country must be at least 2 characters long'),
});

const CheckoutPage = () => {
  const { cart, clearCart } = useCartStore();
  const form = useForm({
    schema: zodResolver(checkoutSchema),
    initialValues: {
      name: '',
      address: '',
      city: '',
      postalCode: '',
      country: '',
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    // Handle the form submission
    console.log('Order submitted', values);
    clearCart();
  };

  return (
    <Container size="xxxx" mt={100}>
      <Title order={2} mb={20}>
        Checkout
      </Title>
      <Flex gap={200} justify="center">
        <Box mb={30}>
          <Title order={3} mb={10}>
            Items in your cart
          </Title>
          {cart.length === 0 ? (
            <Text>No items in the cart</Text>
          ) : (
            cart.map((item) => (
              <Box key={item.id} mb={10}>
                <Flex align="center">
                  <Image src={item.cover} alt={item.title} width={50} height={75} mr={10} />
                  <Box>
                    <Text>{item.title}</Text>
                    <Text size="sm" color="dimmed">
                      by {item.author}
                    </Text>
                    <Text size="sm" color="dimmed">
                      {item.category}
                    </Text>
                    <Text size="sm" color="dimmed">
                      ${item.price.toFixed(2)}
                    </Text>
                    <Text size="sm" color="dimmed">
                      Quantity: {item.quantity}
                    </Text>
                  </Box>
                </Flex>
                <Divider my={10} />
              </Box>
            ))
          )}
        </Box>
        <Box mb={30}>
          <Container>
            <form className='checkout-form' onSubmit={form.onSubmit(handleSubmit)}>
              <TextInput
                label="Name"
                placeholder="Your name"
                {...form.getInputProps('name')}
                mb={10}
              />
              <TextInput
                label="Address"
                placeholder="Your address"
                {...form.getInputProps('address')}
                mb={10}
              />
              <TextInput
                label="City"
                placeholder="Your city"
                {...form.getInputProps('city')}
                mb={10}
              />
              <TextInput
                label="Postal Code"
                placeholder="Your postal code"
                {...form.getInputProps('postalCode')}
                mb={10}
              />
              <TextInput
                label="Country"
                placeholder="Your country"
                {...form.getInputProps('country')}
                mb={10}
              />
              <Button type="submit" mt={20}>
                Place Order
              </Button>
            </form>
          </Container>
        </Box>
      </Flex>
    </Container>
  );
};

export default CheckoutPage;
