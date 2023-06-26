import { memo, type FC } from "react";
// components
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
// types
import type { ContainerProps } from "./block-wrapper.interface";
// styles
import {
  Wrapper,
  PaperWrapper,
  LoaderWrapper,
  ContentContainer,
} from "./block-wrapper.styled";

const BlockWrapper: FC<ContainerProps> = ({
  size = "md",
  title,
  children,
  isLoading,
  isDisableGutters = false,
  ...props
}) => {
  return (
    <Wrapper>
      <Stack gap={4}>
        <Typography variant="h4" component="h1">
          {title}
        </Typography>
        <ContentContainer
          maxWidth={size}
          component="section"
          disableGutters={isDisableGutters}
        >
          <PaperWrapper {...props} elevation={5}>
            {isLoading ? (
              <LoaderWrapper>
                <CircularProgress />
              </LoaderWrapper>
            ) : (
              children
            )}
          </PaperWrapper>
        </ContentContainer>
      </Stack>
    </Wrapper>
  );
};

export default memo(BlockWrapper);
