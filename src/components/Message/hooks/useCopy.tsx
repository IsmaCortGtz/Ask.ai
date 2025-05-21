import Clipboard from '@react-native-clipboard/clipboard';
import { Toast } from 'toastify-react-native';

export default function useCopy(text?: string) {
  const handleCopy = () => {
    if (text) {
      // Copy the text to clipboard
      Clipboard.setString(text);

      // Show a toast message or any other feedback to the user
      Toast.show({
        theme: 'dark',
        text1: 'Message copied to clipboard',
        iconFamily: 'AntDesign',
      });
    }
  };

  return { handleCopy };
}
