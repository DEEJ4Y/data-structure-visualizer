import { Paper, Grid } from "@mantine/core";

export default function DataStructureGrid({ code, dataStructure, raw }) {
  return (
    <Grid breakpoints={[{ 0: 256 }]}>
      <Grid.Col span={6}>
        {dataStructure ? <Paper p="lg">{dataStructure}</Paper> : ""}
      </Grid.Col>
      <Grid.Col span={6}>
        {raw ? (
          <Paper p="lg" style={{ height: "100%" }}>
            {raw}
          </Paper>
        ) : (
          ""
        )}
      </Grid.Col>
      <Grid.Col span={12}>{code ? <Paper p="lg">{code}</Paper> : ""}</Grid.Col>
    </Grid>
  );
}
