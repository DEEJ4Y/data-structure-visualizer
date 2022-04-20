import { AppShell as MantineAppShell, Navbar, Header } from "@mantine/core";
import { NavbarSimple } from "./Navbar/Navbar";

export default function AppShell({ children }) {
  return (
    <MantineAppShell
      padding="md"
      navbar={<NavbarSimple />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </MantineAppShell>
  );
}
