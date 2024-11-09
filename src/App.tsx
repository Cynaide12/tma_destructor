import { miniApp, useLaunchParams, useSignal } from '@telegram-apps/sdk-react'
import { AppRoot } from '@telegram-apps/telegram-ui'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import PointsStore from "./store/PointsStore"
import { ErrorBoundary } from './components/ErrorBoundary'
import { routes } from './navigation/routes'
import { Layout } from './components/Layout/Layout'

function App() {
  const lp = useLaunchParams()
  const isDark = useSignal(miniApp.isDark)

  useEffect(() => {
    PointsStore.fetchData()
  }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: [...routes, { path: '*', element: <Navigate to="/" />, title: "Earn" },]

    }
  ])

  return (
    <AppRoot
      appearance={isDark ? "dark" : "light"}
      platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >
      <RouterProvider router={router} />
    </AppRoot>
  )
}

export default App
