import theme from '@/constants/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: theme.borderColor,
    backgroundColor: theme.primarySurface,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textContainer: {
    gap: 4,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.primaryText,
  },

  type: {
    fontSize: 18,
    color: theme.secondaryText,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontStyle: 'italic',
  },

  size: {
    fontSize: 16,
    color: theme.tertiaryText,
  },

  progressContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  progressIndicator: {
    fontSize: 12,
    color: theme.primaryText,
    textAlign: 'center',
  },

  progressBarContainer: {
    flex: 1,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.borderColor,
  },

  progressBar: {
    height: '100%',
    borderRadius: 5,
    backgroundColor: theme.accentColor,
  },
});
