import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Home';
import ChatPage from '../ChatPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/chat" element={<ChatPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;