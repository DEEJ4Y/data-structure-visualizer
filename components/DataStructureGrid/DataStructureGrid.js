import { Paper, SimpleGrid } from "@mantine/core";

export default function DataStructureGrid({ dataStructure, code }) {
  return (
    <SimpleGrid breakpoints={[{ 0: 256 }]}>
      {dataStructure ? <Paper p="xl">{dataStructure}</Paper> : ""}
      {code ? <Paper p="xl">{code}</Paper> : ""}
    </SimpleGrid>
  );
}
