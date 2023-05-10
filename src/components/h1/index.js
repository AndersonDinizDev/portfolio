import React from "react";

import { H1 as H1Component} from "./styles";

function H1({children, ...props}) {

    return <H1Component {...props}>{children}</H1Component>
}

export default H1;