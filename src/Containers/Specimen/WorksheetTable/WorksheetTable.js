import React from 'react';

import WithStatusClass from './../../../hoc/WithStatusClass/WithStatusClass';
import statusTypes from './../../../Constants/STATUS_TYPES';

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
                    <th>
                        Test
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
                        <td>
                            <button onClick={() => props.updateSpecWKS(wks, statusTypes.watch, 'watched spec')}>Watch</button>
                            <button onClick={() => props.updateSpecWKS(wks, statusTypes.resolved, 'resolved spec')}>Resolve</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default WorksheetTable;
