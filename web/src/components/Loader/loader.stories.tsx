import React from 'react'

import { Meta, Story } from '@storybook/react'

import Loader from './loader'

export default {
  title: 'Extras/Loader',
  component: Loader,
} as Meta

export const Dots: Story = () => (
  <div className="h-64 w-64 shadow-2xl">
    <Loader />
  </div>
)
