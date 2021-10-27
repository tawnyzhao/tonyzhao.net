import { Stack, Text, chakra } from "@chakra-ui/react";

const Description = () => (
  <Stack
    textStyle="code"
    alignContent={["flex-start", null, null, "flex-end"]}
    align={["flex-start", null, null, "flex-end"]}
  >
    <Text>
      I'm a software engineering student at the University of Waterloo.
    </Text>
    <Text>
      I'm currently working as an intern at
      <chakra.span fontWeight={700}> ApplyBoard </chakra.span>
      on the Platform team.
    </Text>
    <Text>
      I'm also a project lead for
      <chakra.span fontWeight={700}> UW Blueprint</chakra.span>.
    </Text>
    <Text>
      Previously, I've worked at
      <chakra.span fontWeight={700}> LCBOnext</chakra.span> and
      <chakra.span fontWeight={700}> Condos.ca</chakra.span>.
    </Text>
  </Stack>
);

export { Description };
