import * as React from "react";
import {SoundContextType, SoundProviderProps} from "./types";

function useStickyState(defaultValue: boolean, key: string) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

const SoundContext = React.createContext<SoundContextType | undefined>(undefined);

function useSound(): SoundContextType {
  const context = React.useContext(SoundContext);
  if (context === undefined) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
}

function SoundProvider({ children, initialSound = true }: SoundProviderProps): JSX.Element | null {
  const [sound, setSound] = useStickyState(initialSound, "sound");
  const [isMount, setMount] = React.useState(false);

  React.useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  return (
    <SoundContext.Provider value={{ sound, setSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export {useSound, SoundProvider}
