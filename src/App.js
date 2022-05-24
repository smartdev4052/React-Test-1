import { Routes, Route } from "react-router-dom"

import PromotionList from './Promotion/PromotionList';
import PromotionDetail from './Promotion/PromotionDetail';

import data from './json/webdevtest-data.json';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <PromotionList promotions={data.promotion_objects}/> } />
        <Route path="/:id" element={ <PromotionDetail/> } />
      </Routes>
    </div>
  );
}

export default App;
