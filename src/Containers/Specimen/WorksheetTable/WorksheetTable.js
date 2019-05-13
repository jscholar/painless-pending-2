import React from 'react';

import WithStatusClass from './../../../hoc/WithStatusClass/WithStatusClass';
import classes from './WorksheetTable.module.css'

const WorksheetTable = (props) => (
    <div className={classes.WorksheetTable}>
        <table>
            <tbody>
                <tr>
                    <th>
                        Worksheet
                            </th>
                    <th>
                        Status
                            </th>
                </tr>
                {Object.keys(props.worksheets).map(wks => (
                    <tr key={wks}>
                        <td>
                            <span>{wks}</span>
                        </td>
                        <td>
                            <WithStatusClass key={wks} status={props.worksheets[wks].status}>
                                <span>{props.worksheets[wks].status}</span>
                            </WithStatusClass>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default WorksheetTable;
