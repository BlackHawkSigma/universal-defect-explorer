import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type GeometrieLayoutProps = {
  children: React.ReactNode
}

const GeometriesLayout = ({ children }: GeometrieLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.geometries()} className="rw-link">
            Geometrien
          </Link>
        </h1>
        <Link to={routes.newGeometrie()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> neue Geometrie anlegen
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default GeometriesLayout
