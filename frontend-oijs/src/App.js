import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/authorization/Login';
import Register from './pages/authorization/Register';
import Archives from './pages/Archives';
import About from './pages/About';
import Journal from './pages/journal/Journal';
import Editorial from './pages/journal/Editorial';
import AboutJournal from './pages/journal/AboutJournal';
import Ethics from './pages/journal/Ethics';
import Guidelines from './pages/journal/Guidelines';
import Issue from './pages/journal/Issue';
import Subscriptions from './pages/journal/Subscriptions';
import Submission from './pages/submission/Submission';
import Review from './pages/review/Review';
import ReviewArticle from './pages/review/ReviewArticle';
import SubmissionArchives from './pages/submission/SubmissionArchives';
import Submit from './pages/submission/Submit';
import EditSubmission from './pages/submission/EditSubmission';
import EditorIssue from './pages/editor/EditorIssue';
import EditorSettings from './pages/editor/EditorSettings';
import Article from './pages/editor/article/Article';
import HostJournal from './pages/admin/HostJournal';
import RequestUser from './pages/admin/RequestUser';
import Setting from './pages/admin/Setting';
import CreateJournal from './pages/admin/CreateJournal';
import EditJournal from './pages/admin/EditJournal';
import Editor from './pages/editor/Editor';
import Profile from './pages/profile/Profile';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/archives' element={<Archives />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/admin/journal' element={<HostJournal/>}/>
        <Route path='/admin/journal/create' element={<CreateJournal/>}/>
        <Route path='/admin/journal/edit/:path' element={<EditJournal/>}/>
        <Route path='/admin/user' element={<RequestUser/>}/>
        <Route path='/admin/setting' element={<Setting/>}/>
        <Route path='/:journal' element={<Journal/>}/>
        <Route path='/:journal/about' element={<AboutJournal/>}/>
        <Route path='/:journal/editorial' element={<Editorial/>}/>
        <Route path='/:journal/ethics' element={<Ethics/>}/>
        <Route path='/:journal/guidelines' element={<Guidelines/>}/>
        <Route path='/:journal/issue' element={<Issue/>}/>
        <Route path='/:journal/subscription' element={<Subscriptions/>}/>
        <Route path='/submission' element={<Submission/>}/>
        <Route path='/submission/archives' element={<SubmissionArchives/>}/>
        <Route path='/submission/submit' element={<Submit/>}/>
        <Route path='/submission/edit/:id' element={<EditSubmission/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/review/:article_id' element={<ReviewArticle/>}/>
        <Route path='/:journal/submission' element={<Editor/>}/>
        <Route path='/:journal/manageIssue' element={<EditorIssue/>}/>
        <Route path='/:journal/settings' element={<EditorSettings/>}/>
        <Route path='/:journal/submission/:article_id' element={<Article/>}/>
        


      </Routes>
    </BrowserRouter>
  );
}

export default App;
