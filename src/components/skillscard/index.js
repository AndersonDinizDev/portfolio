import React from "react";

import { SkillsCard as SkillsCardComponent } from "./styles";

function SkillsCard({children, ...props}) {

    return <SkillsCardComponent {...props}>{children}</SkillsCardComponent>
}

export default SkillsCard;