import { Center, Container, Text, Title } from "@mantine/core";

export default function Custom404Page() {
  return (
    <Center className="full-width-height">
      <Container>
        <Title align="center" order={1}>
          404 - Page Not Found
        </Title>
        <Text align="center">
          Nothing here. Use the navigation panel on the left to continue
          browsing on our site.
        </Text>
      </Container>
    </Center>
  );
}
