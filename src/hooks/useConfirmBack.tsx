import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Alert } from 'react-native';

export default function useConfirmBack() {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      // Previene que la navegación se realice inmediatamente
      e.preventDefault();

      Alert.alert(
        'Go back?',
        'If you go back, the LLM will be unloaded.',
        [
          { text: 'Cancel', style: 'cancel', onPress: () => { } },
          {
            text: 'Go back',
            style: 'destructive',
            onPress: () => {
              // Permite la navegación
              navigation.dispatch(e.data.action);
            },
          },
        ]
      );
    });

    return unsubscribe;
  }, [navigation]);
}
