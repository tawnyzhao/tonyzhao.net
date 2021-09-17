import {
  chakra,
  Box,
  Heading,
  Button,
  ButtonGroup,
  Center,
  ChakraProvider,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Grid,
  SlideFade,
} from "@chakra-ui/react";
import Profile from "./assets/profile.jpg";
import React, { useState, useLayoutEffect } from "react";
function App() {
  return (
    <ChakraProvider>
      <Center h="100vh">
        <Container
          maxW={["container.sm", null, null, "container.xl"]}
          py={4}
          overflow="auto"
        >
          <SimpleGrid columns={[1, null, null, 2]} spacing={8}>
            <Stack
              spacing={4}
              justify="center"
              align={["flex-start", null, null, "flex-end"]}
            >
              <Heading size="3xl">Hi I'm Tony!</Heading>
              <Stack
                wrap="wrap"
                alignContent={["flex-start", null, null, "flex-end"]}
                align={["flex-start", null, null, "flex-end"]}
              >
                <Text size="lg">
                  I'm a software engineering student at the University of
                  Waterloo.
                </Text>
                <Text size="lg">
                  I'm currently working at
                  <chakra.span fontWeight={700}> Applyboard </chakra.span>
                  on the Platform team.
                </Text>
                <Text size="lg">
                  Previously, I've worked at
                  <chakra.span fontWeight={700}> LCBOnext</chakra.span> and
                  <chakra.span fontWeight={700}> Condos.ca.</chakra.span>
                </Text>
              </Stack>
              <Box>
                <ButtonGroup>
                  <Button variant="outline">Resume</Button>
                  <Button>Github</Button>
                </ButtonGroup>
              </Box>
            </Stack>
            <Image
              borderRadius="xl"
              transition="all 0.25s"
              _hover={{ transform: "scale(1.01, 1.01)" }}
              boxSize={[80, null, null, "sm"]}
              src={Profile}
              alt={"Picture of Tony Zhao"}
              objectFit="cover"
            ></Image>
          </SimpleGrid>
        </Container>
      </Center>
    </ChakraProvider>
  );
}

export default App;
