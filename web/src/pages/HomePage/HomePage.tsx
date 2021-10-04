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
      <main className="max-w-2xl mx-auto p-12 mt-10 bg-white shadow rounded-b">
        <h1 className="text-xl font-heading">
          Defect Explorer {process.env.PLANT_NAME}
        </h1>

        <p className="underline text-blue-500 font-content">
          <Link to={routes.adminHome()}>zum Admin Bereich</Link>
        </p>
      </main>
    </>
  )
}

export default HomePage
