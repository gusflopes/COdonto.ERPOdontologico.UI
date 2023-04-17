
import { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/layout/Header'
import NavBar from '../../components/layout/NavBar'
import { AuthContext } from '../../context/AuthContext'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard({ children}: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const {login, logout, token} = useContext(AuthContext)
  useEffect(() => {
    if (!token) {
      logout()
    }
  }, [])

  return (
    <>
      <div>
        <NavBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="lg:pl-20">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* FINAL */}

          <main className="xl:pl-96">
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
               <Outlet />
            </div>
          </main>
        </div>

        <aside className="fixed bottom-0 left-20 top-16 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
          {/* Secondary column (hidden on smaller screens) */}
        </aside>
      </div>
    </>
  )
}
