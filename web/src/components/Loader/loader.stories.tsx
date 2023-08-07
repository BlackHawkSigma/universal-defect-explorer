import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import Loader from './loader'

export default {
  title: 'Extras/Loader',
  component: Loader,
} as Meta

export const Dots: StoryFn = () => (
  <div className="h-64 w-64 shadow-2xl">
    <Loader />
  </div>
)
