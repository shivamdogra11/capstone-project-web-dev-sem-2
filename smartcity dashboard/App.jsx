import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { FavouritesProvider } from './context/FavouritesContext'
import { FiltersProvider } from './context/FiltersContext'
import Layout from './components/Layout'
import Loader from './components/Loader'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const MapView = lazy(() => import('./pages/MapView'))
const Favourites = lazy(() => import('./pages/Favourites'))
const EventDetail = lazy(() => import('./pages/EventDetail'))
const Kanban = lazy(() => import('./pages/Kanban'))

export default function App() {
  return (
    <FavouritesProvider>
      <FiltersProvider>
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/map" element={<MapView />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/event/:id" element={<EventDetail />} />
              <Route path="/kanban" element={<Kanban />} />
            </Routes>
          </Suspense>
        </Layout>
      </FiltersProvider>
    </FavouritesProvider>
  )
}
