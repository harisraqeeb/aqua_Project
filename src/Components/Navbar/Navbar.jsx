// import React, { useState } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//     const [activeLink, setActiveLink] = useState("Home");
//   return (
//       <div className="navbar-container">

//         {/* Logo */}
//         <a href="/" className="navbar-logo">
//        <img src="/Images/logo1.svg" alt=""/>
//         </a>

//         {/* Navigation */}
//      <nav className="navbar-menu">

//       <a
//         href="/"
//         className={activeLink === "Home" ? "nav_link nav-link_active" : "nav_link"}
//         onClick={() => setActiveLink("Home")}
//       >
//         Home
//       </a>

//       <a
//         href="#about"
//         className={activeLink === "About" ? "nav_link nav-link_active" : "nav_link"}
//         onClick={() => setActiveLink("About")}
//       >
//         About
//       </a>

//       <a
//         href="#services"
//         className={activeLink === "Services" ? "nav_link nav-link_active" : "nav_link"}
//         onClick={() => setActiveLink("Services")}
//       >
//         Services
//       </a>

//       <a
//         href="#faq"
//         className={activeLink === "FAQ" ? "nav_link nav-link_active" : "nav_link"}
//         onClick={() => setActiveLink("FAQ")}
//       >
//         FAQ
//       </a>

//       <a
//         href="#blog"
//         className={activeLink === "Blog" ? "nav_link nav-link_active" : "nav_link"}
//         onClick={() => setActiveLink("Blog")}
//       >
//         Blog
//       </a>

//     </nav>
  

//         {/* CTA */}
//         <a href="#cta" className="navbar-cta">
//           CTA here
//         </a>

//       </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

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
        boxShadow: "0px 2px 8px 0px #7C787833",
        background: "#FFFFFF",
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
          src="/Images/logo1.svg"
          alt=""
          sx={{
            width: "159px",
            height: "30px",
            display: "block",
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
                color: isActive ? "#161D46" : "#3E4354",
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
          color: "#161D46",
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