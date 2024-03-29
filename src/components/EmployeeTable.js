import { Paper, TableContainer } from "@mui/material";
import React from "react";
import { Form, Table } from "react-bootstrap";
import "./employee_style.css";

function EmployeeTable() {
  return (
    <TableContainer component={Paper}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Order Number</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Completion Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Check type="checkbox" />
            </td>
            <td>654389321</td>
            <td>John Joseph</td>
            <td>11/19/23</td>
            <td>Incomplete</td>
            <td>
              <button
                type="button"
                className="mock-button"
                onClick={() => this}
              >
                Order Details
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <Form.Check type="checkbox" />
            </td>
            <td>654389321</td>
            <td>John Joseph</td>
            <td>11/19/23</td>
            <td>Incomplete</td>
            <td>
              <button
                type="button"
                className="mock-button"
                onClick={() => this}
              >
                Order Details
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <Form.Check type="checkbox" />
            </td>
            <td>654389321</td>
            <td>John Joseph</td>
            <td>11/19/23</td>
            <td>Incomplete</td>
            <td>
              <button
                type="button"
                className="mock-button"
                onClick={() => this}
              >
                Order Details
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <Form.Check type="checkbox" />
            </td>
            <td>654389321</td>
            <td>John Joseph</td>
            <td>11/19/23</td>
            <td>Incomplete</td>
            <td>
              <button
                type="button"
                className="mock-button"
                onClick={() => this}
              >
                Order Details
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default EmployeeTable;
