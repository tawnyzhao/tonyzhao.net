import { Heading, keyframes } from "@chakra-ui/react";

const blink = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`;

const Title = ({ children }) => (
  <Heading
    fontFamily={`"Fira Code"`}
    size="xl"
    _after={{
      pl: 1,
      content: `"█"`,
      animation: `${blink} .9s infinite ease;`,
    }}
  >
    {children}
  </Heading>
);

export { Title };
