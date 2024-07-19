import {
  Container,
  Grid,
  TextInput,
  Select,
  Checkbox,
  Slider,
  Flex,
  Pagination,
  Box,
  Text,
  Group,
} from '@mantine/core';
import { useState } from 'react';
import books from '@/data/books';
import { Book } from '../Book';
import { getUniqueCategories } from '@/utils/utils';

const BookFilter = () => {
  const [booksData, setBooksData] = useState<any>(books);
  const [searchText, setSearchText] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortCriteria, setSortCriteria] = useState<string | null>('title');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(100);
  const itemsPerPage = 8; // Number of books per page

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSortChange = (value: string | null) => {
    setSortCriteria(value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const category = event.target.value;
    setSelectedCategories((current) =>
      current.includes(category) ? current.filter((c) => c !== category) : [...current, category]
    );
  };

  const handlePriceChange = (value: number) => {
    setPriceRange(value);
  };

  const filteredBooks = booksData
    .filter((book: any) => {
      const matchesSearchText =
        searchText.trim() === '' ||
        book.title.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(searchText.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(book.category);

      const matchesPrice = book.price <= priceRange;

      return matchesSearchText && matchesCategory && matchesPrice;
    })
    .sort((a: any, b: any) => {
      if (!sortCriteria) return 0;
      if (sortCriteria === 'title') return a.title.localeCompare(b.title);
      if (sortCriteria === 'author') return a.author.localeCompare(b.author);
      if (sortCriteria === 'price') return a.price - b.price;
      return 0;
    });

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const paginatedBooks = filteredBooks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const uniqueCategories = getUniqueCategories(books); // Get unique categories

  return (
    <Container size="xxxx" mt={100} mb={60}>
      <TextInput
        placeholder="Search Here....."
        value={searchText}
        onChange={handleSearchTextChange}
        style={{ width: '60%', margin: '0 auto 20px auto' }}
      />
      <Group mb={20} style={{ justifyContent: 'center' }}>
        <Select
          label="Sort by"
          data={['title', 'author', 'price']}
          value={sortCriteria}
          onChange={handleSortChange}
          placeholder="Sort by"
        />
        <Group>
          {uniqueCategories.map((category: any) => (
            <Checkbox
              key={category}
              value={category}
              label={category}
              checked={selectedCategories.includes(category)}
              onChange={handleCategoryChange}
            />
          ))}
        </Group>
        <Box maw={400} mx="auto" w={400}>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            min={0}
            max={100}
            marks={[
              { value: 0, label: '$0' },
              { value: 50, label: '$50' },
              { value: 100, label: '$100' },
            ]}
          />
          <Text mt="lg" size="sm">
            Price range: <b>{`$0 - $${priceRange}`}</b>
          </Text>
        </Box>
      </Group>
      <Grid mb={60}>
        {paginatedBooks.map((book: any) => (
          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }} key={book.id}>
            <Book book={book} />
          </Grid.Col>
        ))}
      </Grid>
      <Flex justify="center" align="center">
        <Pagination
          total={totalPages}
          value={currentPage}
          onChange={handlePageChange}
          withControls
          size="lg"
          style={{ marginTop: 20 }}
        />
      </Flex>
    </Container>
  );
};

export default BookFilter;
