import './App.scss';
import Navbar from './components/Navbar';

import Hero from './components/Hero';
import Brands from './components/Brands';
import SearchCourses from './components/SearchCourses';
import Courses from './components/Courses';
import PopularCourses from './components/PopularCourses';
import Tearchers from './components/Tearchers';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';


function App() {
    return (
        <div id='container'>
            <Navbar />
            <Hero />
            {/* <Brands /> */}
            <SearchCourses />
            <Courses />
            <PopularCourses />
            <Tearchers />

            <div id='bottom-section'>
                <Testimonials />
                <Contact />
                <Footer />
                {/* <Copyright /> */}
            </div>
        </div>
    );
}

export default App;