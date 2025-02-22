import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Outlet } from 'react-router-dom';

export function App() {

  return (
    <MantineProvider>
      <Outlet/>
    </MantineProvider>
  )
}

