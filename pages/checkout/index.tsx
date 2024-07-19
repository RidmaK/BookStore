import React, { useState } from 'react';
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
  Group,
  rem,
  Grid,
  LoadingOverlay,
} from '@mantine/core';
import { useCartStore } from '@/stores/cartStore';
import { IconExclamationCircle } from '@tabler/icons-react';
import { useRouter } from 'next/router';

const checkoutSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .nonempty('Name is required'),
  address: z
    .string()
    .min(5, { message: 'Address must be at least 5 characters long' })
    .nonempty('Address is required'),
  city: z
    .string()
    .min(2, { message: 'City must be at least 2 characters long' })
    .nonempty('City is required'),
  postalCode: z
    .string()
    .min(4, { message: 'Postal code must be at least 4 characters long' })
    .nonempty('Postal code is required'),
  country: z
    .string()
    .min(2, { message: 'Country must be at least 2 characters long' })
    .nonempty('Country is required'),
});

const CheckoutPage = () => {
  const router = useRouter();
  const { cart, clearCart } = useCartStore();
  const [visible, setVisible] = useState(false);
  const form = useForm({
    initialValues: {
      name: '',
      address: '',
      city: '',
      postalCode: '',
      country: '',
    },
    validate: zodResolver(checkoutSchema),
  });

  const handleSubmit = (values: typeof form.values) => {
    setVisible(true); 
    try {
      setTimeout(() => {
        clearCart(); 
        router.push('/'); 
      }, 2000);
    } catch (error) {
      console.error('Order submission failed', error);
    } finally {
      setTimeout(() => {
        setVisible(false); 
      }, 2000); 
    }
  };

  return (
    <Container size="xxxx" mt={100}>
      <LoadingOverlay visible={visible} overlayProps={{ radius: "sm", blur: 2 }} />
      <Title order={2} mb={20}>
        Checkout
      </Title>
      <Grid mb={60}>
        <Grid.Col span={{ base: 12, sm: 6, md: 6, lg: 6 }}>
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
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 6, lg: 6 }}>
          <Container>
            <form
              style={{ width: '320px' }}
              className="checkout-form"
              onSubmit={form.onSubmit(handleSubmit)}
            >
              <TextInput
                mt="md"
                label="Name"
                placeholder="Your name"
                {...form.getInputProps('name')}
                withErrorStyles={false}
                rightSectionPointerEvents="none"
                rightSection={
                  form.errors.name ? (
                    <IconExclamationCircle
                      style={{ width: rem(20), height: rem(20) }}
                      color="var(--mantine-color-error)"
                    />
                  ) : null
                }
              />
              <TextInput
                mt="md"
                label="Address"
                placeholder="Your address"
                {...form.getInputProps('address')}
                withErrorStyles={false}
                rightSectionPointerEvents="none"
                rightSection={
                  form.errors.address ? (
                    <IconExclamationCircle
                      style={{ width: rem(20), height: rem(20) }}
                      color="var(--mantine-color-error)"
                    />
                  ) : null
                }
              />
              <TextInput
                mt="md"
                label="City"
                placeholder="Your city"
                {...form.getInputProps('city')}
                withErrorStyles={false}
                rightSectionPointerEvents="none"
                rightSection={
                  form.errors.city ? (
                    <IconExclamationCircle
                      style={{ width: rem(20), height: rem(20) }}
                      color="var(--mantine-color-error)"
                    />
                  ) : null
                }
              />
              <TextInput
                mt="md"
                label="Postal Code"
                placeholder="Your postal code"
                {...form.getInputProps('postalCode')}
                withErrorStyles={false}
                rightSectionPointerEvents="none"
                rightSection={
                  form.errors.postalCode ? (
                    <IconExclamationCircle
                      style={{ width: rem(20), height: rem(20) }}
                      color="var(--mantine-color-error)"
                    />
                  ) : null
                }
              />
              <TextInput
                mt="md"
                label="Country"
                placeholder="Your country"
                {...form.getInputProps('country')}
                withErrorStyles={false}
                rightSectionPointerEvents="none"
                rightSection={
                  form.errors.country ? (
                    <IconExclamationCircle
                      style={{ width: rem(20), height: rem(20) }}
                      color="var(--mantine-color-error)"
                    />
                  ) : null
                }
              />
              <Group mt={20}>
                <Button type="submit">Place Order</Button>
              </Group>
            </form>
          </Container>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
