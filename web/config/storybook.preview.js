import * as React from 'react'

import { I18nextProvider } from 'react-i18next'
import i18n from 'web/src/i18n'
import { CustomizationProvider } from 'web/src/providers/context/CustomizationContext'

import '../src/scaffold.css'

/** @type { import("@storybook/csf").GlobalTypes } */
export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'de',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'de', right: 'ᴅᴇ', title: 'Deutsch' },
        { value: 'en', right: '🇺🇸', title: 'English' },
      ],
    },
  },
  sidesPerSkid: {
    name: 'Sides per Skid',
    description: 'Seiten pro Skid',
    defaultValue: 2,
    toolbar: {
      icon: 'cog',
      items: [
        { value: 1, left: '1', title: 'Einseitig' },
        { value: 2, left: '2', title: 'Doppelseitig' },
      ],
    },
  },
}

/**
 * We're following Storybook's naming convention here. See for example
 * https://github.com/storybookjs/addon-kit/blob/main/src/withGlobals.ts
 * Unfortunately that will make eslint complain, so we have to disable it when
 * using a hook below
 *
 * @param { import("@storybook/addons").StoryFn} StoryFn
 * @param { import("@storybook/addons").StoryContext} context
 * @returns a story wrapped in an I18nextProvider
 */
const withI18n = (StoryFn, context) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    i18n.changeLanguage(context.globals.locale)
  }, [context.globals.locale])

  return (
    <I18nextProvider i18n={i18n}>
      <StoryFn />
    </I18nextProvider>
  )
}

const withCustomizationProvider = (Story, context) => {
  const doubleSidedSkids = context.globals.sidesPerSkid === 2

  return (
    <CustomizationProvider doubleSidedSkids={doubleSidedSkids}>
      <Story />
    </CustomizationProvider>
  )
}

export const decorators = [withI18n, withCustomizationProvider]
