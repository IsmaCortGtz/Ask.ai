import { MODELS_DIR } from '@/constants/downloads';
import models from '@/constants/models';
import { LLM, ModelList } from '@/interfaces/Downloads';
import { useEffect, useState } from 'react';
import * as RNFS from 'react-native-fs';

export default function useInternal() {
  const [modelList, setModelList] = useState<ModelList>({});

  const downloadModel = async (modelName: string) => {
    const model = modelList[modelName];
    if (!model) { return; }

    setModelList(prev => ({
      ...prev,
      [modelName]: { ...model, status: 'downloading', progress: 0 },
    }));

    const downloadPath = `${MODELS_DIR}${model.modelName}/${model.subdirectory}`;
    if (!await RNFS.exists(downloadPath)) {
      await RNFS.mkdir(downloadPath);
    }

    console.log(`Downloading model: ${modelName} to ${downloadPath}`);

    let totalProgress = new Array(model.downloadFiles.length).fill(0);
    let totalBytes = new Array(model.downloadFiles.length).fill(0);

    console.log(model.downloadFiles);

    let interval = setInterval(() => {
      const progress = totalProgress.reduce((a, b) => a + b, 0) / totalBytes.reduce((a, b) => a + b, 0) * 100;
      console.log(`Progress: ${progress}%`);

      setModelList(prev => ({
        ...prev,
        [modelName]: {
          ...model,
          progress,
          status: 'downloading',
        },
      }));
    }, 500);

    await Promise.all(model.downloadFiles.map((file, index) => {
      return RNFS.downloadFile({
        fromUrl: `https://huggingface.co/${model.modelName}/resolve/main/${file}`,
        toFile: `${MODELS_DIR}${model.modelName}/${file}`,
        progress: (res) => {
          if (res.contentLength !== -1) { totalBytes[index] = res.contentLength; }
          totalProgress[index] = res.bytesWritten;
        },
      }).promise;
    }));

    console.log(`Finished downloading model: ${modelName}`);
    clearInterval(interval);
    const modelPath = `${MODELS_DIR}${model.modelName}/${model.subdirectory}/${model.fileName}.onnx`;
    const onnxExists = await RNFS.exists(modelPath);
    if (onnxExists) {
      setModelList(prev => ({
        ...prev,
        [modelName]: { ...model, downloaded: true, status: 'completed', progress: 100 },
      }));
    }
    else {
      setModelList(prev => ({
        ...prev,
        [modelName]: { ...model, downloaded: false, status: 'missing', progress: 0 },
      }));
    }
  };

  const deleteModel = async (modelName: string) => {
    const model = modelList[modelName];
    if (!model) { return; }

    try {
      await RNFS.unlink(`${MODELS_DIR}${model.modelName}`);
      setModelList(prev => ({
        ...prev,
        [modelName]: { ...model, downloaded: false, status: 'missing', progress: 0 },
      }));
    } catch (e) {
      throw new Error(`Failed to delete model: ${modelName}`);
    }
  };

  useEffect(() => {
    Object.entries(models).forEach(async ([key, model]: [string, LLM]) => {
      const exists = await RNFS.exists(`${MODELS_DIR}${model.modelName}`);

      const modelPath = `${MODELS_DIR}${model.modelName}/${model.subdirectory}/${model.fileName}.onnx`;
      const onnxExists = await RNFS.exists(modelPath);

      setModelList((prev) => ({
        ...prev,
        [key]: {
          ...model,
          downloaded: exists && onnxExists,
          status: (exists && onnxExists) ? 'completed' : 'missing',
          progress: 0,
        },
      }));
    });
  }, []);

  return {
    modelList,
    downloadModel,
    deleteModel,
  };
}
