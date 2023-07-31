import './App.css';
import Home from './components/Home';
import Jobs from './components/Jobs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostJob from './components/PostJob';
import Contactus from './components/Contactus';
import Comments from './components/Discussion';
import ErrorPage from './components/ErrorPage';
import ApplyJobs from './components/ApplyJobs';
import Login from './components/login';
import Signup from './components/signup';
import SaveJobs from './SaveJobs';
import FeedBack from './components/feedback';

import RegistrationForm from './RegistrationForm';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<RegistrationForm />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/save-job" element={<SaveJobs />} />
            <Route path="/apply-jobs" element={<ApplyJobs />} />
            <Route path="/contact-us" element={<Contactus />} />
            <Route path="/discussion" element={<Comments />} />
            <Route path="/feedback" element={<FeedBack/>} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
