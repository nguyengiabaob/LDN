import React, { Suspense } from 'react'
import { Navigate, Redirect, Route, Routes, Switch, useLocation } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'

const AppContent = () => {
   const url = useLocation().pathname;
   console.log(url);
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component {...props} />
                    </>
                  )}
                />
              )
            )
          })}
                  {/* { url  !=="/LDN/Admin" ? <Navigate  to={url} replace /> : <Navigate  to="/LDN/Admin/dashboard" replace /> } */}
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
