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

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Akiba React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Akiba React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import AccountInfoCard from "layouts/account/components/InfoCard";
import ConnectedAccounts from "layouts/account/components/ConnectedAccounts";
import SavingGoalsCard from "layouts/account/components/SavingGoalsCard";

// Overview page components
import Header from "layouts/account/components/Header";
import PlatformSettings from "layouts/account/components/Settings";

// Data
import ConnectedAccountsData from "layouts/account/data";

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={3.5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <AccountInfoCard
                title="about"
                description="This account belongs to Jose's family. We save together as a family to acheive shared financial goals."
                info={{
                  accountName: "Jose's Family",
                  accountNumber: "0100 000 000",
                  activeMembers: 4,
                  firstAdmin: "Jose",
                  secondAdmin: "Martha",
                  thirdAdmin: "Don",
                  dateCreated: "Dec 23, 2024",
                }}
                action={{ route: "", tooltip: "Edit About" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid>
            <Grid item xs={12} xl={4}>
              <ConnectedAccounts
                title="Connected Accounts"
                account={ConnectedAccountsData}
                shadow={false}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Saving Goals
          </MDTypography>
          <MDBox mb={1}>
            <MDTypography variant="caption" color="info" fontWeight="bold">
              6 Goals / 2 Completed
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={3}>
              <SavingGoalsCard
                title="House Rent"
                targetLabel="Target:"
                targetAmount="Kshs. 150,000"
                balanceLabel="Balance:"
                balanceAmount="Kshs. 60,000"
                progressLabel="Completion:"
                progressValue="60"
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <SavingGoalsCard
                title="Vacation"
                targetLabel="Target:"
                targetAmount="Kshs. 300,000"
                balanceLabel="Balance:"
                balanceAmount="Kshs. 240,000"
                progressLabel="Completion:"
                progressValue="20"
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <SavingGoalsCard
                title="Investment"
                targetLabel="Target:"
                targetAmount="Kshs. 1,000,000"
                balanceLabel="Balance:"
                balanceAmount="Kshs. 0"
                progressLabel="Completion:"
                progressValue="100"
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <SavingGoalsCard
                title="Kid's Education"
                targetLabel="Target:"
                targetAmount="Kshs. 500,000"
                balanceLabel="Balance:"
                balanceAmount="Kshs. 0"
                progressLabel="Completion:"
                progressValue="100"
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <SavingGoalsCard
                title="Charity"
                targetLabel="Target:"
                targetAmount="Kshs. 50,000"
                balanceLabel="Balance:"
                balanceAmount="Kshs. 35,000"
                progressLabel="Completion:"
                progressValue="30"
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <SavingGoalsCard
                title="Emergencies"
                targetLabel="Target:"
                targetAmount="Kshs. 50,000"
                balanceLabel="Balance:"
                balanceAmount="Kshs. 30,000"
                progressLabel="Completion:"
                progressValue="40"
              />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
