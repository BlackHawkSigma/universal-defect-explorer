import { MetaTags } from '@redwoodjs/web'

import ArtikelsCell from 'src/components/ArtikelsCell'

const ArtikelsPage = () => {
  return (
    <>
      <MetaTags
        title="Artikel"
        // description="Artikel description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>ArtikelsPage</h1>

      <ArtikelsCell></ArtikelsCell>
    </>
  )
}

export default ArtikelsPage
