import ReactDOM from 'react-dom/client'

// Styles
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
  }
})

// Routes
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages
import Root from './pages/SignIn'
import ErrorPage from './pages/ErrorPage'
import Dashboard from './pages/Dashboard'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <RouterProvider router={router} />
    </CssBaseline>
  </ThemeProvider >
)
