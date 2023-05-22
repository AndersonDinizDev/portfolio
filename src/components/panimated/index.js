import React from "react";

import { PAnimated as PAnimatedComponent } from "./styles";

function PAnimated({children, ...props}) {

    return <PAnimatedComponent {...props}>{children}</PAnimatedComponent>
}

export default PAnimated;