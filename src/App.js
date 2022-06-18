import React, { Suspense } from 'react';

import './App.css';

const OtherComponent = React.lazy(() => import('./Header'));


const App = () => {

  return (
    <div className="App">
      <Suspense fallback={<div> Loading...</div>}>
        <OtherComponent />

      </Suspense>

    </div>
  );
}

export default App;
