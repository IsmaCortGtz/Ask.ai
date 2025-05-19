import { LLM } from '@/interfaces/Downloads';
import { Alert } from 'react-native';

export default function useCard(area: string, model: LLM, deleteCallback: Function, downloadCallback: Function) {
  const handleDownload = () => {
    if (model.downloaded) { return; }
    if (model.status !== 'missing') { return; }

    Alert.alert(
      'Download LLM',
      'Are you sure you want to download \n"' + model.modelName + '"?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => downloadCallback(area),
        },
      ]
    );
  };


  const handleDelete = () => {
    if (model.status !== 'completed') { return; }

    Alert.alert(
      'Delete LLM',
      'Are you sure you want to delete \n"' + model.modelName + '"?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => deleteCallback(area),
        },
      ]
    );
  };

  return { handleDownload, handleDelete };
}
