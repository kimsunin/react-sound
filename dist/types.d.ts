import * as React from 'react';

interface SoundContextType {
  sound: boolean | undefined;
  setSound: (sound: boolean) => void;
}


interface SoundProviderProps {
  children: React.ReactNode;
  initialSound?: boolean;
}



