import { Prism } from "@mantine/prism";

export default function CodeExamples({ operation, languages }) {
  return (
    <Prism.Tabs defaultValue={languages[0].langKey}>
      <Prism.TabsList>
        {languages.map(({ langLabel, langKey }, idx) => (
          <Prism.Tab key={`tab-${langLabel}-${idx}`} value={langKey}>
            {langLabel}
          </Prism.Tab>
        ))}
      </Prism.TabsList>
      {languages.map(({ langLabel, langKey, operations }, idx) => (
        <Prism.Panel
          key={`panel-${langLabel}-${idx}`}
          language={langKey}
          value={langKey}
        >
          {operations[operation]}
        </Prism.Panel>
      ))}
    </Prism.Tabs>
  );
}
