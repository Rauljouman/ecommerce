import React from "react";
import { Box, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "400px",
        backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/30/Events/2024/LMD24/Homepage/DesktopSingleImageCards/DO_Homepage_DesktopSingleImageCard_ShopLastMinute_758x608._SY608_CB540770731_.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        ¡Explora nuestras ofertas exclusivas!
      </Typography>
    </Box>
  );
};

export default Banner;
