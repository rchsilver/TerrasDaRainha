import { createContext } from "react";
import { TPageProvidersProps } from "./types";
import { useState } from 'react';
import {TPageContext} from "./types"
// import {RouteFool} from "../../history/0TheFool/TheFool"

const PageContext = createContext({} as TPageContext);

const PageProvider = ({children}:TPageProvidersProps) => {
  const [textoCompleto, setTextoCompleto] = useState<string[]>([]);
  const [textoDigitado, setTextoDigitado] = useState<string[]>([]);
  const [indiceParagrafo, setIndiceParagrafo] = useState<number>(0);
  const [indiceLetra, setIndiceLetra] = useState<number>(0);
  const [textoCompletoDigitado, setTextoCompletoDigitado] = useState<boolean>(false);



  

    return (
        <PageContext.Provider value={{textoCompleto,
            setTextoCompleto,
            textoDigitado,
            setTextoDigitado,
            indiceParagrafo,
            setIndiceParagrafo,
            indiceLetra,
            setIndiceLetra,
            textoCompletoDigitado,
            setTextoCompletoDigitado
        }}>
            {children}
        </PageContext.Provider>
    );
}

export { PageProvider, PageContext }