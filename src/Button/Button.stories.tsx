import React from 'react'
import * as knobs from '@storybook/addon-knobs'
import Button from './Button'

export default {
  title: 'Button',
  decorators: [knobs.withKnobs]
}

export const Preview = () => {
  return (
    <div className="p-6">
    <p className="p-2 my-4 bg-gray-200 border-l-8 border-teal-500">Variant</p>
      <div>
        <Button variant="default">default</Button> <span className="mr-2" />
        <Button variant="outlined">outlined</Button>
      </div>

      <p className="p-2 my-4 bg-gray-200 border-l-8 border-teal-500">Size</p>
      <div>
        <Button size="sm">small - sm</Button> <span className="mr-2" />
        <Button size="md">medium - md - default</Button> <span className="mr-2" />
        <Button size="lg">large - lg</Button>
      </div>

      <p className="p-2 my-4 bg-gray-200 border-l-8 border-teal-500">Color</p>
      <div>
        <Button color="default">default</Button> <span className="mr-2" />
        <Button color="primary">primary</Button> <span className="mr-2" />
        <Button color="error">error</Button>
      </div>
    </div>
  )
}

export const Playground = () => {
  const children = knobs.text('children', 'Hello World')
  const variant = knobs.select('variant', ['default', 'outlined'], 'default')
  const size = knobs.select('size', ['sm', 'md', 'lg'], 'md')
  const color = knobs.select('color', ['default', 'primary', 'error'], 'default')

  return (
    <div className="p-6">
      <Button
        variant={variant}
        size={size}
        color={color}
      >
        {children}
      </Button>
    </div>
  )
}
