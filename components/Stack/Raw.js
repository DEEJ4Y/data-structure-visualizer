import { Center, Code, Title } from "@mantine/core";

export default function RawStackRepresentation({ stack }) {
  return (
    <>
      <Title order={2}>Raw representation</Title>
      <Center style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Code>
          [
          {stack.map((element, idx) => {
            if (idx === 0) {
              return element;
            }

            return `, ${element}`;
          })}
          ]
        </Code>
      </Center>
    </>
  );
}
