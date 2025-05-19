// @ts-expect-error: @huggingface/transformers is not a TypeScript library
import { pipeline } from '@huggingface/transformers';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useRef } from 'react';
import { ChatMessage } from '@/interfaces/Chat';
import models from '@/constants/models';

export default function useChat() {
  const pipeRef = useRef<any>(null);
  const [isPreparing, setIsPreparing] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [history, setHistory] = React.useState<ChatMessage[]>([
    { role: 'system', content: 'You are a helpful assistant.' },
  ]);

  const handleNewMessage = (message: string) => {
    setIsLoading(true);
    const newHistory = [...history, { role: 'user', content: message } as ChatMessage];
    setHistory(newHistory);

    (async () => {
      try {
        if (!pipeRef.current) { return; }
        const response = await pipeRef.current(newHistory, {
          max_new_tokens: 100,
          temperature: 0.7,
          top_k: 50,
          do_sample: true,
        });

        setHistory(prev => [
          ...prev,
          response[0].generated_text.pop(),
        ]);

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
        pipeRef.current = await pipeline(models.Chat.type, models.Chat.modelName, {
          model_file_name: models.Chat.fileName,
          subfolder: models.Chat.subdirectory,
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

  return { isLoading, isPreparing, history, handleNewMessage };
}
