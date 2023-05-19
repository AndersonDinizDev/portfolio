import React from "react";

import { MainContent as MainContentComponent } from "./styles";

function MainContent({children, ...props}) {

    return <MainContentComponent {...props}>{children}</MainContentComponent>
}

export default MainContent;