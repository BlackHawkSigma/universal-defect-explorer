// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import GeometriesLayout from 'src/layouts/GeometriesLayout'

import AdminLayout from './layouts/AdminLayout/AdminLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={AdminLayout}>
        <Route path="/admin" page={AdminHomePage} name="adminHome" />
        <Route path="/admin/allcodes" page={AllcodesPage} name="allcodes" />

        <Set wrap={GeometriesLayout}>
          <Route path="/admin/geometries/new" page={GeometrieNewGeometriePage} name="newGeometrie" />
          <Route path="/admin/geometries/{id:Int}/edit" page={GeometrieEditGeometriePage} name="editGeometrie" />
          <Route path="/admin/geometries/{id:Int}" page={GeometrieGeometriePage} name="geometrie" />
          <Route path="/admin/geometries" page={GeometrieGeometriesPage} name="geometries" />
        </Set>
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
