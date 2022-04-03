import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'

function App() {
  let data=[
    {image:img3,
    title:"Water Jug Problem",
    description:"A green iguana is a species of lizard native to the tropical rainforests of the Americas. It is a large, colorful, and carnivorous lizard that is found in the wild in the Americas.",
    link:"https://www.google.com"},

    {image:img1,
    title:"8 Puzzle",
    description:"A green iguana is a species of lizard native to the tropical rainforests of the Americas. It is a large, colorful, and carnivorous lizard that is found in the wild in the Americas.",
    link:"https://www.google.com"},

    {image:img2,
    title:"Tower of Hanoi",
    description:"A green iguana is a species of lizard native to the tropical rainforests of the Americas. It is a large, colorful, and carnivorous lizard that is found in the wild in the Americas.",
    link:"https://www.google.com"},

    {image:img4,
    title:"N Queens",
    description:"A green iguana is a species of lizard native to the tropical rainforests of the Americas. It is a large, colorful, and carnivorous lizard that is found in the wild in the Americas.",
    link:"https://www.google.com"},

    {image:img5,
    title:"Maze",
    description:"A green iguana is a species of lizard native to the tropical rainforests of the Americas. It is a large, colorful, and carnivorous lizard that is found in the wild in the Americas.",
    link:"https://www.google.com"}
  ]


  function CardCreator(){
    let cards=[]
    for(let i=0;i<data.length;i++){
      cards.push(<Card image={data[i].image} title={data[i].title} description={data[i].description} link={data[i].link}/>)
    }
    return cards
  }
  return (
    <div className="App">
      <Navbar />
      <Box mt={35} sx={{ flexGrow: 1 }}>
        <Grid  container  alignItems="center"
  justifyContent="center" spacing={2}>
            {CardCreator()}
        </Grid>
      </Box>
      

    </div>
  );
}

export default App;
