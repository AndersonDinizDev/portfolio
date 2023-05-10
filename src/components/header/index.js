import React from 'react';

import { Header as HeaderComponent } from './styles';

function Header({children, ...props}) {

    return <HeaderComponent {...props}>{children}</HeaderComponent>
}

export default Header;