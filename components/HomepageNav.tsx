import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { AppProvider, Navigation, Router } from "@toolpad/core/AppProvider";
import {
  PageContainer,
  PageHeader,
  PageHeaderToolbar,
} from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PrintIcon from "@mui/icons-material/Print";
import DownloadIcon from "@mui/icons-material/Download";

const NAVIGATION: Navigation = [
  {
    segment: "orders",
    title: "Orders",
    icon: <DashboardIcon />,
  },
];

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled("div")<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

function CustomPageToolbar() {
  return (
    
  );
}

function CustomPageHeader() {
  return <PageHeader slots={{ toolbar: CustomPageToolbar }} />;
}

export default function PageContainerBasic(props: any) {
  
  return (<PageHeaderToolbar>
    <Stack direction="row" spacing={1} alignItems="center">
      <Button
        variant="outlined"
        size="small"
        startIcon={<DownloadIcon fontSize="inherit" />}
      >
        Download
      </Button>
      <Button
        variant="outlined"
        size="small"
        startIcon={<PrintIcon fontSize="inherit" />}
      >
        Print
      </Button>
    </Stack>
  </PageHeaderToolbar>)
}
