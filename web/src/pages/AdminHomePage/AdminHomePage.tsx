import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AdminHomePage = () => {
  return (
    <>
      <MetaTags
        title="Admin"
        // description="AdminHome description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <p className="text-lg font-heading">verfügbare Funktionen</p>

      <ul>
        <li className="underline text-blue-500 font-content">
          <Link to={routes.allcodes()}>Alle Codes auflisten</Link>
        </li>
        <li className="underline text-blue-500 font-content">
          <Link to={routes.geometries()}>Geometrien bearbeiten</Link>
        </li>
      </ul>
    </>
  )
}

export default AdminHomePage
