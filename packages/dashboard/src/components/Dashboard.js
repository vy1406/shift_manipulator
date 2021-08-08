import React, { lazy, Suspense, useState, useEffect } from 'react';

const UsersLazy = lazy(() => import('./UsersApp'))
const ShiftsLazy = lazy(() => import('./ShiftsApp'))
const MessagesLazy = lazy(() => import('./MessagesApp'))


export default function Dashboard() {

  return (
          <div>
<<<<<<< HEAD
            <hr/>
              <Suspense fallback={<div>loading UsersLazy...</div>}>
                <UsersLazy />
              </Suspense>
              <hr/>
              <Suspense fallback={<div>loading ShiftsLazy...</div>}>
                <ShiftsLazy />
              </Suspense>
              <hr/>
=======
              <Suspense fallback={<div>loading UsersLazy...</div>}>
                <UsersLazy />
              </Suspense>
              <Suspense fallback={<div>loading ShiftsLazy...</div>}>
                <ShiftsLazy />
              </Suspense>
>>>>>>> bf4cf4954777594b4c5f41877eb797c309aecb18
              <Suspense fallback={<div>loading MessagesLazy...</div>}>
                <MessagesLazy />
              </Suspense>
          </div>
  );
}
