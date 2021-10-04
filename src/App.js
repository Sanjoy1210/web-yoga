import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import CourseDetail from './components/CourseDetail/CourseDetail';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Pricing from './components/Pricing/Pricing';
import Courses from './components/Courses/Courses';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/courses/:id">
            <CourseDetail />
          </Route>
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
