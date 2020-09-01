import React from "react";
import { Typography} from "@material-ui/core";
import { references } from "../Data/References" 
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import "../CSS/ReferenceBody.css";

export default class ReferenceBody extends React.Component {
    render () {
        return (
            <div className="referenceBody">
                {
                Object.values(references).map(reference => {
                    return (
                        <Accordion key={reference.questionsOn}>
                            <AccordionSummary
                             expandIcon={<ExpandMoreIcon />}
                             aria-controls="panel1a-content"
                             id="panel1a-header"
                            >
                                <Typography>{reference.questionsOn}</Typography>
                            </AccordionSummary>
                            <TableContainer component={AccordionDetails}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Contact</TableCell>
                                            <TableCell align="right">Website</TableCell>
                                            <TableCell align="right">Email</TableCell>
                                            <TableCell align="right">Phone</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            reference.contacts.map(contact => (
                                                <TableRow key={contact.name}>
                                                    <TableCell component="th" scope="row">
                                                    {contact.name}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {
                                                        contact.website ? 
                                                        (<Typography>
                                                        <a href={contact.website}>{contact.website}</a>
                                                        </Typography>) : ""
                                                    }
                                                    </TableCell>
                                                    <TableCell align="right">{contact.email ? contact.email : ""}</TableCell>
                                                    <TableCell align="right">{contact.phone ? contact.phone : ""}</TableCell>
                                              </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>

                            </TableContainer>
                        </Accordion>

                    );
                })}
            </div>
        );
    }
/*
    render() {
        return (
            <Grid container direction="row" alignItems="stretch" justify="center" spacing={6}>
                <Grid container item direction="row" alignItems="stretch" justify="center" spacing={2}> 
                        {Object.values(references).map(reference => {
                            return (
                                <Grid item xs>
                                    <Card>
                                        <CardContent>
                                            <Typography variant="h6">Questions On?</Typography>
                                            <Typography variant="body2">{reference.questionsOn}</Typography>
                                            <Typography variant="h6">Who to Contact</Typography>
                                            <Typography variant="body2">{reference.whoToContact}</Typography>
                                            {reference.websites && 
                                            (
                                                <>
                                                <Typography variant="h6">Website</Typography>
                                                {reference.websites.map(website => {
                                                    return (
                                                        <Typography variant="body2">
                                                        <a href={website}>{website}</a>
                                                    </Typography>
                                                    )
                                                })}
                                                </>
                                            )}

                                            {reference.email &&
                                            (
                                                <>
                                                <Typography variant="h6">Email</Typography>
                                                <Typography variant="body2">{reference.email}</Typography>
                                                </>
                                            )
                                            }
                                            {reference.phone &&
                                            (
                                                <>
                                                <Typography variant="h6">Phone</Typography>
                                                <Typography variant="body2">{reference.phone}</Typography>
                                                </>
                                            )
                                            }
                                        </CardContent>                            
                                    </Card>
                                </Grid>
                            )
                        }
                    )}
                </Grid>
            </Grid>
        );
    }*/

}