// @ts-expect-error: @huggingface/transformers is not a TypeScript library
import { pipeline } from '@huggingface/transformers';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {

  const handlePress = async () => {
    let pipe;
    try {
      pipe = await pipeline('text-generation', 'Xenova/Qwen1.5-0.5B-Chat', {
        model_file_name: 'decoder_model_merged_quantized',
        progress_callback: (event: any) => {
          console.log('Progress:', event);
        },
      });

      const history = [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'Hi, How are you?' },
        { role: 'assistant', content: 'Hello! I\'m good, thank you for asking. How can I help you?' },
        { role: 'user', content: 'Can you explain me what is photosynthesis in a simple way?' },
      ];

      const result = await pipe(history, {
        max_new_tokens: 150,       // Máximo de tokens a generar
        temperature: 0.7,          // Controla la aleatoriedad (más bajo = más determinista)
        top_k: 50,                 // Considera los k tokens más probables
        do_sample: true,           // Necesario para que temperature y top_k tengan efecto
        no_repeat_ngram_size: 3, // Para evitar repeticiones (opcional)
        //eos_token_id: pipe.tokenizer.getTokenId('<|im_end|>'),
      });

      console.log('Result:', result);
    } catch (e: Error | unknown) {
      if (e instanceof Error) { console.error('Error:', e.message, e.stack); }
    }

    pipe?.dispose();
  };

  return (
    <View>
      <Text>Hola</Text>
      <Button title="Probar" onPress={handlePress} />
    </View>
  );
}
