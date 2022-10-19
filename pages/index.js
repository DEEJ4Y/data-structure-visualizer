import {
  Center,
  Container,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Link from "next/link";
import { getDataStructures } from "../components/AppShell/Navbar/Navbar";

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
        <Grid mt="xl">
          {getDataStructures().map(({ link, label, ...rest }, idx) => {
            return (
              <Grid.Col key={`ds-card-${idx}`} md={6} sm={12}>
                <Link passHref href={link}>
                  <a>
                    <Paper className="clickable-paper">
                      <Group position="center">
                        <rest.icon />
                        <Text size="lg" weight="bold" px="lg" py="xs">
                          {label}
                        </Text>
                      </Group>
                    </Paper>
                  </a>
                </Link>
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>
    </Center>
  );
}
