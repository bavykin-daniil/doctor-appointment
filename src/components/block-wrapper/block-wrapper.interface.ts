// types
import type { ReactNode } from "react";
import type { Breakpoint } from "@mui/system";
import type { PaperProps } from "@mui/material/Paper";

export interface ContainerProps extends Omit<PaperProps, "title"> {
  size?: Breakpoint;
  title?: string | null;
  children: ReactNode;
  isLoading: boolean;
  isDisableGutters?: boolean;
}
