import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import SiteHeader from "./components/SiteHeader";
import HomePage from "./pages/HomePage";
import Category from "./pages/Category";
import ReviewDetails from "./pages/ReviewDetails";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ApolloProvider client={client}>
          <SiteHeader />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:reviewId" element={<ReviewDetails />} />
            <Route path="/category/:id" element={<Category />} />
          </Routes>
        </ApolloProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
