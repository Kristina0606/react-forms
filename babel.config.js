module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    // JSX
    '@babel/preset-react',
    // TypeScript
    '@babel/preset-typescript',
  ],
};
