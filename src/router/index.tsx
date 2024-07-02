import React, { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

// import  Home  from '@/views/home'
// import  Demo  from '@/views/demo'
const Home = lazy(() => import('@/views/home'))
const Demo = lazy(() => import('@/views/demo'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/demo',
    element: <Demo />
  },
  {
    path: '/home',
    element: <Home />
  }
]

export default routes
