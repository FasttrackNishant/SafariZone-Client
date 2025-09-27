import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./api/authConfig";
import { MsalProvider } from "@azure/msal-react";

const msalInstance = new PublicClientApplication(msalConfig);

const MSALProviderFile = ({children}) =>
{
    return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
}

export default MSALProviderFile;