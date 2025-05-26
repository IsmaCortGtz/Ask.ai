import { ModelList } from '@/interfaces/Downloads';

export default {
  'Chat': {
    type: 'text-generation',
    size: '490 MB',
    modelName: 'Xenova/Qwen1.5-0.5B-Chat',
    fileName: 'decoder_model_merged_quantized',
    subdirectory: 'onnx',
    downloadFiles: [
      'tokenizer.json',
      'tokenizer_config.json',
      'config.json',
      'onnx/decoder_model_merged_quantized.onnx',
    ],
  },

  /* 'Text2Speech': {
    type: 'text-to-speech',
    size: '120 MB',
    modelName: 'Xenova/mms-tts-eng',
    fileName: 'model',
    subdirectory: 'onnx',
    downloadFiles: [
      'tokenizer.json',
      'tokenizer_config.json',
      'config.json',
      'onnx/model.onnx',
    ],
  }, */
} as ModelList;
