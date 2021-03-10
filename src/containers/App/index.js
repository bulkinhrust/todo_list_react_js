import './styles.scss';
import Title from 'Components/Title';
import ToDo from 'Containers/ToDo';

function App() {
  return (
    <div className='app'>
      <Title />
      <ToDo />
    </div>
  );
}

export default App;
