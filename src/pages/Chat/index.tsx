import React from 'react';
import Layout from '@/components/Layout';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import Message from '@/components/Message';
import ChatInput from '@/components/ChatInput';
import useChat from './useChat';
import theme from '@/constants/theme';

export default function ChatPage() {
  const { isLoading, isPreparing, history, handleNewMessage } = useChat();

  return (
    <Layout asView>
      <ScrollView style={styles.container}>

        {isPreparing && (
          <View>
            <ActivityIndicator size="large" color={theme.accentColor} />
            <Text style={styles.text}>Loading LLM...</Text>
          </View>
        )}

        {history.map((message, idx) => {
          if (message.role === 'system') { return null; }
          return <Message key={idx} text={message.content} isUser={message.role === 'user'} />;
        })}

        {isLoading && <Message loading />}
      </ScrollView>

      <ChatInput onSend={handleNewMessage} loading={isLoading || isPreparing} />
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
