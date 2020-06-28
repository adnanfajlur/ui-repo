export default (componentName: string) => ({
  content: `export interface ${componentName}Props {
  foo: string
}
`,
  extension: `.types.ts`,
})
