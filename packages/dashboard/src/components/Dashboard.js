import React from 'react';

export default function Dashboard() {

  return (
          <div>
            <hr/>
              <Suspense fallback={<div>loading UsersLazy...</div>}>
                <UsersLazy />
              </Suspense>
              <hr/>
              <Suspense fallback={<div>loading ShiftsLazy...</div>}>
                <ShiftsLazy />
              </Suspense>
              <hr/>
              <Suspense fallback={<div>loading MessagesLazy...</div>}>
                <MessagesLazy />
              </Suspense>
          </div>
  );
}
