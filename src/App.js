import './App.css';
import ChangeTitle from './components/ChangeTitle';
import MainPage from './pages/MainPage/MainPage';
import AboutPages from './pages/aboutPages/AboutPages';
import ContactsPage from './pages/contactsPage/ContactsPage';
import Counter from './pages/counter/Counter';

function App() {
  return (
    <div className="App">
      {/* <MainPage />
      <h2>-------------------</h2>
      <AboutPages />
      <ChangeTitle />   */}
      <ContactsPage />
      <Counter />

    </div>
  );
}

export default App;
