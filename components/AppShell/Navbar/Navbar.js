import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { createStyles, Navbar } from "@mantine/core";
import {
  Stack2,
  Home2,
  ListNumbers,
  ArrowRightSquare,
} from "tabler-icons-react";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.25)
            : theme.colors[theme.primaryColor][0],
        color:
          theme.colorScheme === "dark"
            ? theme.white
            : theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          color:
            theme.colors[theme.primaryColor][
              theme.colorScheme === "dark" ? 5 : 7
            ],
        },
      },
    },
  };
});

export const dataStructures = [
  { link: "/", label: "Home", icon: Home2 },
  { link: "/stack", label: "Stack", icon: Stack2 },
  { link: "/queue", label: "Queue", icon: ListNumbers },
  { link: "/linked-list", label: "LinkedList", icon: ArrowRightSquare },
];

export function NavbarSimple() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Home");

  const router = useRouter();

  useEffect(() => {
    if (router && router.pathname) {
      const matchingRoutes = dataStructures.filter((obj) => {
        return obj.link === router.pathname;
      });
      if (matchingRoutes[0]) {
        setActive(() => matchingRoutes[0].label);
      } else {
        setActive(() => "");
      }
    }
  }, [router]);

  const links = dataStructures.map((item) => (
    <Link passHref href={item.link} key={item.label}>
      <a
        className={cx(classes.link, {
          [classes.linkActive]: item.label === active,
        })}
        onClick={() => {
          setActive(item.label);
        }}
      >
        <item.icon className={classes.linkIcon} />
        <span>{item.label}</span>
      </a>
    </Link>
  ));

  return (
    <Navbar width={{ 0: 180 }} p={4}>
      <Navbar.Section grow>{links}</Navbar.Section>
    </Navbar>
  );
}
