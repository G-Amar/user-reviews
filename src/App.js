import Header from "./components/Header";
import ReviewList from "./components/ReviewList";
import ReviewStats from "./components/ReviewStats";
import ReviewForm from "./components/ReviewForm";
import AboutPage from "./pages/AboutPage";
import AboutLink from "./components/AboutLink";
import { FeedbackProvider } from "./context/FeedbackContext";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={
              <>
                <ReviewForm />
                <ReviewStats />
                <ReviewList />
              </>
            }
            />

            <Route path="/about" element={<AboutPage/>}/>
          </Routes>
          <AboutLink/>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App;