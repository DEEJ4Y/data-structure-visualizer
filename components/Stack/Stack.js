import {
  Button,
  Divider,
  Input,
  Popover,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

function StackElement({ element, data }) {
  const [opened, handlers] = useDisclosure();

  const { pos } = data;

  return (
    <Popover
      opened={opened}
      position="left"
      placement="center"
      withArrow
      gutter={10}
    >
      <Popover.Target>
        <Button
          style={{ width: 256, border: "1px solid white" }}
          radius={0}
          onMouseEnter={handlers.open}
          onMouseLeave={handlers.close}
        >
          {element}
        </Button>
      </Popover.Target>

      <Popover.Dropdown>
        <Stack>
          <Text>Index {pos - 1}</Text>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}

export default function StackDS({ setOperation, stack, setStack }) {
  const theme = useMantineTheme();

  const [opened, handlers] = useDisclosure();

  const [pushForm, setPushForm] = useState("");

  const push = (val) => {
    setStack((prev) => {
      if (val) {
        return [val, ...prev];
      }
      return prev;
    });
    setOperation(() => "push");
  };

  const pop = () => {
    setStack((prev) => {
      const newArray = prev.filter((elem, idx) => {
        return idx !== 0;
      });
      return newArray;
    });
    setOperation(() => "pop");
  };

  const empty = () => {
    setStack(() => []);
    setOperation(() => "empty");
  };

  return (
    <>
      <Title order={1} mt={-8}>
        Stack
      </Title>
      <Text mb="lg">
        Below is a visual representation of a stack. Click on the gap between
        the border and the elements to see the stack options.
      </Text>
      <Popover
        opened={opened}
        position="right"
        placement="start"
        withArrow
        gutter={10}
        closeOnClickOutside={true}
      >
        <Popover.Target>
          <div
            style={{
              padding: "2rem",
              border: `1px solid ${theme.colors.blue[9]}`,
              width: 320,
            }}
            onMouseEnter={handlers.open}
          >
            <Stack spacing={0}>
              {stack && stack.length === 0 ? (
                <Text>Stack is empty</Text>
              ) : (
                stack.map((element, idx) => {
                  return (
                    <StackElement
                      key={`stack-element-${idx}`}
                      element={element}
                      data={{ pos: stack.length - idx }}
                    />
                  );
                })
              )}
            </Stack>
          </div>
        </Popover.Target>

        <Popover.Dropdown>
          {" "}
          <Stack onMouseLeave={handlers.close}>
            <div>
              <Input
                type="number"
                placeholder="Push Stack value"
                mb="xs"
                value={pushForm}
                onChange={(e) => {
                  setPushForm(() => Number(e.target.value));
                }}
              ></Input>
              <Button
                variant="light"
                style={{ width: "100%" }}
                onClick={() => {
                  push(pushForm);
                  setPushForm(() => "");
                }}
              >
                Push
              </Button>
            </div>
            <Divider />
            <Button variant="light" onClick={pop}>
              Pop
            </Button>
            <Button variant="light" onClick={empty}>
              Empty
            </Button>
          </Stack>
        </Popover.Dropdown>
      </Popover>
    </>
  );
}
