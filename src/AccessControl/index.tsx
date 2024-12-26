import * as React from "react";
import { Card } from "azure-devops-ui/Card";

function AccessControl(props: {children?: React.ReactNode}): JSX.Element {
    return (
        <>
            <Card className="flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </Card>
        </>
    );
}

export default AccessControl;
