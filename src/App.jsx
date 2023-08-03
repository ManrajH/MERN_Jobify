import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {HomeLayout, Landing, Login, Register, Error, DashboardLayout, AddJob,Stats, AllJobs,Profile,Admin} from './Pages'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          { path: 'stats', element: <Stats /> },
          {
            path: 'all-jobs',
            element: <AllJobs />,
          },

          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'admin',
            element: <Admin />,
          },
        ]
      },
    ]
  },
]);

const App = () => {
  return <RouterProvider router = {router}></RouterProvider>
}

export default App