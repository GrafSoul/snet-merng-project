// Core
import React from 'react';
// Router
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Components
import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';
// Auth
import { AuthProvider } from './context/auth';
import AuthRoute from './utils/AuthRoute';
// Styles
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Container>
                    <MenuBar />
                    <Route path="/" exact component={Home} />
                    <AuthRoute path="/login" exact component={Login} />
                    <AuthRoute path="/register" exact component={Register} />
                    <Route path="/posts/:postId" exact component={SinglePost} />
                </Container>
            </Router>
        </AuthProvider>
    );
}

export default App;
