import { Button, ButtonGroup, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import { VscGithubInverted } from "react-icons/vsc";
import { GrLinkedin } from "react-icons/gr";

const ContactButtons = () => (
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
    <LinkBox>
      <LinkOverlay href="https://linkedin.com/in/tonyzhao2001">
        <Button colorScheme="blue" rightIcon={<GrLinkedin />}>
          LinkedIn
        </Button>
      </LinkOverlay>
    </LinkBox>
  </ButtonGroup>
);

export { ContactButtons };
