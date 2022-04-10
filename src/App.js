import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'
import { nanoid } from 'nanoid'

function App() {
  let data=[
    {image:img3,
    title:"Water Jug Problem",
    description:"Two jugs of different measurements are given these jugs do not have an intermediate measuring markings. Our goal is to procure some x litres of water in the end.",
    link:"https://6249cefc4549ff085a3c1dfc--mellifluous-strudel-ce1f5d.netlify.app/"},

    {image:img1,
    title:"8 Puzzle",
    description:"Given a 3×3 board with 8 tiles and one empty space.The objective is to place the numbers on tiles to match the final configuration using the empty space.",
    link:"https://ornate-cocada-437045.netlify.app/"},

    {image:img2,
    title:"Tower of Hanoi",
    description:"Tower of Hanoi is a mathematical puzzle where we have three rods and n disks. The objective of the puzzle is to move the entire stack to another rod.",
    link:"https://astounding-bunny-2a2f7a.netlify.app/"},

    {image:img4,
    title:"N Queens",
    description:"N queen is a classic backtracking problem in which we have to place n queens in nxn chessboard.",
    link:"https://nqueenalgo.netlify.app/"},

    {image:img5,
    title:"Maze",
    description:"A maze-solving algorithm is an automated method for the solving a maze. ",
    link:"https://624a452f0216d16840dba64e--thunderous-madeleine-089f81.netlify.app/"}
  ]


  function CardCreator(){
    let cards=[]
    for(let i=0;i<data.length;i++){
      cards.push(<Grid item md={4}  xs={12} key={nanoid()} ><Card  image={data[i].image} title={data[i].title} description={data[i].description} link={data[i].link}/></Grid>)
    }
    return cards
  }
  return (
    <div className="App">
      <Navbar />
      <Stack alignItems="center">

        <Box ml={10} mt={10} sx={{backgroundColor: 'rgba(52, 52, 52, alpha)',flexGrow: 1 }}>

          <Grid container  alignItems="center" justifyContent="center" spacing={4}>
              {CardCreator()}
          </Grid>
        </Box>
    </Stack>

    </div>
  );
}

export default App;
