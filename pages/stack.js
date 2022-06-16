import { useState } from "react";
import DataStructureGrid from "../components/DataStructureGrid/DataStructureGrid";
import StackCodeExamples from "../components/Stack/Code";
import RawStackRepresentation from "../components/Stack/Raw";
import StackDS from "../components/Stack/Stack";

export default function StackPage() {
  const [operation, setOperation] = useState("code");
  const [stack, setStack] = useState([4, 9, 7]);

  return (
    <DataStructureGrid
      dataStructure={
        <StackDS
          setOperation={setOperation}
          stack={stack}
          setStack={setStack}
        />
      }
      code={<StackCodeExamples operation={operation} />}
      raw={<RawStackRepresentation stack={stack} />}
    />
  );
}
