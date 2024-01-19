import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import Record_List_Page from './pages/Record_List_Page/Record_List_Page.tsx';
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import OrderPage from "./pages/AnimalPage/AnimalPage.tsx";
import Order_List_Page from "./pages/Animal_List_Page/Animal_List_Page.tsx";
import Record_Page from "./pages/Record_Page/Record_Page.tsx";
import EditPage from "./pages/EditPage/EditPage.tsx";
import LogoutPage from "./pages/LogoutPage/LogoupPage.tsx";
import Record_List_Table from "./pages/Record_List_Page/Record_List_Page copy.tsx";
import './main.css'


import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from "./store/store.ts";

import { Container, Row } from "react-bootstrap";
import "./main.css";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
    <QueryClientProvider client={ queryClient }>
        <Provider store={ store }>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Container>
                    <Row>
                        <Routes>
                            <Route path="records/"        element={ <Record_List_Page /> } />
                            <Route path="login/"        element={ <LoginPage /> } />
                            <Route path="logout/"        element={ <LogoutPage /> } />
                            <Route path="table_view/"        element={ <Record_List_Table /> } />
                            <Route path="register/"        element={ <RegistrationPage /> } />
                            <Route path="animals/:id"        element={ <OrderPage /> } />
                            <Route path="records/:id"        element={ <Record_Page /> } />
                            <Route path="animals"        element={ <Order_List_Page /> } />
                            <Route path="edit/:identifier"        element={ <EditPage /> } />
                        </Routes>
                    </Row>
                </Container>
            </BrowserRouter>
            </PersistGate>
        </Provider>
    </QueryClientProvider>
);