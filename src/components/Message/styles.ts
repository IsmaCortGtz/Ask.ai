import theme from '@/constants/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  pressable: {
    marginBottom: 15,
    maxWidth: '80%',
    width: 'auto',
    alignSelf: 'flex-start',
  },

  pressableUser: {
    alignSelf: 'flex-end',
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: theme.borderColor,
    borderWidth: 1,
    backgroundColor: theme.tertiarySurface,
    color: theme.primaryText,
    elevation: 5,
    shadowColor: theme.borderColor,
  },

  textUser: {
    backgroundColor: theme.secondaryAccentColor,
    color: theme.primaryText,
    borderWidth: 0,
  },
});
