import React from "react";

import { H1Animation as H1AnimationComponent } from "./styles";

function H1Animation({children, ...props}) {

    return <H1AnimationComponent {...props}>{children}</H1AnimationComponent>
}

export default H1Animation;