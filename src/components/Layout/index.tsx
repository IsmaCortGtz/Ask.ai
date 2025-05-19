import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';

export default function Layout({ children, asView }: { children: React.ReactNode, asView?: boolean }) {
  if (asView) {
    return (
      <View style={{ ...styles.container, ...styles.contentContainer }}>
        {children}
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {children}
    </ScrollView>
  );
}
