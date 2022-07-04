import { useTranslation } from 'react-i18next'
import type { EditArtikelById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ArtikelForm from 'src/components/Artikel/ArtikelForm/ArtikelForm'

export const QUERY = gql`
  query EditArtikelById($id: Int!) {
    artikel(id: $id) {
      id
      artikelcode
      artikelbezeichnung
      GeometieId
    }

    geometries {
      id
      Bezeichnung
    }
  }
`

const UPDATE_ARTIKEL_MUTATION = gql`
  mutation UpdateArtikelMutation($id: Int!, $input: SetArtikelGeoInput!) {
    setArtikelGeometrie(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => {
  const { t } = useTranslation()
  return <div>{t('Durchsuche Datenbank...')}</div>
}

export const Empty = ({ id }) => {
  return <div>keinen Artikel mit ID &quot;{id}&quot; gefunden</div>
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">Error: {error.message}</div>
)

export const Success = ({
  artikel,
  geometries,
}: CellSuccessProps<EditArtikelById>) => {
  const { t } = useTranslation()
  const [updateArtikel, { loading, error }] = useMutation(
    UPDATE_ARTIKEL_MUTATION,
    {
      onCompleted: () => {
        console.log('completet')

        toast.success(t('Geometrie aktualisiert'))
        navigate(routes.allcodes())
      },
    }
  )

  const onSave = ({ geoId }) => {
    updateArtikel({
      variables: { id: artikel.id, input: { GeometieId: geoId } },
    })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-seconadry">
          {t('Geometire Zuordnung Berabeiten')}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ArtikelForm
          artikel={artikel}
          geometries={geometries}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
