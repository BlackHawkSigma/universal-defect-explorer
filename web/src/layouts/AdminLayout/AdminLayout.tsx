import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <>
      <Toaster />
      <header className="bg-po-blue font-heading relative flex content-start items-center gap-3 px-8 py-4 text-white">
        <h1 className="text-2xl transition duration-100 hover:text-blue-200">
          <Link to={routes.adminHome()}>Admin Bereich</Link>
        </h1>
        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <Link
                className="rounded px-4 py-2 transition duration-100 hover:bg-blue-600"
                to={routes.allcodes()}
              >
                Alle Codes
              </Link>
            </li>
            <li>
              <Link
                className="rounded px-4 py-2 transition duration-100 hover:bg-blue-600"
                to={routes.geometries()}
              >
                Geometrien
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="mx-auto max-w-screen-2xl rounded-b bg-white p-12 shadow">
        {children}
      </main>
    </>
  )
}

export default AdminLayout
