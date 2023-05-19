import React from "react";

import { Button as ButtonComponent } from "./styles";

function Button({ children, href, ...props }) {
  const handleClick = () => {
    window.open(href, "_blank");
  };

  return (
    <ButtonComponent onClick={handleClick} {...props}><img className="button-icon" src={props.icon} alt="button-icon" />
      {children}
    </ButtonComponent>
  );
}

export default Button;
