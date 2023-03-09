import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';

function App() {


 let  User1 = {
    name : "Amit" ,
    image : "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg" ,
    designation : "Graphic Designer" ,
    description : "Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design." ,
    ico1:"https://cdn-icons-png.flaticon.com/512/650/650121.png",
    ico2:"https://cdn-icons-png.flaticon.com/512/6841/6841628.png",
    ico3:"https://as1.ftcdn.net/v2/jpg/02/23/78/64/1000_F_223786431_4mW9HAfmUomJAPpy1e1tO9pVTFKwFpmA.jpg"
  }
  
 let  User2 = {
    name : "Ruhi",
    image : "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ,
    description : "perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays, 				and other types of music groups. " ,
    designation : "Singer",
    ico1:"https://cdn-icons-png.flaticon.com/512/650/650121.png",
    ico2:"https://cdn-icons-png.flaticon.com/512/6841/6841628.png",
    ico3:"https://as1.ftcdn.net/v2/jpg/02/23/78/64/1000_F_223786431_4mW9HAfmUomJAPpy1e1tO9pVTFKwFpmA.jpg"
  }
  


  return (
    <div className="backColor">
    <Card U1={User1} U2={User2}/>
    </div>
  );
}

export default App;
