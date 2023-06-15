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

      <p className="font-heading text-lg">verfügbare Funktionen</p>

      <ul>
        <li className="font-content text-blue-500 underline">
          <Link to={routes.allcodes()}>Alle Codes auflisten</Link>
        </li>
        <li className="font-content text-blue-500 underline">
          <Link to={routes.geometries()}>Geometrien bearbeiten</Link>
        </li>
      </ul>
    </>
  )
}

export default AdminHomePage
