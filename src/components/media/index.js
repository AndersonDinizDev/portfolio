import React from 'react';

import { Media as MediaComponent } from './styles';

function Media({children, ...props}) {


    return <MediaComponent {...props}>{children}</MediaComponent>
}

export default Media;