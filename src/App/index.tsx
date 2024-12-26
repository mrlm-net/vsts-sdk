import "azure-devops-ui/Core/override.css";

import * as React from "react";
import { createRoot } from 'react-dom/client';
import SDK from "azure-devops-extension-sdk";
import { CommonServiceIds, getClient, IExtensionDataService, IHostNavigationService, IHostPageLayoutService, ILocationService } from "azure-devops-extension-api";


export async function RenderContribution(
    component: React.ReactNode
): Promise<void> {
    // First of all initialize the SDK with basic configuration
    // this is required to access the Azure DevOps Extension SDK
    // and also do not send signal that App is loaded yet!
    await SDK.init({
        applyTheme: true,
        loaded: false
    });
    // Now we should wait until the SDK is ready
    // and then we can gather the root element
    // and render the component
    await SDK.ready();
    const container = document.getElementById('root');
    const root = createRoot(container!);
    root.render(component);

    const service = await SDK.getService<IExtensionDataService>(CommonServiceIds.ExtensionDataService);
    const layout = await SDK.getService<IHostPageLayoutService>(CommonServiceIds.HostPageLayoutService);
    const location = await SDK.getService<IHostNavigationService>(CommonServiceIds.HostNavigationService);

    console.log("loc", await location.setHash("Hello World!"));

    // Now we can notify the SDK that our App is loaded
    // and it can start sending signals 
    // to the Azure DevOps Extension SDK
    SDK.notifyLoadSucceeded();
}