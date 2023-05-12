import React from "react";

import { Button as ButtonComponent } from "./styles";

function Button({children, href, ...props}) {

    const handleClick = () => {

        window.open(href, "_blank")
    };

    return <ButtonComponent onClick={handleClick} {...props}>{children}</ButtonComponent>
}

export default Button;