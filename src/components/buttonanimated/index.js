import React from "react";

import { ButtonAnimated as ButtonAnimatedComponent } from "./styles";

function ButtonAnimated({ children, href, ...props }) {
  const handleClick = () => {
    window.open(href, "_blank");
  };

  return (
    <ButtonAnimatedComponent onClick={handleClick} {...props}><img className="button-icon" src={props.icon} alt="button-icon" />
      {children}
    </ButtonAnimatedComponent>
  );
}

export default ButtonAnimated;
