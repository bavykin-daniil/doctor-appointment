// pages
import HomePage from "@root/pages/index.page";
// providers
import { LocalizationProvider } from "@mui/x-date-pickers";
import { QueryClient, QueryClientProvider } from "react-query";
// adapters
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// types
import type { FC } from "react";

const queryClient = new QueryClient();

const Root: FC = () => (
  <QueryClientProvider client={queryClient}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <HomePage />
    </LocalizationProvider>
  </QueryClientProvider>
);
export default Root;
