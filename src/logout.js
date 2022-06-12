import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    
      <a href="#logout" class="nav-link" onClick={() => logout({ returnTo: window.location.origin })}>Cerrar Sesión</a>
  );
};