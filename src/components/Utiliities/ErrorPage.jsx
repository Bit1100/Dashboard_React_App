import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

export const ErrorPage = ({ error }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      m="20px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <Typography variant="h2" color={colors.grey[200]}>
        {error}
      </Typography>
      <Button
        variant="contained"
        size="medium"
        sx={{
          color: colors.grey[200],
          backgroundColor: colors.blueAccent[400],
        }}
      >
        Go to Dashboard
      </Button>
    </Box>
  );
};
