import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Page_Heading from './components/Page_Heading';
import Image_Carousel from './components/Image_Carousel';
import Event_card from './components/Event_card';
import details from './data/past_event.json'
import { data } from './data/data';


function App() {

  console.log(data[0].images)

  return (
    <>
      <Header/>

      <Page_Heading title="EVENTS"/>

      <Event_card details={data}/>


      <Footer/>
    </>
  );
}

export default App;
