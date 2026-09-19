import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Added isDarkBg and darkLogoSrc props for Aqua Clear
const Navbar = ({ isDarkBg = false, darkLogoSrc = "/Images/aqua_clear_logo_white.svg" }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Dynamic colors & logo selection based on background
  const textColor = isDarkBg ? "#FFFFFF" : "#3E4354";
  const activeTextColor = isDarkBg ? "#38BDF8" : "#0A369D";
  const iconColor = isDarkBg ? "#FFFFFF" : "#161D46";
  const currentLogo = isDarkBg && darkLogoSrc ? darkLogoSrc : "/Images/aqua_clear_logo.svg";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/ServicePage" },
    { name: "Products", path: "#products" },
    { name: "Services", path: "/ServiceSuccess" },
    { name: "FAQ", path: "#faq" },
    { name: "Blog", path: "/Blogs" },
  ];

  const getIsActive = (linkName) => {
    if (linkName === "FAQ") {
      return location.hash === "#faq";
    }
    if (linkName === "Products") {
      return location.hash === "#products";
    }
    if (linkName === "About") {
      return location.pathname === "/ServicePage";
    }
    if (linkName === "Services") {
      return location.pathname === "/ServiceSuccess";
    }
    if (linkName === "Blog") {
      return location.pathname === "/Blogs";
    }
    if (linkName === "Home") {
      return (location.pathname === "/" || location.pathname === "") && !location.hash;
    }
    return false;
  };

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setMobileOpen(false);

    if (link.name === "Home") {
      if (location.pathname === "/" && !location.hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
    } else if (link.name === "About") {
      if (location.pathname === "/ServicePage") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/ServicePage");
      }
    } else if (link.name === "Services") {
      if (location.pathname === "/ServiceSuccess") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/ServiceSuccess");
      }
    } else if (link.name === "Products") {
      const prodElement = document.getElementById("products");
      if (prodElement) {
        prodElement.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "#products");
      } else {
        navigate("/#products");
      }
    } else if (link.name === "Blog") {
      if (location.pathname === "/Blogs") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/Blogs");
      }
    } else if (link.name === "FAQ") {
      const faqElement = document.getElementById("faq");
      if (faqElement) {
        faqElement.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "#faq");
      } else {
        navigate("/#faq");
      }
    }
  };

  const handleCtaClick = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    const ctaElement = document.getElementById("cta");
    if (ctaElement) {
      ctaElement.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#cta");
    }
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
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
        sx={{
          width: "159px",
          height: "30px",
          display: "block",
          flexShrink: 0,
          cursor: "pointer",
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
          const isActive = getIsActive(link.name);

          return (
            <Box
              key={link.name}
              component="a"
              href={link.path}
              onClick={(e) => handleLinkClick(e, link)}
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
                transition: "color 0.25s ease, transform 0.25s ease",

                "&:hover": {
                  color: "#F5C147",
                  transform: "scale(1.05)",
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
        onClick={handleCtaClick}
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
          transition: "background 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease",
          boxShadow: "none",

          "&:hover": {
            background: "#f3b82d",
            transform: "translateY(-2px) scale(1.04)",
            boxShadow: "0 6px 16px rgba(245, 193, 71, 0.3)",
          },

          "@media (max-width: 768px)": {
            display: "none",
          },
        }}
      >
        ORDER NOW
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
            const isActive = getIsActive(link.name);

            return (
              <Box
                key={link.name}
                component="a"
                href={link.path}
                onClick={(e) => handleLinkClick(e, link)}
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
                  transition: "color 0.25s ease, transform 0.25s ease",

                  "&:hover": {
                    color: "#F5C147",
                    transform: "translateX(4px)",
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
          onClick={handleCtaClick}
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
            transition: "background 0.3s ease, transform 0.3s ease",

            "&:hover": {
              background: "#f3b82d",
              transform: "scale(1.03)",
              boxShadow: "none",
            },
          }}
        >
          ORDER NOW
        </Button>
      </Drawer>
    </Box>
  );
};

export default Navbar;