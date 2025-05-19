import theme from '@/constants/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  animator: {
    flex: 1,
    maxWidth: '50%',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  container: {
    aspectRatio: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.primarySurface,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.borderColor,
    padding: 20,
  },

  containerDownloaded: {
    borderColor: theme.accentBorderColor,
    backgroundColor: theme.accentSurface,
  },

  text: {
    fontSize: 16,
    color: theme.tertiaryText,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
  },

  textDownloaded: {
    fontSize: 22,
    color: theme.accentColor,
    fontStyle: 'normal',
    letterSpacing: 2,
  },
});
