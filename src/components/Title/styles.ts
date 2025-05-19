import theme from '@/constants/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  base: {
    color: theme.primaryText,
    borderBottomWidth: 1,
    borderBottomColor: theme.accentColor,
    fontSize: 34,
    fontWeight: 'bold',
    paddingBottom: 4,
    marginBottom: 8,
  },

  h1: {
    fontSize: 34,
  },

  h2: {
    fontSize: 30,
  },

  h3: {
    fontSize: 26,
  },
});
