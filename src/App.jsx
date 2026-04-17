import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/home';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import FindAccountant from './pages/FindAccountant';
import Bookkeeping from './pages/Bookkeeping';
import TaxPreparation from './pages/TaxPreparation';
import Schedule from './pages/Schedule';
import QuickBooks from './pages/QuickBooks';
import ClientHub from './pages/ClientHub';

import Process from './pages/Process';
import Consulting from './pages/Consulting';
import Valuations from './pages/Valuations';
import WhyChoose from './pages/WhyChoose';
import OurPeople from './pages/OurPeople';
import Testimonials from './pages/Testimonials';    
import Blogs from './pages/Blogs';
import Videos from './pages/Videos';
import Guides from './pages/Guides';
import Checklists from './pages/Checklists';
import Questionnaires from './pages/Questionnaires';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ComingSoon from './pages/ComingSoon';

import NotFound from './pages/NotFound';

// Location Pages


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        \
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/find-accountant" element={<FindAccountant />} />
        <Route path="/bookkeeping" element={<Bookkeeping />} />
        <Route path="/tax" element={<TaxPreparation />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/quickbooks" element={<QuickBooks />} />
        <Route path="/client-hub" element={<ClientHub />} />

        <Route path="/process" element={<Process />} />
        <Route path="/our-process" element={<Process />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/valuations" element={<Valuations />} />
  

        <Route path="/why-choose-zn" element={<WhyChoose />} />
        <Route path="/our-people" element={<OurPeople />} />
        <Route path="/testimonials" element={<Testimonials />} />

     

        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
