import React from "react";
import { Container, Card, Button, CardBody } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Card border="primary" style={{ width: "30rem"}}>
      <Card.Body className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100%" }}>
            <Card.Title className="text-center pb-3 pt-3"> 
              <b>nano.medina@micorreo.cl</b> 
            </Card.Title>
            <Button className="btn btn-info me-2" variant="light"><Link to="/">Cerrar Sesión</Link></Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;