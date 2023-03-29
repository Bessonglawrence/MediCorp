
import React from 'react';
import { Box, Button, CssBaseline, IconButton, Typography, ThemeProvider } from "@mui/material";
import { mockTransactions, mockDataInvoices } from "../../Data/Data";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import Footer from "../../components/Footer";
import Topbar from '../../components/Topbar';
import { ColorModeContext, useMode, tokens } from '../../theme/theme';


const DashBoard = () => {
 
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div>
          <Topbar />
          <CssBaseline />
              <Box m="20px">
                {/* HEADER */}
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

                  <Box>
                    <Button
                      sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "10px 20px",
                      }}
                    >
                      <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                      Download Reports
                    </Button>
                  </Box>
                </Box>

                {/* GRID & CHARTS */}
                <Box
                  display="grid"
                  gridTemplateColumns="repeat(12, 1fr)"
                  gridAutoRows="140px"
                  gap="20px"
                >
                  {/* ROW 1 */}
                  <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <StatBox
                      title="12,361"
                      subtitle="Emails Sent"
                      progress="0.75"
                      increase="+14%"
                      icon={
                        <EmailIcon
                          sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                      }
                    />
                  </Box>
                  <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <StatBox
                      title="431,225"
                      subtitle="Sales Obtained"
                      progress="0.50"
                      increase="+21%"
                      icon={
                        <PointOfSaleIcon
                          sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                      }
                    />
                  </Box>
                  <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <StatBox
                      title="32,441"
                      subtitle="New Clients"
                      progress="0.30"
                      increase="+5%"
                      icon={
                        <PersonAddIcon
                          sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                      }
                    />
                  </Box>
                  <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <StatBox
                      title="1,325,134"
                      subtitle="Traffic Received"
                      progress="0.80"
                      increase="+43%"
                      icon={
                        <TrafficIcon
                          sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                      }
                    />
                  </Box>

                  {/* ROW 2 */}
                 
                  <Box
                    gridColumn="span 6"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                    marginTop="10px"
                  >
                  
                 
                      <Typography color={colors.grey[100]} 
                        variant="h5" 
                        fontWeight="600" 
                        fontSize="25px" 
                        textAlign="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        margin="10px"
                        paddingBottom="10px"
                        >
                        Pending Tests
                    </Typography>
            
                    {mockTransactions.map((transaction, i) => (
                      <Box
                        key={`${transaction.txId}-${i}`}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        p="15px"
                      >
                        <Box>
                          <Typography
                            color={colors.greenAccent[500]}
                            variant="h5"
                            fontWeight="600"
                          >
                            {transaction.txId}
                          </Typography>
                          <Typography color={colors.grey[100]}>
                            {transaction.user}
                          </Typography>
                        </Box>
                        <Box color={colors.grey[100]}>{transaction.date}</Box>
                        <Box
                          backgroundColor={colors.greenAccent[500]}
                          p="5px 10px"
                          borderRadius="4px"
                        >
                          ${transaction.cost}
                        </Box>
                      </Box>
                    ))}
                  </Box>

                  <Box
                    gridColumn="span 6"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                    marginTop="10px"
                  > 
                    <Typography color={colors.grey[100]} 
                      variant="h5" 
                      fontWeight="600" 
                      fontSize="25px" 
                      textAlign="center"
                      borderBottom={`4px solid ${colors.primary[500]}`}
                      margin="10px"
                      paddingBottom="10px"
                      >
                      Done Test
                    </Typography>
                    {mockTransactions.map((transaction, i) => (
                      <Box
                        key={`${transaction.txId}-${i}`}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        p="15px"
                      >
                        <Box>
                          <Typography
                            color={colors.greenAccent[500]}
                            variant="h5"
                            fontWeight="600"
                          >
                            {transaction.txId}
                          </Typography>
                          <Typography color={colors.grey[100]}>
                            {transaction.user}
                          </Typography>
                        </Box>
                        <Box color={colors.grey[100]}>{transaction.date}</Box>
                        <Box
                          backgroundColor={colors.greenAccent[500]}
                          p="5px 10px"
                          borderRadius="4px"
                        >
                          ${transaction.cost}
                        </Box>
                      </Box>
                    ))}
                  </Box>

                  {/* ROW 3 */}
                </Box>
              
                  <Typography color={colors.grey[100]} variant="h5" fontWeight="600" fontSize="28px" textAlign="center" margin="20px">
                    Recent Invoices
                  </Typography>
                

                <Box
                    gridColumn="span 5"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    marginTop="13px"
                    marginBottom="18px"
                    overflow="auto"
                  >
                  
                    {mockDataInvoices.map((Invoice) => (
                      <Box
                        key={Invoice.id}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        p="15px"
                      >
                        <Box>
                          <Typography
                            color={colors.greenAccent[500]}
                            variant="h5"
                            fontWeight="600"
                          >
                            {Invoice.name}
                          </Typography>
                          <Typography color={colors.grey[100]}>
                            {Invoice.email}
                          </Typography>
                        </Box>
                        <Box color={colors.grey[100]}>{Invoice.date}</Box>
                        <Box
                          backgroundColor={colors.greenAccent[500]}
                          p="5px 10px"
                          borderRadius="4px"
                        >
                          ${Invoice.cost}
                        </Box>
                      </Box>
                    ))}
                  </Box>
              </Box>
              <Footer />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default DashBoard;