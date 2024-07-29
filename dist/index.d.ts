import * as React from "react";

interface SoundContextType {
  sound: boolean;
  setSound: React.Dispatch<React.SetStateAction<boolean>>;
}

declare function useSound(): SoundContextType;

interface SoundProviderProps {
  children: React.ReactNode;
  initialSound?: boolean;
}

declare function SoundProvider({children, initialSound}: SoundProviderProps): JSX.Element | null;

export {SoundProvider, useSound};
