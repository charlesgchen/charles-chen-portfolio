import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import Home from './Home.tsx';
import About from './About.tsx';
import Work from './Work.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { 
        index: true, 
        element: <Home /> 
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Work",
        element: <Work />,
      },

      
    ],

  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
