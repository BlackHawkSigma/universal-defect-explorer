import { Link, routes } from '@redwoodjs/router'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <>
      <header>
        <h1>Admin Bereich</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.allcodes()}>Alle Codes</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default AdminLayout
