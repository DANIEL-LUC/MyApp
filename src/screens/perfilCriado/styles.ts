import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 360,
  },
  imageLogo: {
    marginTop: -20,
    marginBottom: 90
  },
  content: {
    marginTop: -10,
    paddingHorizontal: 15
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 16,
    fontFamily: theme.fonts.title700,
    lineHeight: 40
  },
  subtitle: {
    color: theme.colors.secondary100,
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 1,
    fontFamily: theme.fonts.title700,
    lineHeight: 40
  },
  subtitle2: {
    color: theme.colors.primary,
    fontSize: 15,
    textAlign: 'center',
    marginBottom:30,
    fontFamily: theme.fonts.text500,
    lineHeight: 40
  }
});