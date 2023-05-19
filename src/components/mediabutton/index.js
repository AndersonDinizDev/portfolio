import React from "react";

import { MediaButton as MediaButtonComponent } from "./styles";

function MediaButton({children, href, ...props}) {

    const handleClick = () => {

        window.open(href, "_blank")
    }

    return <MediaButtonComponent onClick={handleClick} {...props}>{children}</MediaButtonComponent>
}

export default MediaButton;