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
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Akiba React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function ComplexStatisticsCard2({ color, title, count, extras, icon }) {
  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" pt={1} px={2}>
        <MDBox
          variant="gradient"
          bgColor={color}
          color={color === "light" ? "dark" : "white"}
          coloredShadow={color}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          mt={-3}
        >
          <Icon fontSize="medium" color="inherit">
            {icon}
          </Icon>
        </MDBox>
        <MDBox textAlign="right" lineHeight={1.25}>
          <MDTypography variant="button" fontWeight="light" color="text">
            {title}
          </MDTypography>
          <MDTypography variant="h6">KES. {count}</MDTypography>
        </MDBox>
      </MDBox>
      <Divider />
      <MDBox pb={2} px={2} textAlign="center">
        {extras && (
          <MDTypography component="p" variant="button" color="text" display="flex">
            <MDTypography variant="p" sx={{ marginRight: 1 }}>
              Since
            </MDTypography>
            <MDTypography variant="p" color="dark" fontWeight="bold">
              {extras.date}
            </MDTypography>
          </MDTypography>
        )}
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ComplexStatisticsCard
ComplexStatisticsCard2.defaultProps = {
  color: "info",
  extras: {
    color: "success",
    amount: 0,
    direction: "",
    text: "",
    label: "",
  },
};

// Typechecking props for the ComplexStatisticsCard
ComplexStatisticsCard2.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  extras: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    date: PropTypes.string,
  }),
  icon: PropTypes.node.isRequired,
};

export default ComplexStatisticsCard2;
