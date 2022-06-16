import { useState } from "react";
import CodeExamples from "../components/CodeExamples/CodeExamples";
import DataStructureGrid from "../components/DataStructureGrid/DataStructureGrid";
import QueueDS from "../components/Queue/Queue";
import RawStackRepresentation from "../components/Stack/Raw";
import queueCodeExamples from "../data-structures/queue";

export default function QueuePage() {
  const [operation, setOperation] = useState("code");
  const [queue, setQueue] = useState([4, 9, 7]);

  return (
    <DataStructureGrid
      dataStructure={
        <QueueDS
          queue={queue}
          setQueue={setQueue}
          setOperation={setOperation}
        />
      }
      raw={<RawStackRepresentation stack={queue} />}
      code={
        <CodeExamples operation={operation} languages={queueCodeExamples} />
      }
    />
  );
}
