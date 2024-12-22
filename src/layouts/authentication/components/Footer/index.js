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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Akiba React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Akiba React base styles
import typography from "assets/theme/base/typography";

function Footer({ light }) {
  const { size } = typography;

  return (
    <MDBox position="relative" width="100%" bottom={0} top={40} py={1}>
      <Container>
        <MDBox
          width="100%"
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
          px={1.5}
        >
          <MDBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            color={light ? "white" : "text"}
            fontSize={size.xs}
          >
            &copy; {new Date().getFullYear()}
            <MDBox fontSize={size.xs} color={light ? "white" : "dark"} mb={-0.5} mx={0.25}></MDBox>
            <Link href="https://www.creative-tim.com/" target="_blank">
              <MDTypography variant="button" fontWeight="medium" color={light ? "white" : "dark"}>
                &nbsp;Globe Technologies &nbsp;
              </MDTypography>
            </Link>
            All rights reserved.
          </MDBox>
          <MDBox
            component="ul"
            sx={({ breakpoints }) => ({
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              listStyle: "none",
              mt: 3,
              mb: 0,
              p: 0,

              [breakpoints.up("lg")]: {
                mt: 0,
              },
            })}
          >
            <MDBox component="li" pr={1} lineHeight={1}>
              <Link href="https://www.creative-tim.com/" target="_blank">
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  fontSize="small"
                  color={light ? "white" : "dark"}
                >
                  Terms
                </MDTypography>
              </Link>
            </MDBox>
            <MDBox component="li" px={1} lineHeight={1}>
              <Link href="https://www.creative-tim.com/presentation" target="_blank">
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  fontSize="small"
                  color={light ? "white" : "dark"}
                >
                  Cookies
                </MDTypography>
              </Link>
            </MDBox>
            <MDBox component="li" px={1} lineHeight={1}>
              <Link href="https://www.creative-tim.com/blog" target="_blank">
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  fontSize="small"
                  color={light ? "white" : "dark"}
                >
                  Privacy
                </MDTypography>
              </Link>
            </MDBox>
            <MDBox component="li" pl={1} lineHeight={1}>
              <Link href="https://www.creative-tim.com/license" target="_blank">
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  Security
                </MDTypography>
              </Link>
            </MDBox>
          </MDBox>
        </MDBox>
      </Container>
    </MDBox>
  );
}

// Setting default props for the Footer
Footer.defaultProps = {
  light: false,
};

// Typechecking props for the Footer
Footer.propTypes = {
  light: PropTypes.bool,
};

export default Footer;
