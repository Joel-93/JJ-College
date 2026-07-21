import { BrowserRouter as Router } from 'react-router-dom';
import AppRoute from './Routes/AppRoute';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoute />
    </Router>
  );
}

export default App;