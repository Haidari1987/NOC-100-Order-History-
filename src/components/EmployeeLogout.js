import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const EmployeeLogout = () => {
  const { logout } = useAuth0();

  return (
    <Button variant='light' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </Button>
  );
};

export default EmployeeLogout;