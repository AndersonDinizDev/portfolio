import React from "react";

import { Button as ButtonComponent } from "./styles";

function Button({children, ...props}) {

    return <ButtonComponent {...props}>{children}</ButtonComponent>
}

export default Button;