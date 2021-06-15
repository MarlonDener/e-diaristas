import { Toolbar, Container } from "@material-ui/core";
import React from "react";
import { HeaderAppBar, HeaderLogo } from "./Header.styles";
const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar component={Container}>
        <HeaderLogo src={"/img/logos/logo.svg"} alt={"Diaristas"} />
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
