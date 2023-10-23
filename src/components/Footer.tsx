"use client";

import theme from "@/theme/theme";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import Link from "next/link";

const Item = styled("a")(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   paddingLeft: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Footer = () => {
  return (
    <Box
      component={"footer"}
      sx={{
        backgroundColor:
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        padding: theme.spacing(4, 2, 0, 2),
        marginTop: 2,
        // position: "sticky",
        bottom: 0,
        width: "100%",
      }}
    >
      <Grid container item textAlign="center">
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              // textAlign: "center",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" my={2}>
            <Item href="/footer">Item 1</Item>
            <Item href="/footer">Item 2</Item>
            <Item href="/footer">Item 3</Item>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ backgroundColor: "blue" }}></Grid>
        <Grid item xs={12} my={1}>
          <Typography variant="body2" color="text.secondary" align="center" my={1}>
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
