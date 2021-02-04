// Core
import React from 'react';
// Router
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Components
import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
// Styles
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import './App.css';

function App() {
    return (
        <Router>
            <Container>
                <MenuBar />
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Container>
        </Router>
    );
}

export default App;
