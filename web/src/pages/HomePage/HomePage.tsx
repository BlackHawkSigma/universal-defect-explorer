import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Start"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <main className="mx-auto mt-10 max-w-2xl rounded-b bg-white p-12 shadow">
        <h1 className="font-heading text-xl">
          Defect Explorer {process.env.PLANT_NAME}
        </h1>

        <p className="font-content text-blue-500 underline">
          <Link to={routes.auswertung()}>zur Auswertung</Link>
        </p>

        <p className="font-content text-blue-500 underline">
          <Link to={routes.adminHome()}>zum Admin Bereich</Link>
        </p>
      </main>
    </>
  )
}

export default HomePage
