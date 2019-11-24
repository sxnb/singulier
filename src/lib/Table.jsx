import React from 'react';
import './scss/styles.scss';

export const Table = (props) => (<table className="table" {...props}>{props.children}</table>);
export const TableHeader = (props) => (<thead className="table-header" {...props}>{props.children}</thead>);
export const TableHeaderRow = (props) => (<tr className="table-header-row" {...props}>{props.children}</tr>);
export const TableHeaderCell = (props) => (<th className="table-header-cell" {...props}>{props.children}</th>);
export const TableBody = (props) => (<tbody className="table-body" {...props}>{props.children}</tbody>);
export const TableRow = (props) => (<tr className="table-row" {...props}>{props.children}</tr>);
export const TableCell = (props) => (<td className="table-cell" {...props}>{props.children}</td>);
