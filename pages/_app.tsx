import "../styles/global.scss";
import * as React from "react";
import { AppProvider } from "@toolpad/core/nextjs";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { Navigation } from "@toolpad/core/AppProvider";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import LinearProgress from "@mui/material/LinearProgress";
import { createTheme } from "@mui/material";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement<any>) => React.ReactNode;
  requireAuth?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Navigation",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "projects",
    title: "Projects",
    icon: <ShoppingCartIcon />,
  },
];

const BRANDING = {
  title: "PRJMGT",
};

const AUTHENTICATION = {
  signIn,
  signOut,
  error: "/auth/error", // Error code passed in query string as ?error=
  verifyRequest: "/auth/verify-request", // (used for check email message)
  newUser: "/auth/sign-up", // New users will be directed here on first sign in (leave the property out if not of interest)
};

function getDefaultLayout(page: React.ReactElement<any>) {
  return (
    <main className="">
      <DashboardLayout>{page}</DashboardLayout>
    </main>
  );
}

function RequireAuth({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const router = useRouter();
  console.log(status, "Status");
  if (status === "loading") {
    return <LinearProgress />;
  }

  if (status === "unauthenticated") {
    router.push("/auth/sign-in");
  }

  return children;
}

function AppLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AppProvider
        theme={undefined}
        navigation={NAVIGATION}
        branding={BRANDING}
        session={session}
        authentication={AUTHENTICATION}
      >
        <div className="relative h-screen w-full grid-background bg-zinc-950 overflow-scroll">
          {children}
        </div>
      </AppProvider>
    </React.Fragment>
  );
}

export default function App(props: AppPropsWithLayout) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;

  const getLayout = Component.getLayout ?? getDefaultLayout;
  const requireAuth = Component.requireAuth ?? true;

  let pageContent = getLayout(<Component {...pageProps} />);
  if (requireAuth) {
    pageContent = <RequireAuth>{pageContent}</RequireAuth>;
  }
  pageContent = <AppLayout>{pageContent}</AppLayout>;

  return (
    <AppCacheProvider {...props}>
      <SessionProvider session={session}>{pageContent}</SessionProvider>
    </AppCacheProvider>
  );
}
