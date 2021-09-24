import logo from './logo.svg';
import './App.css';
import  Headbar  from './Components/Headbar';
import Playlist from './Components/Playlist';
import './Components/mediaitems.css'
//import Music from './Components/Music';
import react, {useState} from 'react';
function App() {
  const [data, setData] = useState([{id:1, like:3, title: "Com Truise - Flightwave", subtitle:'Reed', media:''},
     {id:2, like:3, title: "Cloudy Dubussy - Clair de lune", subtitle:'Reed', media:''},
     {id:3, like:2, title: "Culture Shock - Troglodyte", subtitle:'Doug', media:''},
     {id:4, like:2, title: "Tycho - Montana", subtitle:'Reed', media:''}])
  // var data =[
  //   {id:1, like:3, title: "Com Truise - Flightwave", subtitle:'Reed', media:''},
  //   {id:2, like:3, title: "Cloudy Dubussy - Clair de lune", subtitle:'Reed', media:''},
  //   {id:3, like:2, title: "Culture Shock - Troglodyte", subtitle:'Doug', media:''},
  //   {id:4, like:2, title: "Tycho - Montana", subtitle:'Reed', media:''}
  // ]
  
  const search = (query) => {
    let results = data.filter(media => {
      return media.title.includes(query);
    })
    setData([...results]);
  }

  
  const onDelete = (song) => {
    setData(data.filter((e) => {
      return e !== song;
    }))
  }

  return (
    <>
    <Headbar user="Nirvana" search={search}/>
    <Playlist data={data}  onDelete={onDelete}/>
    
    </>
  );
}

export default App;
