import { withAuthenticationRequired } from "@auth0/auth0-react";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import EmployeeButton from "./EmployeeButtons";
import EmployeeHeader from "./EmployeeHeader";
import EmployeeTable from "./EmployeeTable";
import "./employee_style.css";

const Employee = () => {
  return (
    <>
      <EmployeeHeader />
      <Container
        fluid
        style={{ margin: 0, padding: 0, marginBottom: "13rem" }}
        className="center-align"
      >
        <Row>
          <Col xs="auto" className="d-flex flex-sm-row flex-md-column mx-auto">
            <Row className="page-button">
              <Button size="lg" variant="light">
                Orders
              </Button>
            </Row>
            <Row className="page-button">
              <Button size="lg" variant="light">
                Inventory
              </Button>
            </Row>
            <Row className="page-button">
              <Button size="lg" variant="light">
                Rooms
              </Button>
            </Row>
          </Col>
          <Col
            xs={9}
            className="d-flex justify-content-end flex-column align-items-center mx-auto"
          >
            <h1>Orders</h1>
            <EmployeeButton />
            <EmployeeTable />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default withAuthenticationRequired(Employee, {
  onRedirecting: () => <div>Loading...</div>,
});
