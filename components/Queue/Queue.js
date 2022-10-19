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

function QueueElement({ element, data }) {
  const [opened, handlers] = useDisclosure();

  const { pos } = data;

  return (
    <Popover
      opened={opened}
      position="top"
      placement="center"
      withArrow
      gutter={10}
    >
      <Popover.Target>
        <Button
          style={{ border: "1px solid white" }}
          m={2}
          onMouseEnter={handlers.open}
          onMouseLeave={handlers.close}
        >
          {element}
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Stack>
          <Text>Index {pos}</Text>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}

export default function QueueDS({ queue, setQueue, setOperation }) {
  const theme = useMantineTheme();

  const [opened, handlers] = useDisclosure();

  const [enqueueForm, setEnqueueForm] = useState("");

  const enqueue = (val) => {
    setQueue((prev) => {
      if (val) {
        return [...prev, val];
      }
      return prev;
    });
    setOperation(() => "enqueue");
  };

  const dequeue = () => {
    setQueue((prev) => {
      const newArray = prev.filter((elem, idx) => {
        return idx !== 0;
      });
      return newArray;
    });
    setOperation(() => "dequeue");
  };

  return (
    <>
      <Title order={1} mt={-8}>
        Queue
      </Title>
      <Text mb="lg">
        Below is a visual representation of a queue. Click on the gap between
        the border and the elements to see the queue options.
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
              display: "inline-block",
            }}
            onMouseEnter={handlers.open}
          >
            <div>
              {queue && queue.length === 0 ? (
                <Text>Queue is empty</Text>
              ) : (
                <>
                  <span style={{ padding: "4px" }}>Start</span>
                  {queue.map((element, idx) => {
                    return (
                      <QueueElement
                        key={`queue-element-${idx}`}
                        element={element}
                        data={{ pos: idx }}
                      />
                    );
                  })}
                  <span style={{ padding: "4px" }}>End</span>
                </>
              )}
            </div>
          </div>
        </Popover.Target>
        <Popover.Dropdown>
          <Stack onMouseLeave={handlers.close}>
            <div>
              <Input
                type="number"
                placeholder="Enqueue Queue value"
                mb="xs"
                value={enqueueForm}
                onChange={(e) => {
                  setEnqueueForm(() => Number(e.target.value));
                }}
              ></Input>
              <Button
                variant="light"
                style={{ width: "100%" }}
                onClick={() => {
                  enqueue(enqueueForm);
                  setEnqueueForm(() => "");
                }}
              >
                Enqueue
              </Button>
            </div>
            <Divider />
            <Button variant="light" onClick={dequeue}>
              Dequeue
            </Button>
          </Stack>
        </Popover.Dropdown>
      </Popover>
    </>
  );
}
