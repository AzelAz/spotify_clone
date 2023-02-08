import React from 'react'
import { Route, Routes } from 'react-router-dom'

//Data
import { dataRouter } from './dataRouter'

//Layout
import MainLayout from '../layout'

const Router = () => {
  return (
        <Routes>

            {
                dataRouter.map((route) => {
                    const innerRoute = (
                        <MainLayout {...route}>
                            <route.component />
                        </MainLayout>
                    )

                    return (
                        <Route key={route.url} path={route.url} element={innerRoute} />
                    )
                })
            }

        </Routes>
    
  )
}

export default Router
