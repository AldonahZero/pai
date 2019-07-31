module.exports = {
  // Why include an unnecessary character at the end of every line? Break the habit (automatically)!
  semi: false,
  // Trailing commas help with git merging and conflict resolution
  trailingComma: 'all',
  // Use single quote in all files. https://github.com/prettier/prettier/issues/1080#issuecomment-390363232
  singleQuote: true,
  jsxSingleQuote: true,
  overrides: [
    {
      files: '.editorconfig',
      options: { parser: 'yaml' },
    },
    {
      files: 'LICENSE',
      options: { parser: 'markdown' },
    },
  ],
}