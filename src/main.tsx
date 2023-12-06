
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import MainPage from './pages/MainPage/MainPage';
import Record_List_Page from './pages/Record_List_Page/Record_List_Page'
import Record_Page from './pages/Record_Page/Record_Page.tsx'
import { getBase } from '../path_config.ts';
import My_Navbar from './components/Navbar/Navbar'
import './main.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const router = createBrowserRouter([
    // {
    //     path: '/',
    //     element: <MainPage />
    // },
    {
        path: `${getBase()}/`,
        element: <Record_List_Page />
    },
    {
        path: `${getBase()}/record_of_animal/:id/`,
        element: <Record_Page />
    },
    {
        path: "*",
        element: <Record_List_Page />
    }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
   // <React.StrictMode>
        <Container>
            <Row id="header">
                <My_Navbar />
            </Row>
            <Row>
                <RouterProvider router={router} />
            </Row>
        </Container>
    //</React.StrictMode>,
)
