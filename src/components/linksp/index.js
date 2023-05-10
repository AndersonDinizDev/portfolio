import React from "react";

import { LinksP as LinksPComponent } from "./styles";

function LinksP({children, ...props}) {

    return <LinksPComponent {...props}>{children}</LinksPComponent>
}

export default LinksP;