import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { PacmanLoader } from "react-spinners";

export const Loader = ({ loading }) => {
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
      <PacmanLoader loading={loading} size={36} color={colors.grey[200]} />
    </Box>
  );
};
