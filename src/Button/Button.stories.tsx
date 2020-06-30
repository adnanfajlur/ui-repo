import React from 'react'
import * as knobs from '@storybook/addon-knobs'
import { decorate, actions } from '@storybook/addon-actions'
import Button from './Button'

export default {
  title: 'Button',
  decorators: [knobs.withKnobs]
}
const buttonMethod = decorate([args => args.slice(0, 1)]);

export const Preview = () => {
  return (
    <div className="p-6">
    <p className="p-2 my-4 bg-gray-200 border-l-8 border-teal-500">Variant</p>
      <div>
        <Button variant="default" onMouseOver={buttonMethod.action('OnMouseOver')} onClick={buttonMethod.action('button-default-click')}>default</Button> <span className="mr-2" />
        <Button variant="outlined" onClick={buttonMethod.action('button-outlined-click')}>outlined</Button>
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
        onMouseOver={buttonMethod.action('button-outlined-onOver')}
        onClick={buttonMethod.action('button-outlined-click')}
        variant={variant}
        size={size}
        color={color}
      >
        {children}
      </Button>
    </div>
  )
}
