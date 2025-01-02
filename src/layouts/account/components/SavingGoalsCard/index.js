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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";
import MDProgress from "components/MDProgress";

// Akiba React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDAvatar from "components/MDAvatar";

function SavingGoalsCard({
  title,
  targetLabel,
  targetAmount,
  balanceLabel,
  balanceAmount,
  progressLabel,
  progressValue,
}) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      <MDBox position="relative" width="100.25%" shadow="xl" borderRadius="xl">
        <CardMedia
          title={title}
          sx={{
            maxWidth: "100%",
            margin: 0,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </MDBox>
      <MDBox mt={1} mx={0.5}>
        <MDBox mb={1}>
          <MDTypography variant="h5" textTransform="capitalize">
            {title}
          </MDTypography>
        </MDBox>
        <MDBox>
          <MDTypography
            variant="button"
            fontWeight="regular"
            color="text"
            textTransform="capitalize"
          >
            {targetLabel}
          </MDTypography>
          <MDTypography
            variant="button"
            marginLeft="3px"
            fontWeight="regular"
            color="text"
            textTransform="capitalize"
          >
            {targetAmount}
          </MDTypography>
        </MDBox>
        <MDBox mb={2}>
          <MDTypography
            variant="button"
            fontWeight="regular"
            color="text"
            textTransform="capitalize"
          >
            {balanceLabel}
          </MDTypography>
          <MDTypography
            variant="button"
            marginLeft="3px"
            fontWeight="regular"
            color="text"
            textTransform="capitalize"
          >
            {balanceAmount}
          </MDTypography>
        </MDBox>
        <MDBox
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <MDTypography
            variant="button"
            fontWeight="regular"
            color="text"
            textTransform="capitalize"
          >
            {progressLabel}
          </MDTypography>
          <MDBox width="10rem" textAlign="center" marginTop="0.5rem" marginLeft="1rem">
            <MDProgress color="info" value={progressValue} variant="gradient" targetLabel={false} />
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of SavingGoalsCard
SavingGoalsCard.defaultProps = {
  authors: [],
};

// Typechecking props for the SavingGoalsCard
SavingGoalsCard.propTypes = {
  title: PropTypes.string.isRequired,
  targetLabel: PropTypes.string.isRequired,
  targetAmount: PropTypes.string.isRequired,
  balanceLabel: PropTypes.string.isRequired,
  balanceAmount: PropTypes.string.isRequired,
  progressLabel: PropTypes.string.isRequired,
  progressValue: PropTypes.string.isRequired,
};

export default SavingGoalsCard;
