import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  textStyles: {
    code: {
      fontFamily: `"Fira Code", source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;`,
    },
    pixel: {
      fontFamily: `"Press Start 2P"`,
    },
  },
});
export default theme;
