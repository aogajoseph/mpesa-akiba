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

// Akiba React components
import MDBox from "components/MDBox";

// Akiba React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import ComplexStatisticsCard2 from "examples/Cards/StatisticsCards/ComplexStatisticsCard/index2";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="account_balance_wallet"
                title="Total Savings"
                count={0}
                percentage={{
                  color: "success",
                  amount: "1%",
                  direction: "arrow_upward",
                  label: "This Month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="info"
                icon="insights"
                title="Savings Target"
                count={0}
                percentage={{
                  color: "error",
                  amount: "5%",
                  direction: "arrow_downward",
                  label: "Below Target",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard2
                color="success"
                icon="download"
                title=" Total Deposits"
                count={0}
                extras={{
                  date: "Dec 23, 2024",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard2
                color="primary"
                icon="upload"
                title="Total Withdrawals"
                count={0}
                extras={{
                  date: "Dec 23, 2024",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="account health"
                  description="Based on overall financial activity"
                  date="updates every day"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="contributions"
                  description="Direct member deposits"
                  date="updates every week"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="Target Tracking"
                  description={
                    <>
                      Target = Total Saving Goals
                    </>
                  }
                  date="updates every month"
                  chart={sales}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
