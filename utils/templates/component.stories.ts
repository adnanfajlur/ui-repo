export default (componentName: string) => ({
  content: `import React from 'react'
import ${componentName} from './${componentName}'

export default {
  title: '${componentName}'
}

export const Preview = () => {
  return (
    <div className="p-6">
      <${componentName} foo="Preview" />
    </div>
  )
}

export const Playground = () => {
  return (
    <div className="p-6">
      <${componentName} foo="Playground" />
    </div>
  )
}
`,
  extension: `.stories.tsx`,
})
