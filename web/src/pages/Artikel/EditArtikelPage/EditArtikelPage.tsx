import { MetaTags } from '@redwoodjs/web'

import EditArtikelCell from 'src/components/Artikel/EditArtikelCell'

type EditArtikelPageProps = {
  id: number
}

const EditArtikelPage = ({ id }: EditArtikelPageProps) => {
  return (
    <>
      <MetaTags
        title="EditArtikel"
        // description="EditArtikelPage description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <EditArtikelCell id={id} />
    </>
  )
}

export default EditArtikelPage
