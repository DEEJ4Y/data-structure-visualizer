import { Center, Container, Stack, Text, Title } from "@mantine/core";

export default function Home() {
  return (
    <Center className="full-width-height">
      <Container>
        <Stack>
          <Title align="center">Data Structure Visualizer</Title>
          <Text align="center" size="xl">
            Visually understand data structures.
          </Text>
          <Text align="center">
            Use the navigation panel on the left to see our different data
            structures.
          </Text>
        </Stack>
      </Container>
    </Center>
  );
}
