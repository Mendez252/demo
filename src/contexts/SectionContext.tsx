import { createContext, useState, Dispatch, SetStateAction } from "react";

export interface SectionContextProps {
  section: string;
  setSection: Dispatch<SetStateAction<string>>;
}

interface SectionProviderProps {
  children: React.ReactNode;
}

export const SectionContext = createContext<SectionContextProps | undefined>(
  undefined
);

const SectionProvider = ({ children }: SectionProviderProps) => {
  const [section, setSection] = useState<string>("home");

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export default SectionProvider;
