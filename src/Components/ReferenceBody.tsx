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
}