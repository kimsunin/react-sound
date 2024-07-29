import * as React from "react";

function useStickyState(defaultValue: boolean, key: string): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

interface SoundContextType {
  sound: boolean;
  setSound: React.Dispatch<React.SetStateAction<boolean>>;
}

const SoundContext = React.createContext<SoundContextType | undefined>(undefined);

function useSound(): SoundContextType {
  const context = React.useContext(SoundContext);
  if (context === undefined) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
}

interface SoundProviderProps {
  children: React.ReactNode;
  initialSound?: boolean;
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

export { SoundProvider, useSound };
