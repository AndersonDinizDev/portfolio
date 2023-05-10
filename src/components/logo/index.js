import React from 'react';

import { LogoText as LogoTextComponent } from './styles';

function LogoText({children, ...props}) {

    return <LogoTextComponent {...props}>{children}</LogoTextComponent>
}


export default LogoText;