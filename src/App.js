import './App.css';
import Navbar from './components/navbar/navbar.component';
import Header from './components/header/header.component';
import CommunityStatement from './components/community-statement/community-statement.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <CommunityStatement />
      <Footer />
    </div>
  );
}

export default App;
