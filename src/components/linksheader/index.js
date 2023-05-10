import React from "react";

import { LinksHeader as LinksHeaderComponent } from "./styles";

function LinksHeader({children, ...props}) {

    return <LinksHeaderComponent {...props}>{children}</LinksHeaderComponent>
}

export default LinksHeader;