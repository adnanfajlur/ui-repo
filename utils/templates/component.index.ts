export default (componentName: string) => ({
  content: `export { default } from './${componentName}'
`,
  extension: `.ts`,
})