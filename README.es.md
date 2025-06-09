<h1 align="center">
  <img src="./android/app//src/main/res/mipmap-xxxhdpi/ic_launcher.webp" alt="ask-ai" width="200">
  <br>
  Ask.ai
</h1>

<p align="center">
  <a href="https://reactnative.dev/"><img src="https://img.shields.io/badge/Built_using-React_Native-blue.svg" alt="react-native"></a>
  <a href="https://huggingface.co/docs/transformers.js/index"><img src="https://img.shields.io/badge/Using-TransformersJS-yellow.svg" alt="transformersjs"></a>
</p>

> [!NOTE]
> Este proyecto es un `fork` de [`hans00/react-native-transformers-example`](https://github.com/hans00/react-native-transformers-example).

## Descripción

Este proyecto utiliza la librería [`huggingface/transformers.js`](https://github.com/huggingface/transformers.js) con algunas correcciones y polyfills para ser compatible con `react-native`.

> [!NOTE]
> En este momento (May 2025) la librería [`huggingface/transformers.js`](https://github.com/huggingface/transformers.js) no
> es compatible con react-native con algun lanzamiento estable, por ello son necesarios los polyfills.

Esta app te permite ejecutar un LLM en tu dispositivo localmente. Puedes usar un modelo de [`text-generation`](https://huggingface.co/tasks/text-generation) en forma de chat. Después de descargar el modelo, puedes usarlo incluso sin conexión a internet.

## Capturas de pantalla 📲

<img src="./docs/screenshots/home.jpg" width="230">
<img src="./docs/screenshots/download.jpg" width="230">
<img src="./docs/screenshots/downloading.jpg" width="230">
<img src="./docs/screenshots/downloaded.jpg" width="230">
<img src="./docs/screenshots/loading-llm.jpg" width="230">
<img src="./docs/screenshots/chat.jpg" width="230">

## Documentación 📕

### Cómo desarrollar

Clona el repositorio e instala las dependencias usando `yarn`. Hay un par de problemas cuando se utiliza `npm`, puedes probarlo si lo deseas.
