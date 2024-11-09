import { miniApp, useLaunchParams, useSignal } from '@telegram-apps/sdk-react'
import { AppRoot } from '@telegram-apps/telegram-ui'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Targets } from './app/Targets/Targets'
import { TopBar } from './components/TopBar/TopBar'
import { BottomBar } from './components/BottomBar/BottomBar'
import { Home } from './app/Home/Home'
import { useEffect } from 'react'
import PointsStore from "./store/PointsStore"

function App() {
  const lp = useLaunchParams()
  const isDark = useSignal(miniApp.isDark)

  useEffect(() => {
      PointsStore.fetchData()
  }, [])

  return (
    <AppRoot
      appearance={isDark ? "dark" : "light"}
      platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >
      <TopBar />
      <HashRouter future={{ v7_startTransition: true }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/targets" element={<Targets />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
      <BottomBar />
    </AppRoot>
  )
}

export default App
