export interface LLM {
  type: string,
  size: string,
  modelName: string,
  fileName: string,
  subdirectory: string,
  downloadFiles: string[],
  downloaded?: boolean,
  progress?: number,
  status?: 'missing' | 'downloading' | 'completed',
}

export interface ModelList {
  [key: string]: LLM,
}

export interface DownloadsContextType {
  models: ModelList,
  downloadModel: (modelName: string) => void,
  deleteModel: (modelName: string) => Promise<void>,
}
