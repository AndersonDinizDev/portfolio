import React from "react";

import { P as PComponent } from "./styles";

function P({children, ...props}) {

    return <PComponent {...props}>{children}</PComponent>
}

export default P;