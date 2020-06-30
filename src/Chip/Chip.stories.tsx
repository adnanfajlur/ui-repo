import React from 'react'
import * as knobs from '@storybook/addon-knobs'
import Chip from './Chip'

export default {
  title: 'Chip',
  decorators: [knobs.withKnobs],
  parameters: {
    componentSubtitle: 'This is Chip Component',
  },
}

export const Preview = () => {
  return (
    <div className="p-6 space-x-2">
      <Chip color="default">status</Chip>
      <Chip color="error">status</Chip>
      <Chip color="success">status</Chip>
      <Chip color="warning">status</Chip>
      <Chip color="info">status</Chip>
    </div>
  )
}

export const Playground = () => {
  const children = knobs.text('children', 'status')
  const variant = knobs.select('variant', ['default', 'outlined'], 'default')
  const size = knobs.select('size', ['xs','sm', 'md', 'lg'], 'sm')
  const color = knobs.select('color', ['default', 'error', 'success', 'warning', 'info'], 'default')
  return (
    <div className="p-6">
      <Chip
        variant={variant}
        size={size}
        color={color}
      >{children}</Chip>
    </div>
  )
}
