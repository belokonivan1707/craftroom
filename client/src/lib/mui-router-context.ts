import React from 'react';

// The default value is never and should never be used.
// It's here to improve DX by enabling autocompletion for editors supporting TypeScript.
export const MuiRouterContext = React.createContext({
    pathname: ''
});
