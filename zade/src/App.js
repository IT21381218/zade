// import React, { useState, useEffect } from 'react';
// import Header from './components/Header';
// import Home from './components/Home';
// import Loading from './components/Loading';

// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const handleLoad = () => {
//       setIsLoading(false);
//     };

//     if (document.readyState === 'complete') {
//       handleLoad();
//     } else {
//       window.addEventListener('load', handleLoad);
//     }

//     return () => {
//       window.removeEventListener('load', handleLoad);
//     };
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Loading />
//       ) : (
//         <div>
//           <Header />
//           <Home />
//         </div>
//       )}
//     </>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
