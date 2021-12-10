import React from 'react'
import { Meta, Story } from '@storybook/react'

import Loader from './loader'

export default {
  title: 'Extras/Loader',
  component: Loader,
} as Meta

export const Dots: Story = () => <Loader />
