import { Routes, Route } from "react-router-dom"

import PromotionList from './Promotion/PromotionList';
import Promotion from './Promotion/Promotion';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <PromotionList/> } />
        <Route path="/:id" element={ <Promotion/> } />
      </Routes>
    </div>
  );
}

export default App;
