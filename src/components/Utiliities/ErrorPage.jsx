import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";

export const ErrorPage = ({ error }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  return (
    <Box
      m="20px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="80vh"
    >
      <Typography variant="h2" color={colors.grey[200]}>
        {error ? error : "ERROR 404 - Contents on this Route Not Found"}
      </Typography>
      <Button
        variant="contained"
        size="medium"
        onClick={() => navigate("/")}
        sx={{
          color: colors.grey[800],
          margin: "20px",
          padding: "10px",
          fontWeight: "bold",
          fontSize: "20px",
          backgroundColor: colors.blueAccent[400],
          "&:hover": {
            color: colors.grey[900],
            backgroundColor: colors.greenAccent[400],
          },
        }}
      >
        Go to Dashboard
      </Button>
    </Box>
  );
};
