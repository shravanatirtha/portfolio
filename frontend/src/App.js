import { Button, Heading, Stack, Text } from "@chakra-ui/react";

function App() {
  return (
    <Stack spacing={4} bg="white" p={8} borderRadius="lg">
    <Heading as="h1" size="md" color="brand.900">
      Learning Chakra UI
    </Heading>
    <Text as="p" fontSize="md" color="brand.500">
      Your first Chakra components:
    </Text>
    <Button variantColor="brand" isFullWidth>
      Click me
    </Button>
  </Stack>
  );
}

export default App;
