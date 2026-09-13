import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Added isDarkBg and darkLogoSrc props
const Navbar = ({ isDarkBg = false, darkLogoSrc = "/Images/logo2.svg" }) => {
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Dynamic colors & logo selection based on background
  const textColor = isDarkBg ? "#FFFFFF" : "#3E4354";
  const activeTextColor = isDarkBg ? "#F5C147" : "#161D46";
  const iconColor = isDarkBg ? "#FFFFFF" : "#161D46";
  const currentLogo = isDarkBg && darkLogoSrc ? darkLogoSrc : "/Images/logo1.svg";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "#blog" },
  ];

  const handleLinkClick = (name) => {
    setActiveLink(name);
    setMobileOpen(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: "24px 120px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: isDarkBg ? "none" : "0px 2px 8px 0px #7C787833",
        boxSizing: "border-box",

        "@media (max-width: 1100px)": {
          padding: "24px 60px",
        },

        "@media (max-width: 768px)": {
          padding: "18px 30px",
        },

        "@media (max-width: 480px)": {
          padding: "18px 20px",
        },
      }}
    >
      {/* LOGO */}
      <Box
        component="a"
        href="/"
        sx={{
          width: "159px",
          height: "30px",
          display: "block",
          flexShrink: 0,
        }}
      >
        <Box
          component="img"
          src={currentLogo}
          alt="Logo"
          sx={{
            width: "159px",
            height: "30px",
            display: "block",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* DESKTOP NAVIGATION */}
      <Box
        component="nav"
        sx={{
          display: "flex",
          alignItems: "center",
          maxWidth: "402px",

          "@media (max-width: 768px)": {
            display: "none",
          },
        }}
      >
        {navLinks.map((link) => {
          const isActive = activeLink === link.name;

          return (
            <Box
              key={link.name}
              component="a"
              href={link.href}
              onClick={() => handleLinkClick(link.name)}
              sx={{
                padding: "8px 18px",
                color: isActive ? activeTextColor : textColor,
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "26px",
                letterSpacing: "0px",
                textAlign: "center",
                cursor: "pointer",
                textDecoration: "none",
                position: "relative",
                whiteSpace: "nowrap",

                "&:hover": {
                  color: "#F5C147",
                },

                ...(isActive && {
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "25px",
                    height: "2px",
                    background: "#F5C147",
                  },
                }),
              }}
            >
              {link.name}
            </Box>
          );
        })}
      </Box>

      {/* DESKTOP CTA */}
      <Button
        component="a"
        href="#cta"
        sx={{
          width: "144px",
          height: "54px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F5C147",
          color: "#161D46",
          borderRadius: "30px",
          textDecoration: "none",
          fontFamily: "Inter",
          fontWeight: 500,
          fontSize: "18px",
          lineHeight: "30px",
          letterSpacing: "0%",
          textAlign: "center",
          textTransform: "none",
          cursor: "pointer",
          transition: "background 0.2s ease, transform 0.2s ease",
          boxShadow: "none",

          "&:hover": {
            background: "#f3b82d",
            transform: "translateY(-1px)",
            boxShadow: "none",
          },

          "@media (max-width: 768px)": {
            display: "none",
          },
        }}
      >
        CTA here
      </Button>

      {/* MOBILE MENU BUTTON */}
      <IconButton
        onClick={() => setMobileOpen(true)}
        sx={{
          display: "none",
          color: iconColor,
          padding: "6px",

          "@media (max-width: 768px)": {
            display: "flex",
          },
        }}
      >
        <MenuIcon fontSize="medium" />
      </IconButton>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: "280px",
            padding: "24px",
            boxSizing: "border-box",
          },
        }}
      >
        {/* CLOSE BUTTON */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        >
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{
              color: "#161D46",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* MOBILE NAVIGATION */}
        <Box
          component="nav"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;

            return (
              <Box
                key={link.name}
                component="a"
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                sx={{
                  padding: "12px 18px",
                  color: isActive ? "#161D46" : "#3E4354",
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "26px",
                  textAlign: "left",
                  cursor: "pointer",
                  textDecoration: "none",
                  position: "relative",

                  "&:hover": {
                    color: "#F5C147",
                  },

                  ...(isActive && {
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: "18px",
                      bottom: "4px",
                      width: "25px",
                      height: "2px",
                      background: "#F5C147",
                    },
                  }),
                }}
              >
                {link.name}
              </Box>
            );
          })}
        </Box>

        {/* MOBILE CTA */}
        <Button
          component="a"
          href="#cta"
          onClick={() => setMobileOpen(false)}
          sx={{
            width: "144px",
            height: "54px",
            margin: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#F5C147",
            color: "#161D46",
            borderRadius: "30px",
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "30px",
            textTransform: "none",
            boxShadow: "none",

            "&:hover": {
              background: "#f3b82d",
              boxShadow: "none",
            },
          }}
        >
          CTA here
        </Button>
      </Drawer>
    </Box>
  );
};

export default Navbar;