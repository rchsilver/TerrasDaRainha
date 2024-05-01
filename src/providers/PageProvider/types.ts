type TPageProvidersProps = {
  children: React.ReactNode;
  };
  type TPageContext = {
    textoCompleto: string[];
    setTextoCompleto: React.Dispatch<React.SetStateAction<string[]>>;
    textoDigitado: string[];
    setTextoDigitado: React.Dispatch<React.SetStateAction<string[]>>;
    indiceParagrafo: number;
    setIndiceParagrafo: React.Dispatch<React.SetStateAction<number>>;
    indiceLetra: number;
    setIndiceLetra: React.Dispatch<React.SetStateAction<number>>;
    textoCompletoDigitado: boolean;
    setTextoCompletoDigitado: React.Dispatch<React.SetStateAction<boolean>>;
};

  export type {
    TPageProvidersProps, TPageContext
  }