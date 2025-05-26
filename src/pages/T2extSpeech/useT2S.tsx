// @ts-expect-error: @huggingface/transformers is not a TypeScript library
import { pipeline } from '@huggingface/transformers';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useRef } from 'react';
import models from '@/constants/models';


export default function useT2S() {
  const pipeRef = useRef<any>(null);
  const [isPreparing, setIsPreparing] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [text, setText] = React.useState('Test number one.');

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  const handleCreateSpeech = () => {
    setIsLoading(true);

    (async () => {
      try {
        if (!pipeRef.current) { return; }
        const response = await pipeRef.current(text);

        console.log('Response:', response);

      } catch (e: Error | unknown) {
        if (e instanceof Error) { console.error('Error:', e.message, e.stack); }
      } finally {
        setIsLoading(false);
      }
    })();
  };

  useFocusEffect(useCallback(() => {
    (async () => {
      try {
        setIsPreparing(true);
        pipeRef.current = await pipeline(models.Text2Speech.type, models.Text2Speech.modelName, {
          /*           model_file_name: models.Text2Speech.fileName,
                    subfolder: models.Text2Speech.subdirectory,
                    quantized: false, */
          progress_callback: (event: any) => console.log('Progress:', event),
        });

        console.log('Pipeline loaded:', pipeRef.current);
        setIsPreparing(false);
      } catch (e: Error | unknown) {
        if (e instanceof Error) { console.error('Error:', e.message, e.stack); }
        if (pipeRef.current && typeof pipeRef.current.dispose === 'function') {
          pipeRef.current.dispose();
          console.log('Pipeline disposed');
        }
      }
    })();

    return () => {
      if (pipeRef.current && typeof pipeRef.current.dispose === 'function') {
        pipeRef.current.dispose();
        console.log('Pipeline disposed');
      }
    };
  }, []));

  return { isLoading, isPreparing, text, handleTextChange, handleCreateSpeech };
}
