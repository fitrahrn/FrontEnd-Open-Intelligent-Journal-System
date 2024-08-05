import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/authorization/Login';
import Register from './pages/authorization/Register';
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
import ManageUser from './pages/admin/ManageUser';
import RoleRequest from './pages/admin/RoleRequest';
import Setting from './pages/admin/Setting';
import CreateJournal from './pages/admin/CreateJournal';
import EditJournal from './pages/admin/EditJournal';
import Editor from './pages/editor/Editor';
import Profile from './pages/profile/Profile';
import ViewArticle from './pages/journal/ViewArticle';
import ViewPDF from './pages/journal/ViewPDF';
import Predict from './pages/Predict';
import AuthorRequest from './pages/editor/AuthorRequest';
import AuthorProfile from './pages/profile/AuthorProfile';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import SubmissionDetail from './pages/submission/SubmissionDetail';
import Dashboard from './pages/Dashboard';
import IssueArticle from './pages/journal/IssueArticle';
import EditorAddIssue from './pages/editor/EditorAddIssue';
import IssueCurrent from './pages/journal/IssueCurent';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
Chart.register(CategoryScale);
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path='/' element={<Home />}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/journalfinder' element={<Predict />}/>
        <Route path='/admin/journal' element={<HostJournal/>}/>
        <Route path='/admin/journal/create' element={<CreateJournal/>}/>
        <Route path='/admin/journal/edit/:journal' element={<EditJournal/>}/>
        <Route path='/admin/user' element={<ManageUser/>}/>
        <Route path='/admin/request' element={<RoleRequest/>}/>
        <Route path='/admin/setting' element={<Setting/>}/>
        <Route path='/:journal' element={<Journal/>}/>
        <Route path='/:journal/about' element={<AboutJournal/>}/>
        <Route path='/:journal/editorial' element={<Editorial/>}/>
        <Route path='/:journal/ethics' element={<Ethics/>}/>
        <Route path='/:journal/guidelines' element={<Guidelines/>}/>
        <Route path='/:journal/issue' element={<Issue/>}/>
        <Route path='/:journal/issue/current' element={<IssueCurrent/>}/>
        <Route path='/:journal/issue/:volume/:number' element={<IssueArticle/>}/>
        <Route path='/:journal/subscription' element={<Subscriptions/>}/>
        <Route path='/:journal/article/:article_id' element={<ViewArticle/>}/>
        <Route path='/:journal/article/:article_id/view' element={<ViewPDF/>}/>
        <Route path='/submission' element={<Submission/>}/>
        <Route path='/submission/article/:article_id' element={<SubmissionDetail/>}/>
        <Route path='/submission/archives' element={<SubmissionArchives/>}/>
        <Route path='/submission/submit' element={<Submit/>}/>
        <Route path='/submission/edit/:id' element={<EditSubmission/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/review/:article_id' element={<ReviewArticle/>}/>
        <Route path='/:journal/submission' element={<Editor/>}/>
        <Route path='/:journal/manageIssue' element={<EditorIssue/>}/>
        <Route path='/:journal/create/issue' element={<EditorAddIssue/>}/>
        <Route path='/:journal/settings' element={<EditorSettings/>}/>
        <Route path='/:journal/request' element={<AuthorRequest/>}/>
        <Route path='/:journal/submission/:article_id' element={<Article/>}/>
        <Route path='/profile/:username' element={<AuthorProfile/>}/>
        <Route path='/search/:title' element={<Search/>}/>
        


      </Routes>
    </BrowserRouter>
  );
}

export default App;
