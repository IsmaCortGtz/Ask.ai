import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

interface TitleProps {
  title: string;
  type?: 'h1' | 'h2' | 'h3';
}

export default function Title({ title, type }: TitleProps) {
  return (
    <Text style={{ ...styles.base, ...styles[type ?? 'h1'] }}>
      {title}
    </Text >
  );
}
