import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import AppShell from "../components/AppShell/AppShell";
import "../styles/globals.css";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Data Structure Visualizer</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
        }}
      >
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </>
  );
}
