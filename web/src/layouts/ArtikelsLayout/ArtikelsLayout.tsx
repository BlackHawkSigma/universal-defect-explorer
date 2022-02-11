import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type ArtikelsLayoutProps = {
  children?: React.ReactNode
}

const ArtikelsLayout = ({ children }: ArtikelsLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.artikels()} className="rw-link">
            Artikel
          </Link>
        </h1>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ArtikelsLayout
