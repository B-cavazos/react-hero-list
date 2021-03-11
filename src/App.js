import HeadingComponent from './Heading'
import HeroListComponent from './HeroList'
import './App.css';

let heroes = [
  {
    id: 1,
    name: 'Goku',
    universe: 'Dragon Ball Z',
    power: 'Sayian',
    coolnessRating: 10,
  },
  {
    id: 2,
    name: 'Ash Ketchum',
    universe: 'Pokemon',
    power: 'persistent',
    coolnessRating: 6,
  },
  {
    id: 3,
    name: 'Sailor Moon',
    universe: 'Sailor Moon',
    power: 'Silver Crystal',
    coolnessRating: 8,
  },
  {
    id: 4,
    name: 'ElizaBest',
    universe: 'Alkali',
    power: 'Knows all things',
    coolnessRating: 15,
  },
]


const App = () => {
  let title = 'Welcome to Hero List!';
  let subTitle = 'The place Where Heroes Live';

  return (
    <div className='container'>
      <HeadingComponent title={title} subTitle={subTitle}/>
      <HeroListComponent  heroes={heroes} />
    </div>
  );
}

export default App;
