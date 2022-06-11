import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading, Spacer, VStack } from "@chakra-ui/layout";
import { FaGithub, FaGoogle, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Logo from "./img/stc.png";
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          <image src={Logo} />
        </Heading>

        <Spacer></Spacer>
        <IconButton
          icon={<FaLinkedin />}
          isRound="true"
          onClick={() =>
            window.open("https://www.linkedin.com/in/shravanatirtha/")
          }
        ></IconButton>

        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={() => window.open("https://github.com/shravanatirtha")}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaGoogle />}
          isRound="true"
          onClick={() => window.open("https://g.dev")}
        ></IconButton>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Header></Header>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
