
import { Box, Card,CardActions,CardContent,CardMedia,Typography,Button } from '@mui/material'
import images from '../../constants/images'


const abouts =[
  {title:"Web Development", description:"need a good developer", imgUrl:images.about01 },
  {title:"Web Development", description:"need a good developer", imgUrl:"" },
  {title:"Web Development", description:"need a good developer", imgUrl:"" }
]


const About = () => {
  return (

    <>
    {/* header text */}
    <Box sx={{height:'100vh',width:'100%' , background: "#e6f9f5" }}>
      <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', mt:12,ml:13}}>
      <h1 style={{color:'black', }}>I Know That <span style={{color:'#870cf3'}}>Good Design</span></h1>
      <h1 style={{marginTop:-10}}>Means <span style={{color:'#870cf3'}}>Good Business</span></h1>
      </Box>
       

      {/* profiles */}

        <Box sx={{display:'flex', justifyContent:"space-around", p:5}}>

          {
            abouts.map((about) =>(

              <Card sx={{ width: 400,borderRadius:4 }}>
              <CardMedia
                sx={{ height: 200 }}
                image= {about.imgUrl}
                title={about.title}
              />
              <CardContent>
              
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                 {about.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            ))
          }

        

        </Box>


    </Box>
    </>
  
  )
}

export default About
