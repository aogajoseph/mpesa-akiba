/**
=========================================================
* Akiba React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";

// react-router components
import { useLocation, Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";

// Akiba React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";

// Akiba React example components
import Breadcrumbs from "examples/Breadcrumbs";
import NotificationItem from "examples/Items/NotificationItem";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "examples/Navbars/DashboardNavbar/styles";

// Akiba React context
import {
  useMaterialUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";

function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);

  const [searchValue, setSearchValue] = useState(""); // Track the search input value

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  const handleClearSearch = () => setSearchValue(""); // Clear the search input

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem icon={<Icon>email</Icon>} title="Check new messages" />
      <NotificationItem icon={<Icon>podcasts</Icon>} title="Manage Podcast sessions" />
      <NotificationItem icon={<Icon>shopping_cart</Icon>} title="Payment successfully completed" />
    </Menu>
  );

  // Styles for the navbar icons
  const iconsStyle = ({ palette: { dark, white, text }, functions: { rgba } }) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;

      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }

      return colorValue;
    },
  });

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light, darkMode })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <MDBox display="flex" flexDirection="column" width="100%">
          <MDBox
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            mb={1}
          >
            <MDBox>
              <h1
                style={{
                  margin: 0,
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: darkMode ? "#fff" : "#000",
                }}
              >
                Family
              </h1>
            </MDBox>

            <MDBox>
              <MDInput
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                label=""
                placeholder="Search..."
                InputProps={{
                  endAdornment: searchValue ? (
                    <CloseIcon
                      onClick={handleClearSearch}
                      style={{
                        fontSize: "18px",
                        color: "#898989",
                        cursor: "pointer",
                      }}
                    />
                  ) : (
                    <SearchIcon
                      style={{
                        fontSize: "18px",
                        color: "#898989",
                        transform: "scaleX(-1)",
                      }}
                    />
                  ),
                  style: {
                    fontStyle: "normal",
                    color: darkMode ? "#fff" : "#000",
                    fontWeight: "normal",
                    borderRadius: "0px",
                    width: "100px",
                    paddingRight: "1px",
                  },
                  inputProps: {
                    style: {
                      paddingLeft: ".1px",
                      paddingBottom: "1px",
                      paddingTop: "6px",
                    },
                  },
                }}
              />
            </MDBox>
          </MDBox>

          <MDBox display="flex" justifyContent="space-between" alignItems="center" width="100%">
            <MDBox>
              <Breadcrumbs
                icon="home"
                title={route[route.length - 1]}
                route={route}
                light={light}
              />
            </MDBox>

            <MDBox display="flex" alignItems="center">
              <Link to="/authentication/sign-in/basic">
                <Tooltip title="Deposit Cash" arrow>
                  <IconButton sx={navbarIconButton} size="small" disableRipple>
                    <Icon sx={iconsStyle}>download</Icon>
                  </IconButton>
                </Tooltip>
              </Link>
              <Tooltip title="Withdraw Cash" arrow>
                <IconButton
                  size="small"
                  disableRipple
                  color="inherit"
                  sx={navbarIconButton}
                  onClick={handleConfiguratorOpen}
                >
                  <Icon sx={iconsStyle}>upload</Icon>
                </IconButton>
              </Tooltip>
              <Tooltip title="Current Members" arrow>
                <IconButton
                  size="small"
                  disableRipple
                  color="inherit"
                  sx={navbarIconButton}
                  aria-controls="notification-menu"
                  aria-haspopup="true"
                  variant="contained"
                  onClick={handleOpenMenu}
                >
                  <Icon sx={iconsStyle}>people</Icon>
                </IconButton>
              </Tooltip>
              <Tooltip title="Notifications" arrow>
                <IconButton
                  size="small"
                  disableRipple
                  color="inherit"
                  sx={navbarIconButton}
                  aria-controls="notification-menu"
                  aria-haspopup="true"
                  variant="contained"
                  onClick={handleOpenMenu}
                >
                  <Icon sx={iconsStyle}>notifications</Icon>
                </IconButton>
              </Tooltip>
              <Tooltip title="More" arrow>
                <IconButton
                  size="small"
                  disableRipple
                  color="inherit"
                  sx={navbarMobileMenu}
                  onClick={handleMiniSidenav}
                >
                  <Icon sx={iconsStyle} fontSize="medium">
                    {miniSidenav ? "menu" : "menu_open"}
                  </Icon>
                </IconButton>
              </Tooltip>
              {renderMenu()}
            </MDBox>
          </MDBox>
        </MDBox>
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
