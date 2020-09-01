import React from "react";
import { Grid, Typography, Button, TextField, Link, styled} from "@material-ui/core";
import "../CSS/KDAFooter.css";

const SignUpButton = styled(Button)({
    border: 0,
    borderRadius: 3,
    height: 48,
    padding: '0',
    minWidth: '120px',
    marginTop: '12px',
    marginBottom: '12px',
  });

const MarginTypography = styled(Typography)({
    marginTop: '12px',
    marginBottom: '12px'
})

export default class KDAFooter extends React.Component {

    render() {
        return (
            <Grid container direction="row" alignItems="center" justify="center" spacing={2} className="navbarGradient">
                <Grid item xs={12} sm={4}>
                    <img className="kdaLogo" src="https://upload.wikimedia.org/wikipedia/en/b/bd/KSDofAg_logo.png" alt="Kansas Department of Agriculture" />
                </Grid>
                <Grid item container direction="column" alignContent="center" xs={6} sm={4}>
                    <Typography variant="h6"> Support </Typography>
                    <Link color ="inherit" href="/about" > About Us </Link>
                    <Link color ="inherit" href="/snapInfo"> Snap Eligibility </Link>
                    <Link color ="inherit" href="/references"> Reference Page </Link>
                    <Link color ="inherit" href="/contact"> Contact Us </Link>
                    <Link color ="inherit" href="/report"> File A Report </Link>
                </Grid>
                <Grid className="signUp" item container alignItems="center" direction="column" alignContent="center" xs={6} sm = {4} >
                    <MarginTypography >Stay updated with KDA</MarginTypography>
                    <TextField id="standard-basic" placeholder="Email Address" />
                    <SignUpButton variant="contained" color="primary"> Sign Up </SignUpButton>
                </Grid>
            </Grid>
        )
    }
}