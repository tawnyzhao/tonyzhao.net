import { Box, ChakraProvider, Stack, Text } from "@chakra-ui/react";
import "@fontsource/fira-code";
import "@fontsource/press-start-2p";
import React from "react";
import {
  ContactButtons,
  ProfilePicture,
  Title,
  Description,
} from "./components";
import { Home } from "./layouts";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home>
        <Stack
          spacing={8}
          justify="center"
          align={["flex-start", null, null, "flex-end"]}
        >
          <Title>Hi I'm Tony</Title>
          <Description />
          <ContactButtons />
          <BlogLink />
        </Stack>
        <ProfilePicture />
      </Home>
    </ChakraProvider>
  );
}

export default App;
