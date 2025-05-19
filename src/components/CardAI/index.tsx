import React from 'react';
import { Pressable, Text } from 'react-native';
import Animated, { BounceIn, BounceOut } from 'react-native-reanimated';
import styles from './styles';
import { useNavigation, NavigationProp } from '@react-navigation/native';

interface CardAIProps {
  title: string;
  downloaded?: boolean;
}

type RootStackParamList = {
  [key: string]: undefined;
};

export default function CardAI({
  title,
  downloaded,
}: CardAIProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Animated.View
      entering={BounceIn}
      exiting={BounceOut}
      style={styles.animator}
    >
      <Pressable
        onPress={() => {
          if (!downloaded) { return; }
          navigation.navigate(title);
        }}
        style={{ ...styles.container, ...(downloaded ? styles.containerDownloaded : {}) }}
      >
        <Text style={{ ...styles.text, ...(downloaded ? styles.textDownloaded : {}) }}>{title}</Text>
      </Pressable>
    </Animated.View >
  );
}
