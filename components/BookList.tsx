import { Container, Grid, Flex, TextInput, Pagination, Center } from '@mantine/core';
import { Book as BookType } from '../types';
import { Book } from './Book';
import { useState } from 'react';
import { RiEmotionUnhappyLine } from 'react-icons/ri'; 

interface BookProps {
  books: BookType;
}

export function BookList({ books }: BookProps) {
  const [searchText, setSearchText] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8; // Number of books per page

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    setCurrentPage(1); // Reset page to 1 when search text changes
  };

  const filteredBooks = books.filter((book) => {
    return (
      searchText.trim() === '' ||
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const paginatedBooks = filteredBooks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <Container size="xxxx" mt={60} mb={60}>
      <TextInput
        placeholder="Enter search text"
        value={searchText}
        onChange={handleSearchTextChange}
        style={{ marginTop: 16, marginBottom: 60, border: '1px solid #ccc', borderRadius: '4px', padding: '10px' }}
        mb={60}
      />
      {filteredBooks.length === 0 ? (
        <Center style={{ minHeight: '200px' }}>
          <RiEmotionUnhappyLine size={48} />
          <p>No books found</p>
        </Center>
      ) : (
        <Grid mb={60}>
          {paginatedBooks.map((book) => (
            <Grid.Col key={book.id} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
              <Book key={book.id} book={book} />
            </Grid.Col>
          ))}
        </Grid>
      )}
      {filteredBooks.length > itemsPerPage && (
        <Flex justify="center" align="center" mb={100}>
          <Pagination
            total={totalPages}
            currentPage={currentPage}
            onChange={handlePageChange}
            withControls
            size="lg"
            style={{ marginTop: 20 }}
            justify="center"
          />
        </Flex>
      )}
    </Container>
  );
}
