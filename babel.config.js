module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',  // Using metro preset for React Native
  ],
  plugins: [
    '@babel/plugin-transform-runtime',          // Ensure this plugin is added
    'react-native-reanimated/plugin',           // Required for react-native-reanimated
    ['@babel/plugin-transform-private-methods', { loose: true }],  // Set 'loose' mode for private methods
    ['@babel/plugin-transform-class-properties', { loose: true }], // Ensure class properties also use 'loose' mode
    ['@babel/plugin-transform-private-property-in-object', { loose: true }] // Ensure private properties use 'loose' mode
  ],
};
