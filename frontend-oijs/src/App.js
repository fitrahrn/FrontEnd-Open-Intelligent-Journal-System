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
import EditorQueue from './pages/editor/EditorQueue';
import EditorIssue from './pages/editor/EditorIssue';
import EditorArchives from './pages/editor/EditorArchive';
import EditorUnassigned from './pages/editor/EditorUnassigned';
import EditorSettings from './pages/editor/EditorSettings';
import ArticleSubmission from './pages/editor/article/ArticleSubmission';
import ArticleReview from './pages/editor/article/ArticleReview';
import ArticleCopyediting from './pages/editor/article/ArticleCopyediting';
import ArticleProduction from './pages/editor/article/ArticleProduction';
import ArticlePublication from './pages/editor/article/ArticlePublication';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/archives' element={<Archives />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/:journal' element={<Journal/>}/>
        <Route path='/:journal/about' element={<AboutJournal/>}/>
        <Route path='/:journal/editorial' element={<Editorial/>}/>
        <Route path='/:journal/ethics' element={<Ethics/>}/>
        <Route path='/:journal/guidelines' element={<Guidelines/>}/>
        <Route path='/:journal/issue' element={<Issue/>}/>
        <Route path='/:journal/subscription' element={<Subscriptions/>}/>
        <Route path='/:journal/submission' element={<Submission/>}/>
        <Route path='/:journal/submission/archives' element={<SubmissionArchives/>}/>
        <Route path='/:journal/submission/submit' element={<Submit/>}/>
        <Route path='/:journal/submission' element={<Submission/>}/>
        <Route path='/:journal/review' element={<Review/>}/>
        <Route path='/:journal/review/:article' element={<ReviewArticle/>}/>
        <Route path='/:journal/journal' element={<EditorQueue/>}/>
        <Route path='/:journal/journal/issue' element={<EditorIssue/>}/>
        <Route path='/:journal/journal/archives' element={<EditorArchives/>}/>
        <Route path='/:journal/journal/unassigned' element={<EditorUnassigned/>}/>
        <Route path='/:journal/journal/settings' element={<EditorSettings/>}/>
        <Route path='/:journal/journal/:article' element={<ArticleSubmission/>}/>
        <Route path='/:journal/journal/:article/review' element={<ArticleReview/>}/>
        <Route path='/:journal/journal/:article/copyediting' element={<ArticleCopyediting/>}/>
        <Route path='/:journal/journal/:article/production' element={<ArticleProduction/>}/>
        <Route path='/:journal/journal/:article/publication' element={<ArticlePublication/>}/>
        


      </Routes>
    </BrowserRouter>
  );
}

export default App;
