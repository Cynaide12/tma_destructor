import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {retrieveLaunchParams } from "@telegram-apps/sdk-react";
import { Root } from './components/Root.tsx';
import { init } from './init.ts';
import "./main.css"
import '@telegram-apps/telegram-ui/dist/styles.css';
import { EnvUnsupported } from './components/EnvUnsupported.tsx';

const root = createRoot(document.getElementById('root')!)

try {
  init(retrieveLaunchParams().startParam !== 'debug' || import.meta.env.DEV);

  root.render(
    <StrictMode>
      <Root />
    </StrictMode>
  )
} catch (e) {
  root.render(<EnvUnsupported/>)
}
