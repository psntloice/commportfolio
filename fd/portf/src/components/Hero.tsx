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
      theme.palette.mode === "light" ? "#abebc9" : "#228b3a"
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
QWERTY &nbsp;
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
    alignItems: { xs: "center", sm: " " },
    
    gap: "20px", // Adjust the gap between the image and text
    mt: { xs: 8, sm: 10 },
    
  }}
>
  <Box
    sx={{
      width: { xs: "auto", sm: "25%" }, // Full width on small screens, 25% on larger screens
      maxWidth: { xs: "50%", sm: "none" }, // Remove maximum width on small screens
      minWidth: { xs: "50%", sm: "none" },
      marginTop: { xs: "2rem", sm: "5rem" }, // Adjusted marginTop for better alignment
      minHeight: { xs: "10rem", sm: "27rem" },
      // width: "25%",
      // marginTop: "5rem",
      height: { xs: "auto", sm: "auto" }, // Adjust height to auto
      // background: `url("/images/avatr2.png") center/contain no-repeat`,
      background: `url("/images/avatr2.png") cover no-repeat`,
      backgroundSize: "cover",
      borderRadius: { xs: "30px", sm: "90px" },
      outline: { xs: "3px solid", sm: "6px solid" } ,
      outlineColor: (theme) =>
        theme.palette.mode === "light" ? alpha("#91bda6", 0.5) : alpha("#6ade87", 0.1),
      boxShadow: (theme) =>
        theme.palette.mode === "light"
          ? `0 0 12px 8px ${alpha("#bce8ce", 0.2)}`
          : `0 0 24px 12px ${alpha("#238233", 0.2)}`,
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
  }}
>
I am Loice Kamau, a curator of digital experiences, dedicated
            to crafting bespoke websites and applications that embody
            sophistication and grace. In the delicate dance between design and
            functionality, I strive to create immersive digital landscapes that
            captivate the senses and inspire the soul. With a brushstroke of
            creativity and a meticulous attention to detail, I transform visions
            into reality, bringing brands to life in the digital realm. Within
            these digital halls, you will discover a collection of my finest
            creations each one a testament to the artistry and craftsmanship
            that defines my work. From minimalist masterpieces to intricately
            of form and function, elegance and innovation. But my artistry
            extends beyond pixels and lines of code. It is rooted in the bonds of
            trust and collaboration forged with my clients. I listen intently to
            their aspirations, infuse their essence into every project, and
            deliver experiences that resonate with authenticity and refinement.
            So, take a moment to wander through these digital galleries, where
            each click unveils a new masterpiece waiting to be explored. If
            you are inspired by what you see, I invite you to embark on a journey
            of creativity and collaboration with me. Thank you for gracing my
            digital atelier with your presence. Together, let uss craft digital
            experiences that transcend the ordinary and embrace the
            extraordinary.  </Typography>
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
