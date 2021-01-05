import './global.css';
import './app.css';

import Header from './components/Header';
import SubHeader from './components/SubHeader';
import MainNavBar from './components/MainNavBar';

export default function App() {
  return (
    <div className='App'>
      <Header />

      <main className='main'>
        <MainNavBar />
        <div className='pageContent'>
          <SubHeader />
          <p> MORE CONTENT</p>
        </div>
      </main>
    </div>
  );
}
