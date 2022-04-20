import { Title } from "@mantine/core";
import DataStructureGrid from "../components/DataStructureGrid/DataStructureGrid";
import StackDS from "../components/Stack/Stack";

export default function StackPage() {
  return <DataStructureGrid dataStructure={<StackDS />} />;
}
