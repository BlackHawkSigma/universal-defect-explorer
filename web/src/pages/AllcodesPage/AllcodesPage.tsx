import { MetaTags } from '@redwoodjs/web'

import AllCodesCell from 'src/components/AllCodesCell'

const AllcodesPage = () => {
  return (
    <>
      <MetaTags
        title="Alle Codes"
        // description="Allcodes description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <AllCodesCell></AllCodesCell>
    </>
  )
}

export default AllcodesPage
