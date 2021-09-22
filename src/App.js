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
  LinkBox,
  LinkOverlay,
  SlideFade,
  keyframes,
} from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import { VscGithubInverted } from "react-icons/vsc";
import Profile from "./assets/profile.jpg";
import React, { useState, useEffect } from "react";
import theme from "./theme";
import "@fontsource/press-start-2p";
import "@fontsource/fira-code";
const blink = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`;
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center minH="100vh">
        <Container
          maxW={["container.sm", null, null, "container.xl"]}
          py={4}
          overflow="auto"
        >
          <Grid templateColumns={["1fr", null, null, "3fr 2fr"]} gap={8}>
            <Stack
              spacing={8}
              justify="center"
              align={["flex-start", null, null, "flex-end"]}
            >
              <Heading
                fontFamily={`"Fira Code"`}
                size="xl"
                _after={{
                  pl: 1,
                  content: `"█"`,
                  animation: `${blink} .9s infinite ease;`,
                }}
              >
                Hi I'm Tony
              </Heading>
              <Stack
                textStyle="code"
                alignContent={["flex-start", null, null, "flex-end"]}
                align={["flex-start", null, null, "flex-end"]}
              >
                <Text size="md" ml="auto">
                  I'm a software engineering student at the University of
                  Waterloo.
                </Text>
                <Text size="md">
                  I'm currently working as an intern at
                  <chakra.span fontWeight={700}> Applyboard </chakra.span>
                  on the Platform team.
                </Text>
                <Text size="md">
                  Previously, I've worked at
                  <chakra.span fontWeight={700}> LCBOnext</chakra.span> and
                  <chakra.span fontWeight={700}> Condos.ca.</chakra.span>
                </Text>
              </Stack>
              <Box>
                <ButtonGroup>
                  <LinkBox>
                    <LinkOverlay href="/resume.pdf">
                      <Button rightIcon={<LinkIcon />} variant="outline">
                        Resume
                      </Button>
                    </LinkOverlay>
                  </LinkBox>
                  <LinkBox>
                    <LinkOverlay href="https://github.com/tawnyzhao">
                      <Button rightIcon={<VscGithubInverted />}>GitHub</Button>
                    </LinkOverlay>
                  </LinkBox>
                </ButtonGroup>
              </Box>
              <Text textStyle="pixel" fontSize={10}>
                blog coming soon...
              </Text>
            </Stack>
            <Image
              borderRadius="xl"
              transition="all 0.25s"
              _hover={{ transform: "scale(1.02, 1.02)" }}
              boxSize={[80, null, null, "sm"]}
              src={Profile}
              alt={"Picture of Tony Zhao"}
              objectFit="cover"
            ></Image>
          </Grid>
        </Container>
      </Center>
    </ChakraProvider>
  );
}

export default App;
