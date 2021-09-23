import logo from './logo.svg';
import './App.css';
import  Headbar  from './Components/Headbar';
import Playlist from './Components/Playlist';
import Music from './Components/Music';
function App() {

  var data =[
    {id:1, like:3, title: "Com Truise - Flightwave", subtitle:'Reed', media:''},
    {id:2, like:3, title: "Cloudy Dubussy - Clair de lune", subtitle:'Reed', media:''},
    {id:3, like:2, title: "Culture Shock - Troglodyte", subtitle:'Doug', media:''},
    {id:4, like:2, title: "Tycho - Montana", subtitle:'Reed', media:''}
  ]
  
const  onClk=()=>
  {
     
     console.log(data[2].like)
     var count=data[2].like++;
     console.log(count);
    
     //return data[2].like
    
  }
  const ondrop=()=>
  {
    console.log("I am drop down button");
  }
  const onDelete=()=>
  {

    data.pop();
  }
  return (
    <>
    <Headbar user="Nirvana"/>
    <Playlist data={data} onClk={onClk} ondrop={ondrop} onDelete={onDelete}/>
    <Music/>
    </>
  );
}

export default App;
