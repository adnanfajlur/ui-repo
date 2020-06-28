export default (componentName: string) => ({
  content: `import React from 'react'
import * as knobs from '@storybook/addon-knobs'
import ${componentName} from './${componentName}'

export default {
  title: '${componentName}',
  decorators: [knobs.withKnobs],
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
