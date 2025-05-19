import theme from '@/constants/theme';
import { LLM } from '@/interfaces/Downloads';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import useCard from './useCard';
import styles from './styles';

interface DownloadCardProps {
  model: LLM;
  area: string;
  onDownload: (area: string) => any;
  onDelete: (area: string) => any;
}

export default function DownloadCard({
  model,
  area,
  onDownload,
  onDelete,
}: DownloadCardProps) {

  const { handleDelete, handleDownload } = useCard(area, model, onDelete, onDownload);

  return (
    <View>
      <Pressable
        style={styles.container}
        onPress={handleDownload}
        onLongPress={handleDelete}
      >
        <View style={styles.header}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{model.modelName}</Text>
            <Text style={styles.type}>{model.type} - {area}</Text>
            <Text style={styles.size}>{model.size}</Text>
          </View>

          <MaterialDesignIcons
            name={model.status === 'downloading' ? 'timer-sand' : (model.status === 'completed' ? 'check-circle' : 'download')}
            size={35}
            color={model.status === 'completed' ? theme.accentColor : theme.primaryText}
          />
        </View>

        {model.status === 'downloading' && <View style={styles.progressContainer}>
          <Text style={styles.progressIndicator}>{model.progress?.toFixed(2)}%</Text>
          <View style={styles.progressBarContainer}>
            <View style={{ ...styles.progressBar, ...{ width: `${model.progress ?? 0}%` } }} />
          </View>
        </View>}
      </Pressable>
    </View>
  );
}
