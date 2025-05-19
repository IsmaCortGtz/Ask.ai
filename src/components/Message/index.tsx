import theme from '@/constants/theme';
import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import Animated, { BounceInLeft, BounceInRight } from 'react-native-reanimated';

interface MessageProps {
  text?: string;
  isUser?: boolean;
  loading?: boolean;
}

export default function Message({ text, isUser, loading }: MessageProps) {
  return (
    <Animated.Text
      style={{ ...styles.text, ...(!isUser ? styles.textNoUser : {}) }}
      entering={isUser ? BounceInRight : BounceInLeft}
    >
      {loading && <ActivityIndicator size="small" color={theme.BackgroundColor} />}
      {!loading && text}
    </Animated.Text>
  );
}

const styles = StyleSheet.create({
  text: {
    maxWidth: '80%',
    width: 'auto',
    alignSelf: 'flex-end',
    fontSize: 16,
    lineHeight: 21,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: theme.borderColor,
    borderWidth: 1,
    backgroundColor: theme.primarySurface,
    color: theme.primaryText,
    elevation: 5,
    shadowColor: theme.borderColor,
    marginBottom: 15,
  },

  textNoUser: {
    backgroundColor: theme.accentColor,
    color: theme.BackgroundColor,
    alignSelf: 'flex-start',
    borderColor: theme.accentColor,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    fontSize: 17,
  },
});
