// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import AdminLayout from 'src/layouts/AdminLayout/AdminLayout'
import ArtikelsLayout from 'src/layouts/ArtikelsLayout/ArtikelsLayout'
import GeometriesLayout from 'src/layouts/GeometriesLayout'

import { AuswertungContextProvider } from './providers/context/AuswertungContext'

const Routes = () => {
  return (
    <Router>
      <Set wrap={AuswertungContextProvider}>
        <Route path="/auswertung" page={AuswertungPage} name="auswertung" />
      </Set>

      <Set wrap={AdminLayout}>
        <Route path="/admin" page={AdminHomePage} name="adminHome" />

        <Set wrap={ArtikelsLayout}>
          <Route path="/admin/allcodes" page={AllcodesPage} name="allcodes" />
          <Route path="/admin/artikels/{id:Int}/edit" page={ArtikelEditArtikelPage} name="editArtikel" />
          <Route path="/admin/artikels" page={ArtikelArtikelsPage} name="artikels" />
        </Set>

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
