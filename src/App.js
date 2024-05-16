import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Profile from './pages/Home/Profile'
import About from './pages/About/About'

const mockData = {
  userName: "Test 01",
  description: "Lorem ipsum bla bla bla",
  title: "Hello world!"
}

function App() {

  const [page, setPage] = useState('profile')

  return (
    <div className="App">
      <Header userName={mockData.userName} changePage={setPage} />
      {
        page === 'profile' 
          ? <Profile userData={mockData} />
            : <About />
      }
      <Footer />
    </div>
  );
}

export default App;
