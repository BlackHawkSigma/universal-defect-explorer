import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <>
      <Toaster />
      <header className="relative flex content-start gap-3 items-center py-4 px-8 bg-po-blue text-white font-heading">
        <h1 className="text-2xl hover:text-blue-200 transition duration-100">
          <Link to={routes.adminHome()}>Admin Bereich</Link>
        </h1>
        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.allcodes()}
              >
                Alle Codes
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.geometries()}
              >
                Geometrien
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="max-w-screen-2xl mx-auto p-12 bg-white shadow rounded-b">
        {children}
      </main>
    </>
  )
}

export default AdminLayout
