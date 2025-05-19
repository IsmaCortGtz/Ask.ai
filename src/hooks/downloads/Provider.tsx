import React from 'react';
import DownloadsContext from './context';
import useInternal from './useInternal';

interface DownloadsProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function DownloadsProvider({ children }: DownloadsProviderProps) {
  const { modelList, downloadModel, deleteModel } = useInternal();

  return (
    <DownloadsContext.Provider value={{
      models: modelList,
      downloadModel,
      deleteModel,
    }}>
      {children}
    </DownloadsContext.Provider>
  );
}
