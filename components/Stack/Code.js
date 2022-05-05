import stackCodeExamples from "../../data-structures/stack";
import CodeExamples from "../CodeExamples/CodeExamples";

export default function StackCodeExamples({ operation }) {
  return <CodeExamples operation={operation} languages={stackCodeExamples} />;
}
