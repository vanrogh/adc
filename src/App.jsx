import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// layouts
import RootLayout from './layouts/RootLayout';

// pages
import Services from './pages/Services'
import Contacts from './pages/Contacts'
import NotFound from './pages/NotFound'
import Home from './pages/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="contacts" element={<Contacts />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App
