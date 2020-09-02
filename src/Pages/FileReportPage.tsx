import React from "react";
import { Grid, Typography, Link, Box } from "@material-ui/core";
import "antd/dist/antd.css";
import { Layout } from "antd";
import KDANavbar from "../Components/KDANavbar";
import KDAFooter from "../Components/KDAFooter";
import "../CSS/FileReportPage.css";

export default class FileReportPage extends React.Component {
    render() {
        return (
                <Layout>
                    <KDANavbar />
                    <Grid container direction="row" alignItems="center" justify="center" spacing={2}>
                        <Grid item xs={12}>
                            <Typography align="center" variant="h4"> <b> Report a food-related illness or complaint </b></Typography>
                            <br></br>
                            <Typography align="left" variant="h6"> --Did you get sick from something you ate?  </Typography>
                            <Typography align="left" variant="h6"> --Did you attend an event where people became ill?</Typography>
                            <Typography align="left" variant="h6"> --Is there a problem with a restaurant you visited or food item you purchased?</Typography>
                            <br></br>
                            <Typography align="left" variant="h6"> <i>Kansas Department of Health & Environment and Kansas Department of Agriculture work cooperatively to investigate foodborne illness outbreaks. </i></Typography>
                        </Grid>
                    <Grid item xs={6}>
                             <Box display="flex" flexDirection="column" justifyContent="center" border={2} padding={4} className="leftboxbackground">
                                <img className="center" src="http://www.foodsafetykansas.org/images/KDHE-Logo.png" alt="Kansas Department of Health & Environment" width="300" height="200" />
                                <Typography align="left" variant="h4"> <b>Report illness</b> caused by a restaurant, food item, or event </Typography>
                                <Typography align="center" variant="h5"> -Call 877-427-7317  </Typography>
                                <Typography align="center">
                                    <Link variant="h5" align="center" href="https://kdheks.co1.qualtrics.com/jfe/form/SV_1MvOE2TUu0zK817">
                                        File An Online Report
                                        </Link>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box display="flex" flexDirection="column" justifyContent="center" border={2} padding={2} className="rightboxbackground">
                                <img className="center" src="http://www.foodsafetykansas.org/images/KDA_Logo.png" alt="Department of Agriculture" width="300" height="200"/>
                                <Typography align="left" variant="h4"> Report a problem with a restaurant or food that <b>did NOT cause illness</b> </Typography>
                                <Typography align="center">
                                    <Link variant="h5" align="center" href="https://agriculture.ks.gov/kda-services/complaint-form/food-safety-and-lodging-complaint">
                                    File An Online Report
                                     </Link>
                                </Typography>
                                <Typography align="center" variant="h5"> -Email kda.fsl@ks.gov</Typography>
                                <Typography align="center" variant="h5"> -Or call 785-564-6767</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography align="center" variant="h4"><b> Why It's Important to Report Food Poisoning </b> </Typography>
                            <br></br>
                            <Typography align="left" variant="h6"> --When two or more people get the same illness from the same contaminated food or drink, the event is called a foodborne outbreak.  </Typography>
                            <Typography align="left" variant="h6"> --Reporting illnesses to the state health department helps them identify potential outbreaks of foodborne disease.</Typography>
                            <Typography align="left" variant="h6"> --Public health officials investigate outbreaks to control them, so more people do not get sick in the outbreak, and to learn how to prevent similar outbreaks from happening in the future.</Typography>
                            <br></br>
                            <Typography align="left" variant="h6">To learn more about foodborne illness, please visit <Link href="http://www.foodsafety.gov/">FoodSafety.gov </Link>
                                or the <Link href="http://www.cdc.gov/foodsafety/foodborne-germs.html"> Center for Disease Control and Prevention (CDC)</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                    <KDAFooter />
                </Layout>
        );
    }
}
