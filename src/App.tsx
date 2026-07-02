import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import LoadingProvider from './context/LoadingProvider'

const MainContainer = lazy(() => import('./components/MainContainer'))
const WorkPage = lazy(() => import('./components/WorkPage'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LoadingProvider>
              <Suspense fallback={null}>
                <MainContainer />
              </Suspense>
            </LoadingProvider>
          }
        />
        <Route
          path="/work"
          element={
            <Suspense fallback={null}>
              <WorkPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
