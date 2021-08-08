import React, { lazy, Suspense, useState, useEffect } from 'react';

const UsersLazy = lazy(() => import('./UsersApp'))
const ShiftsLazy = lazy(() => import('./ShiftsApp'))
const MessagesLazy = lazy(() => import('./MessagesApp'))


export default function Dashboard() {

  return (
          <div>
              <Suspense fallback={<div>loading UsersLazy...</div>}>
                <UsersLazy />
              </Suspense>
              <Suspense fallback={<div>loading ShiftsLazy...</div>}>
                <ShiftsLazy />
              </Suspense>
              <Suspense fallback={<div>loading MessagesLazy...</div>}>
                <MessagesLazy />
              </Suspense>
          </div>
  );
}
