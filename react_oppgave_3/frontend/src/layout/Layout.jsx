import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main className='layout'>
        <Outlet />
    </main>
  )
}

export default Layout