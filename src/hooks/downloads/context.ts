import { DownloadsContextType, ModelList } from '@/interfaces/Downloads';
import { createContext } from 'react';

const DownloadsContext = createContext<DownloadsContextType>({
  models: {} as ModelList,
  downloadModel: (_modelName: string) => {},
  deleteModel: (_modelName: string) => Promise.resolve(),
});

export default DownloadsContext;
