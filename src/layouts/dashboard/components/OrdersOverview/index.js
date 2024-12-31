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

import { useState } from "react";
// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";

// Akiba React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Akiba React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expanded state when the user clicks "See More"
  const handleSeeMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Activity Log
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              24%
            </MDTypography>{" "}
            this week
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="download"
          title="Deposits:"
          log="Kes. 2,400 Received from Jane Mwamba."
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="primary"
          icon="upload"
          title="Withdrawals:"
          log="Kes. 15,000 withdrawn for House Rent."
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          color="warning"
          icon="flag"
          title="Goals:"
          log="House Rent goal created and set at Kes. 120,000."
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          color="info"
          icon="star"
          title="Goals:"
          log="Charity goal achieved successfully."
          dateTime="18 DEC 4:54 AM"
          lastItem
        />
        <MDBox display="flex" justifyContent="center" mt={1}>
          <Link
            onClick={handleSeeMoreClick}
            sx={{
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "0.875rem",
              color: "primary.main",
              "&:hover": {
                color: "secondary.main",
                textDecoration: "underline",
              },
            }}
          >
            {isExpanded ? "See Less" : "See More"}
          </Link>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
