import { createContext } from "react";
import { TPageProvidersProps } from "./types";

const PageContext = createContext({});

const PageProvider = ({children}:TPageProvidersProps) => {
    return (
        <PageContext.Provider value={{}}>
            {children}
        </PageContext.Provider>
    );
}

export { PageProvider }