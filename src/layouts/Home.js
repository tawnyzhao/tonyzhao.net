import { Center, Container, Grid } from "@chakra-ui/react";

const Home = ({ children }) => (
  <Center minH="100vh">
    <Container
      maxW={["container.sm", null, null, "container.xl"]}
      py={4}
      overflow="auto"
    >
      <Grid templateColumns={["1fr", null, null, "3fr 2fr"]} gap={8}>
        {children}
      </Grid>
    </Container>
  </Center>
);

export { Home };
