import { Link } from "react-router-dom";
import { Menu as MenuIcon, Adb as AdbIcon } from "@mui/icons-material";
import { useState } from "react";
import "../style/navbar.css";
import {
  Menu,
  Typography,
  Button,
  MenuItem,
  Container,
  IconButton,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../shared/GlobalAppNameContext";

const pages = ["Home", "Movies", "Shows", "About"];

// eslint-disable-next-line react/prop-types
function Navbar({ currentPage }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  // takes the official Application-name and set that as a logo
  const { appName } = useContext(AppContext);
  //---------------------------------------------------
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      className="backgroundColor"
      sx={{
        backgroundColor: "transparent",

        boxShadow: "0 0px 0px 0px;",
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 7,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".rem",
              textDecoration: "none",
            }}
          >
            {/*--------------- application Name - big-screen ---------------*/}

            <Link className="appName" to="/">
              {appName}
            </Link>
          </Typography>

          <Box
            sx={{
              flexGrow: 2,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/*------ URL Direction - Small-Screen ------- */}
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      className={`urlLink ${
                        // at current-page the text will stay red, else text will appear to white
                        currentPage === page ? "activeLink" : "urlLinkSmallTab"
                      }`}
                      to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="div"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {/*--------------- application Name - small-screen ---------------*/}
            <Link className="appName" to="/">
              {appName}
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/*------ URL Direction -  Big-Screen ------- */}
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  className={`urlLink ${
                    // at current-page the text will stay red, else text will appear to white
                    currentPage === page ? "activeLink" : "urlLink"
                  }`}
                  to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
