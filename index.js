import { MODELS_DIR } from '@/constants/downloads';

// @ts-expect-error: @huggingface/transformers is not a TypeScript library
import { env } from '@huggingface/transformers';
env.allowRemoteModels = false; // Disable remote models by default
env.localModelPath = MODELS_DIR; // Set local model path */


import {AppRegistry} from 'react-native';
import './polyfills';
import App from './src/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
