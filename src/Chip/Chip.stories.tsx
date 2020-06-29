import React from 'react'
import * as knobs from '@storybook/addon-knobs'
import Chip from './Chip'
// import { Meta, Story, Preview } from '@storybook/addon-docs/blocks';

export default {
  title: 'Chip',
  decorators: [knobs.withKnobs],
}

export const Preview = () => {
  return (
    <div className="p-6">
      <Chip>Status</Chip>
    </div>
  )
}

export const Playground = () => {
  const children = knobs.text('children', 'Status')
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
