import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />
       <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
    </>
  );
}








// import React from "react";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Navbar from "./component/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// export default function App() {
//   return (
//     <>
//       <Navbar />
//          <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         </BrowserRouter>
      
//     </>
//   );
// }
