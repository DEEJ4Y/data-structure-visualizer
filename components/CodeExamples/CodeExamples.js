import { Prism } from "@mantine/prism";

export default function CodeExamples({ operation, languages }) {
  return (
    <Prism.Tabs>
      {languages?.map(({ langLabel, langKey, operations }, idx) => {
        console.log(idx);
        return (
          <Prism.Tab
            key={`${langLabel}-${idx}`}
            label={langLabel}
            language={langKey}
          >
            {operations[operation]}
          </Prism.Tab>
        );
      })}
    </Prism.Tabs>
  );
}
