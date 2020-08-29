import React from "react";
import { Grid, Typography, Button, TextField, Link, makeStyles, Card, CardContent} from "@material-ui/core";

export default class ReferenceBody extends React.Component {

    render() {
        return (
            <Grid container direction="row" alignItems="stretch" justify="center" spacing={6}>
                <Grid container item direction="row" alignItems="stretch" justify="center" spacing={2}> 
                    <Grid item xs>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Questions On?</Typography>
                                <Typography variant="body2">Food Safety licensing and inspection</Typography>
                                <Typography variant="h6">Who to Contact</Typography>
                                <Typography variant="body2">KDA Food Safety and Lodging program</Typography>
                                <Typography variant="h6">Website</Typography>
                                <Typography variant="body2">
                                    <a href="https://agriculture.ks.gov/divisions-programs/food-safety-lodging">agriculture.ks.gov/foodsafety</a>
                                </Typography>
                                <Typography variant="h6">Email</Typography>
                                <Typography variant="body2">kda.fsl@ks.gov</Typography>
                                <Typography variant="h6">Phone</Typography>
                                <Typography variant="body2">785-564-6767</Typography>
                            </CardContent>                            
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Questions On?</Typography>
                                <Typography variant="body2">Value added product recipe approval, product
                                        development, Better Process Control School, HACCP, etc. 
                                </Typography>
                                <Typography variant="h6">Who to Contact</Typography>
                                <Typography variant="body2">Kansas State University Value-Added/ Product Development Lab</Typography>
                                <Typography variant="h6">Website</Typography>
                                <Typography variant="body2">
                                    <a href="https://www.ksre.k-state.edu/kvafl/">www.ksre.k-state.edu/kvafl</a>
                                </Typography>
                                <Typography variant="h6">Email</Typography>
                                <Typography variant="body2">kvafl@ksu.edu</Typography>
                                <Typography variant="h6">Phone</Typography>
                                <Typography variant="body2">785-532-1668</Typography>
                            </CardContent>  
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Questions On?</Typography>
                                <Typography variant="body2">Sales tax information</Typography>
                                <Typography variant="h6">Who to Contact</Typography>
                                <Typography variant="body2">Kansas Department of Revenue</Typography>
                                <Typography variant="h6">Website</Typography>
                                <Typography variant="body2">
                                    <a href="https://www.ksrevenue.org/">www.ksrevenue.org/</a>
                                </Typography>
                                <Typography variant="h6">Email</Typography>
                                <Typography variant="body2">tac@kdoor.ks.gov</Typography>
                                <Typography variant="h6">Phone</Typography>
                                <Typography variant="body2">785-368-8222</Typography>
                            </CardContent>  
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Questions On?</Typography>
                                <Typography variant="body2">Filing as a business entity</Typography>
                                <Typography variant="h6">Who to Contact</Typography>
                                <Typography variant="body2">Kansas Secretary of State</Typography>
                                <Typography variant="h6">Website</Typography>
                                <Typography variant="body2">
                                    <a href="https://sos.ks.gov/index.html">sos.ks.gov/index.html</a>
                                </Typography>
                                <Typography variant="h6">Email</Typography>
                                <Typography variant="body2">None provided</Typography>
                                <Typography variant="h6">Phone</Typography>
                                <Typography variant="body2">785-296-4564</Typography>
                            </CardContent>  
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Questions On?</Typography>
                                <Typography variant="body2">General information on Kansas farmers markets, registering a farmers market</Typography>
                                <Typography variant="h6">Who to Contact</Typography>
                                <Typography variant="body2">From the Land of Kansas program</Typography>
                                <Typography variant="h6">Website</Typography>
                                <Typography variant="body2">
                                    <a href="https://www.fromthelandofkansas.com/page/farmers-market-resources">https://www.fromthelandofkansas.com/page/ farmers-market-resources</a>
                                </Typography>
                                <Typography variant="h6">Email</Typography>
                                <Typography variant="body2">farmersmarkets@kda.ks.gov</Typography>
                                <Typography variant="h6">Phone</Typography>
                                <Typography variant="body2">785-564-6755</Typography>
                            </CardContent>  
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Questions On?</Typography>
                                <Typography variant="body2">Accepting Senior Farmers Market Nutrition Program (SFMNP) coupons</Typography>
                                <Typography variant="h6">Who to Contact</Typography>
                                <Typography variant="body2">Kansas Department of Health and Environment</Typography>
                                <Typography variant="h6">Website</Typography>
                                <Typography variant="body2">
                                    <a href="https://www.kdheks.gov/sfmnp/">www.kdheks.gov/sfmnp/</a>
                                </Typography>
                                <Typography variant="h6">Email</Typography>
                                <Typography variant="body2">None Provided</Typography>
                                <Typography variant="h6">Phone</Typography>
                                <Typography variant="body2">None Provided</Typography>
                            </CardContent>  
                        </Card>
                    </Grid>
                </Grid>
                <Grid item container direction="row" alignItems="stretch" justify="center" spacing={2}> 
                    <Grid item sm={2}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Questions On?</Typography>
                                <Typography variant="body2">Accepting SNAP (Benefits Cards) from customers</Typography>
                                <Typography variant="h6">Who to Contact</Typography>
                                <Typography variant="body2">USDA Supplemental Nutrition Assistance Program (SNAP) </Typography>
                                <Typography variant="h6">Website</Typography>
                                <Typography variant="body2">
                                    <a href="https://www.fns.usda.gov/snap/supplemental-nutrition-assistance-program">https://www.fns.usda.gov/snap/apply-to-accept</a>
                                </Typography>
                                <Typography variant="h6">Email</Typography>
                                <Typography variant="body2">None Provided</Typography>
                                <Typography variant="h6">Phone</Typography>
                                <Typography variant="body2">None Provided</Typography>
                            </CardContent>   
                        </Card>
                    </Grid>
                    <Grid item sm={2}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Questions On?</Typography>
                                <Typography variant="body2">Scale testing, method of selling produce</Typography>
                                <Typography variant="h6">Who to Contact</Typography>
                                <Typography variant="body2">KDA Weights and Measures</Typography>
                                <Typography variant="h6">Website</Typography>
                                <Typography variant="body2">
                                    <a href="https://agriculture.ks.gov/divisions-programs/weight-measures">agriculture.ks.gov/divisions-programs/weight-measures</a>
                                </Typography>
                                <Typography variant="h6">Email</Typography>
                                <Typography variant="body2">None Provided</Typography>
                                <Typography variant="h6">Phone</Typography>
                                <Typography variant="body2">785-564-6700</Typography>
                            </CardContent>   
                        </Card>
                    </Grid>
                    <Grid item sm={2}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Questions On?</Typography>
                                <Typography variant="body2">Selling live plants</Typography>
                                <Typography variant="h6">Who to Contact</Typography>
                                <Typography variant="body2">KDA Plant Protection and Weed Control Program</Typography>
                                <Typography variant="h6">Website</Typography>
                                <Typography variant="body2">
                                    <a href="https://agriculture.ks.gov/divisions-programs/plant-protect-weed-control/live-plant-dealer">agriculture.ks.gov/divisions-programs/plant-protect-weed-control/live-plant-dealer</a>
                                </Typography>
                                <Typography variant="h6">Email</Typography>
                                <Typography variant="body2">None Provided</Typography>
                                <Typography variant="h6">Phone</Typography>
                                <Typography variant="body2">785-564-6700</Typography>
                            </CardContent>   
                        </Card>
                    </Grid>
                    <Grid item sm={2}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Questions On?</Typography>
                                <Typography variant="body2">Meat and poultry inspection and registering of label claims </Typography>
                                <Typography variant="h6">Who to Contact</Typography>
                                <Typography variant="body2">KDA Meat and Poultry program</Typography>
                                <Typography variant="h6">Website</Typography>
                                <Typography variant="body2">
                                    <a href="https://agriculture.ks.gov/divisions-programs/meat-and-poultry-inspection/general-information">agriculture.ks.gov/divisions-programs/meat-and-poultry-inspection/general-information</a>
                                </Typography>
                                <Typography variant="h6">Email</Typography>
                                <Typography variant="body2">None Provided</Typography>
                                <Typography variant="h6">Phone</Typography>
                                <Typography variant="body2">785-564-6776</Typography>
                            </CardContent>   
                        </Card>
                    </Grid>
                    <Grid item sm={2}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Questions On?</Typography>
                                <Typography variant="body2">Questions on dairy processing, licensing, and product labeling</Typography>
                                <Typography variant="h6">Who to Contact</Typography>
                                <Typography variant="body2">KDA Dairy Inspection program</Typography>
                                <Typography variant="h6">Website</Typography>
                                <Typography variant="body2">
                                    <a href="https://agriculture.ks.gov/divisions-programs/dairy-inspection/dairy-consumers">agriculture.ks.gov/divisions-programs/dairy-inspection/dairy-consumers</a>
                                </Typography>
                                <Typography variant="h6">Email</Typography>
                                <Typography variant="body2">amanda.anderson@ks.gov</Typography>
                                <Typography variant="h6">Phone</Typography>
                                <Typography variant="body2">785-564-6700</Typography>
                            </CardContent>   
                        </Card>
                    </Grid>
                    <Grid item sm={2}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Questions On?</Typography>
                                <Typography variant="body2">Business consulting for small businesses</Typography>
                                <Typography variant="h6">Who to Contact</Typography>
                                <Typography variant="body2">Kansas Small Business Development Center</Typography>
                                <Typography variant="h6">Website</Typography>
                                <Typography variant="body2">
                                    <a href="https://www.kansassbdc.net/">www.kansassbdc.net/</a>
                                </Typography>
                                <Typography variant="h6">Email</Typography>
                                <Typography variant="body2">None Provided</Typography>
                                <Typography variant="h6">Phone</Typography>
                                <Typography variant="body2">1-877-625-7232</Typography>
                            </CardContent>   
                        </Card>
                    </Grid>
                </Grid>
                <Grid item container direction="row" alignItems="stretch" justify="center" spacing={2}> 
                    <Grid item sm={2}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Questions On?</Typography>
                                <Typography variant="body2">Information and personal assistance to start or maintain a Kansas business </Typography>
                                <Typography variant="h6">Who to Contact</Typography>
                                <Typography variant="body2">Kansas Business Center</Typography>
                                <Typography variant="h6">Website</Typography>
                                <Typography variant="body2">
                                    <a href="https://www.kansas.gov/businesscenter/">www.kansas.gov/businesscenter/</a>
                                </Typography>
                                <Typography variant="h6">Email</Typography>
                                <Typography variant="body2">None Provided</Typography>
                                <Typography variant="h6">Phone</Typography>
                                <Typography variant="body2">877-521-8600</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={2}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Questions On?</Typography>
                                <Typography variant="body2">Small business development assistance</Typography>
                                <Typography variant="h6">Who to Contact</Typography>
                                <Typography variant="body2">Kansas Department of Commerce</Typography>
                                <Typography variant="h6">Website</Typography>
                                <Typography variant="body2">
                                    <a href="https://www.kansascommerce.gov/">www.kansascommerce.gov/</a>
                                </Typography>
                                <Typography variant="h6">Email</Typography>
                                <Typography variant="body2">None Provided</Typography>
                                <Typography variant="h6">Phone</Typography>
                                <Typography variant="body2">785-296-3481</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={2}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Questions On?</Typography>
                                <Typography variant="body2">Information on funding opportunities for rural food businesses</Typography>
                                <Typography variant="h6">Who to Contact</Typography>
                                <Typography variant="body2">USDA Rural Development</Typography>
                                <Typography variant="h6">Website</Typography>
                                <Typography variant="body2">
                                    <a href="https://www.rd.usda.gov/ks">www.rd.usda.gov/ks</a>
                                </Typography>
                                <Typography variant="h6">Email</Typography>
                                <Typography variant="body2">None Provided</Typography>
                                <Typography variant="h6">Phone</Typography>
                                <Typography variant="body2">785-271-2700</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={2}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Questions On?</Typography>
                                <Typography variant="body2">Resources and information on Sustainable Agriculture</Typography>
                                <Typography variant="h6">Who to Contact</Typography>
                                <Typography variant="body2">Kansas Center for Sustainable Agriculture and Alternative Crops</Typography>
                                <Typography variant="h6">Website</Typography>
                                <Typography variant="body2">
                                    <a href="http://kansassustainableag.org/">kansassustainableag.org/</a>
                                </Typography>
                                <Typography variant="h6">Email</Typography>
                                <Typography variant="body2">kebert@k-state.edu</Typography>
                                <Typography variant="h6">Phone</Typography>
                                <Typography variant="body2">785-532-2976</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={2}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Questions On?</Typography>
                                <Typography variant="body2">General farmers market food safety best practices questions; produce safety</Typography>
                                <Typography variant="h6">Who to Contact</Typography>
                                <Typography variant="body2">Kansas State University Extension Consumer Food Safety Program</Typography>
                                <Typography variant="h6">Website</Typography>
                                <Typography variant="body2">
                                    <a href="https://www.ksre.k-state.edu/foodsafety/">www.ksre.k-state.edu/foodsafety/</a>
                                </Typography>
                                <Typography variant="h6">Email</Typography>
                                <Typography variant="body2">lnwadike@ksu.edu</Typography>
                                <Typography variant="h6">Phone</Typography>
                                <Typography variant="body2">913-307-7391</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={2}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Questions On?</Typography>
                                <Typography variant="body2">Information on production of fruits, vegetables, and live plants </Typography>
                                <Typography variant="h6">Who to Contact</Typography>
                                <Typography variant="body2">Kansas State University Extension Horticulture Program; Specialty Crop Growers Association</Typography>
                                <Typography variant="h6">Website</Typography>
                                <Typography variant="body2">
                                    <a href="https://www.kscga.org/">www.kscga.org/</a>
                                </Typography>
                                <Typography variant="h6">Email</Typography>
                                <Typography variant="body2">None Provided</Typography>
                                <Typography variant="h6">Phone</Typography>
                                <Typography variant="body2">785-532-6173</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                

            </Grid>
        );
    }
}