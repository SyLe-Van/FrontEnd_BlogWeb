import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '~/pages/home';
import Cinema from '~/pages/cinema';
import Fashion from '~/pages/fashion';
import Grooming from '~/pages/grooming';
import LifeStyle from '~/pages/lifestyle';
import axios from 'axios';
import { publicRoutes } from './routes';
import { Component } from 'react';
import { DefaultLayout } from '~/components/Layout';
import { Fragment } from 'react';
import { UserContextProvider } from '~/components/Popper/UserContext';
function App() {
    return (
        // <UserContextProvider>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Layout = route.layout === null ? Fragment : DefaultLayout;
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        // </UserContextProvider>
    );
}

export default App;
