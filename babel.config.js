module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    ['module-resolver', {
      alias: {
        '@': './src',
        'buffer': '@craftzdog/react-native-buffer',
        'av': require.resolve('./aurora.js'),
      },
    }],
    'react-native-reanimated/plugin',
  ],
};
