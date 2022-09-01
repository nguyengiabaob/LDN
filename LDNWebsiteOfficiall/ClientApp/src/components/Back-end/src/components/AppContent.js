import React, { Suspense } from 'react'
import { Navigate, Redirect, Route, Routes, Switch, useLocation } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'

const AppContent = () => {
   const url = useLocation().pathname;
   console.log(url);
  return (
    <CContainer xl>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            // const NewComponent = NewHOC(Movie)
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  // exact={route.exact}
                  name={route.name}
                  element={ 
                   
                      <route.component  />
                    
                  }
                />
              )
            )
          })}
          <Route path="*" element={<Navigate replace to="/LDN/admin/dashboard" />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
