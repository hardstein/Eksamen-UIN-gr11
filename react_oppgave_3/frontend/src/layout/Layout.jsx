import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main data-testid="layout" className='layout'>
        <Outlet />
    </main>
  )
}

export default Layout