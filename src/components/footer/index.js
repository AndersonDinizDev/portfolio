import React from "react"

import { FooterContent as FooterContentComponent } from "./styles"

function FooterContent({children, ...props}) {

    return <FooterContentComponent {...props}>{children}</FooterContentComponent>
}

export default FooterContent;