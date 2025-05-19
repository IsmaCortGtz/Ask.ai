import theme from '@/constants/theme';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

interface ChatInputProps {
  onSend?: (message: string) => void;
  loading?: boolean;
}

export default function ChatInput({ onSend, loading }: ChatInputProps) {
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<TextInput>(null);

  const handleSend = () => {
    if (loading) { return; }
    if (value.trim() === '') { return; }
    if (onSend) { onSend(value.trim()); }
    setValue('');
    if (inputRef.current) { inputRef.current.blur(); }
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        onChange={(e) => setValue(e.nativeEvent.text)}
        value={value}
        onSubmitEditing={handleSend}
        style={styles.input}
        enterKeyHint="send"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Type your message..."
      />
      <TouchableOpacity style={styles.button} onPress={handleSend} disabled={loading}>
        <MaterialDesignIcons
          name={loading ? 'block-helper' : 'send'}
          size={20}
          color={'white'}
        />
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    gap: 10,
  },

  input: {
    flex: 1,
    backgroundColor: theme.accentSurface,
    borderRadius: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: theme.accentBorderColor,
    color: theme.primaryText,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.accentColor,
    aspectRatio: 1,
    height: '100%',
    borderRadius: 100,
  },
});
