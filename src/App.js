import { Button, Content } from 'carbon-components-react';
import './app.scss';
//import 'bootstrap/dist/css/bootstrap.css';
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import Items from './content/RepoPage/item';
import Sign from './content/RepoPage/sign';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignalCellular0Bar } from '@mui/icons-material';


function App() {
  return (
    <div >
      <BrowserRouter>
      <TutorialHeader />
      <Routes>
        <Route exact path="/" element={< LandingPage />} />
        <Route path="/repos" element={< RepoPage />} />
        <Route path="/items" element={< Items />} />
        <Route path="/sign" element={< Sign />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

//https://react.carbondesignsystem.com/?selectedKind=DataTable&selectedStory=with%20expansion
//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