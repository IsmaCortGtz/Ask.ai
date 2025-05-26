import React from 'react';
import Layout from '@/components/Layout';
import { ActivityIndicator, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import useChat from './useT2S';
import theme from '@/constants/theme';
import useConfirmBack from '@/hooks/useConfirmBack';

export default function T2extSpeechPage() {
  useConfirmBack();
  const { isLoading, isPreparing, handleCreateSpeech } = useChat();

  return (
    <Layout asView>
      <ScrollView style={styles.container}>

        {isPreparing || isLoading ? (
          <View>
            <ActivityIndicator size="large" color={theme.accentColor} />
            <Text style={styles.text}>Loading LLM...</Text>
          </View>
        ) : (
          <Button title="Probar" onPress={handleCreateSpeech} />
        )}
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    color: theme.primaryText,
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
