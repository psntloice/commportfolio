import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import Image from 'next/image';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
    background: `linear-gradient(180deg, ${
      theme.palette.mode === "light" ? "#abebc9" : "#233823"
    }, ${
      theme.palette.mode === "light" ? "#FFFFFF" : "#090E10"
    } 30%,  ${theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.5)" : "#090E10"} 50%)`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      })}
    >
    
      <Container
        sx={{

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
         
          justifyContent: "center", // Center content vertically
          height: "100%", // Ensure the content occupies the entire Box height
        }}
      >
        <Stack spacing={3} useFlexGap sx={{ width: { xs: "100%", sm: "90%" } }}>
          <Typography
            component="h1"
            variant="h1"
            color="text.secondary"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              "& > *": {
                wordSpacing: "0px",
              },
            }}
          >
            Welcome to &nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
QREVV &nbsp;
            </Typography>
            softwares
          </Typography>
          <br />
          <br />
          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{
              pt: 1,
              fontSize: { xs: "16px", sm: "20px" },
              lineHeight: { xs: "1.5", sm: "1.7" }, // Adjust line height for different screen sizes
              fontFamily: "Brandon Grotesque, sans-serif", // Change the font family
              "& > *": {
                wordSpacing: "2px",
              },
            }}
          >
            <Typography
              component="h3"
              variant="h3"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignSelf: "center",
                textAlign: "center",
                "& > *": {
                  wordSpacing: "0.5px",
                },
              }}
            >
              Step into a world where digital craftsmanship meets timeless
              elegance.&nbsp;
            </Typography>
            <br />
            <br />
            <br />
            <Divider />
            <Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    gap: "20px", // Adjust the gap between the image and text
    mt: { xs: 8, sm: 10 },
    
  }}
>
  <Box
    sx={{
      width: "25%",
      marginTop: "5rem",
      maxHeight: "27rem", // Adjust the maximum height to cover desired number of lines
      height: "auto", // Adjust height to auto
      background: `url("/images/avatr2.png") center/contain no-repeat`,
 borderRadius: { xs: "50%", sm: "90px" },
       outline: "6px solid",
      outlineColor: (theme) =>
        theme.palette.mode === "light" ? alpha("#91bda6", 0.5) : alpha("#6ade87", 0.1),
      boxShadow: (theme) =>
        theme.palette.mode === "light"
          ? `0 0 12px 8px ${alpha("#bce8ce", 0.2)}`
          : `0 0 24px 12px ${alpha("#238233", 0.2)}`,
       '@media (max-width:600px)': {
      width: "50%",
      margin: "0 auto", // Center horizontally
      display: "flex",
      justifyContent: "left", // Center horizontally
      alignItems: "center", // Center vertically
      minHeight: "15rem"
    },
    }}
  />
  
  <Typography
  variant="body1"
  textAlign="center" // Adjusted to "left" from "center"
  color="text.secondary"
  sx={{
    pt: 1,
    fontSize: { xs: "16px", sm: "20px" },
    lineHeight: { xs: "1.5", sm: "1.7" },
    fontFamily: "Brandon Grotesque, sans-serif",
    width: "calc(70% - 20px)", // Adjust width to fill remaining space after accounting for gap
    wordWrap: "break-word", // Ensure text wraps around the image
    '@media (max-width:600px)': {
      width: "90vw",
      margin: "0 0 1px 1px", // Center horizontally
      justifyContent: "centre", // Center horizontally
      alignItems: "center", // Center vertically
    },
  }}
>
Loice Kamau here 😊, a dream to reality curator. Between design and
            functionality, creativity and an unwavering commitment to perfection, I transform concepts into 
            a happy client result. Explore my portfolio to unveil masterpieces.
If  you are inspired by what you see, I invite you to embark a journey
            of creativity and collaboration with me. From simple elegance to intricate design let us craft digital
            experiences that generally make us satisfied.  </Typography>
</Box>
            
          
          </Typography>
                 </Stack>
        {/* <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: "center",
            height: { xs: 200, sm: 700 },
            width: "100%",
            backgroundImage:
              theme.palette.mode === "light"
                ? 'url("/images/avatr1.png")'
                : 'url("/images/avatr1.png")',
            backgroundSize: "cover",
            borderRadius: "10px",
            outline: "1px solid",
            outlineColor:
              theme.palette.mode === "light"
                ? alpha("#BFCCD9", 0.5)
                : alpha("#9CCCFC", 0.1),
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
                : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
          })}
        /> */}
      </Container>
      <div style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "10%", // Cover the bottom half of the Box
    background: "rgba(0, 0, 0, 0)", // Transparent overlay
  }}>
      </div>
    </Box>
  );
}
