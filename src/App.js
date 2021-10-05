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
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home />
            <Footer />
          </Route>
          <Route path="/home">
            <Header></Header>
            <Home />
            <Footer />
          </Route>
          <Route path="/about">
            <Header></Header>
            <About />
            <Footer />
          </Route>
          <Route exact path="/courses/:id">
            <Header></Header>
            <CourseDetail />
            <Footer />
          </Route>
          <Route path="/courses">
            <Header></Header>
            <Courses />
            <Footer />
          </Route>
          <Route path="/pricing">
            <Header></Header>
            <Pricing />
            <Footer />
          </Route>
          <Route path="/contact">
            <Header></Header>
            <Contact />
            <Footer />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
