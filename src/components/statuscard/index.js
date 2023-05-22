import React from "react";

import { StatusCard as StatusCardComponent} from "./styles";

function StatusCard({children, ...props}) {

    return <StatusCardComponent {...props}>{children}</StatusCardComponent>
}

export default StatusCard;