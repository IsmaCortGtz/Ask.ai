import theme from '@/constants/theme';
import React from 'react';
import { ActivityIndicator, Pressable } from 'react-native';
import Animated, { BounceInLeft, BounceInRight } from 'react-native-reanimated';
import useCopy from './hooks/useCopy';
import styles from './styles';

interface MessageProps {
  text?: string;
  isUser?: boolean;
  loading?: boolean;
}

export default function Message({ text, isUser, loading }: MessageProps) {
  const { handleCopy } = useCopy(text);

  return (
    <Pressable
      style={{ ...styles.pressable, ...(isUser ? styles.pressableUser : {}) }}
      onLongPress={handleCopy}
    >
      <Animated.Text
        style={{ ...styles.text, ...(isUser ? styles.textUser : {}) }}
        entering={isUser ? BounceInLeft : BounceInRight}
      >
        {loading && <ActivityIndicator size="small" color={theme.primaryText} />}
        {!loading && text?.trim()}
      </Animated.Text>
    </Pressable>
  );
}
