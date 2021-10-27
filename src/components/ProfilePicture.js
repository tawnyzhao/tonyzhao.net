import { Image } from "@chakra-ui/react";
import Profile from "../assets/profile.webp";

const ProfilePicture = () => (
  <Image
    borderRadius="xl"
    transition="all 0.25s"
    _hover={{ transform: "scale(1.02, 1.02)" }}
    boxSize={[80, null, null, "sm"]}
    src={Profile}
    alt={"Picture of Tony Zhao"}
    objectFit="cover"
  />
);

export { ProfilePicture };
