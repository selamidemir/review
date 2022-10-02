import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import HomePage from "./pages/HomePage";
import Category from "./pages/Category";
import ReviewDetails from "./pages/ReviewDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SiteHeader />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/details/:reviewId" element={<ReviewDetails />} />
          <Route path="/category/:id" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
