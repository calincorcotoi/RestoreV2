import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Box
      maxWidth="xl"
      mx="auto"
      sx={{ px: { xs: 2, sm: 4 }, position: "relative" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
        sx={{ height: { xs: "60vh", sm: "70vh", md: "80vh" } }} // set responsive height
      >
        <img
          src="/images/hero1.jpg"
          alt="ski resort image"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "16px",
            zIndex: 0,
          }}
        />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          position="relative"
          sx={{
            p: { xs: 4, sm: 8 }, // responsive padding
            borderRadius: 4,
            backgroundColor: "rgba(0, 0, 0, 0.6)", // semi-opaque backdrop
          }}
        >
          <Typography
            variant="h1"
            color="white"
            fontWeight="bold"
            textAlign="center"
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, // scale font on xs
              my: { xs: 2, sm: 3 },
            }}
          >
            Welcome to Restore!
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/catalog"
            sx={{
              mt: { xs: 4, md: 8 }, // responsive margin-top
              backgroundImage: "linear-gradient(to right, #2563eb, #06b6d4)",
              fontWeight: "bold",
              color: "white",
              borderRadius: "16px",
              px: { xs: 4, md: 8 }, // responsive padding-x
              py: { xs: 1.5, md: 2 }, // responsive padding-y
              border: "2px solid transparent",
            }}
          >
            Go to shop
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
