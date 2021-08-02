import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Button, Typography } from '@material-ui/core/';
import RecommendChallenge from '../../components/Challenge/RecommendChallenge';
import NewChallenge from '../../components/Challenge/NewChallenge';
import TotalChallenge from '../../components/Challenge/TotalChallenge';
import Wrapper from './styles';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';
import Layout from '../../layout/index';
const Challenge = () => {
    let history = useHistory();
      return (
       
           <Wrapper>
               <Layout>
                
                <Grid container xs={12} className="grid" style={{padding: '20px', margin: '10px'}}>
                    <Grid container>
                    <Grid item xs={6}><h1>추천</h1></Grid>
                    <Grid item xs={6}>
                    <Button
                        variant="contained"
                        color="default"
                        startIcon={<AddIcon />}
                        style={{float: 'right'}}
                        onClick={()=>{history.push('/CreateChallenge/')}}
                    >
                        챌린지 생성하기
                    </Button>
                    </Grid>
                    </Grid>
                    <Grid item xs={12}><hr/></Grid>
                    <Grid item xs={12} className="CardContent">
                    <RecommendChallenge></RecommendChallenge>
                    </Grid>
                </Grid>
                <div style={{height: '150px'}}></div>
                <Grid container xs={12} className="grid" style={{padding: '20px', margin: '10px'}}>
                <h1>신규</h1>
                <Grid item xs={12}><hr/></Grid>
                    <Grid item xs={12} className="CardContent">
                    <NewChallenge></NewChallenge>
                    </Grid>
                </Grid>
                <div style={{height: '150px'}}></div>
                <Grid container xs={12} className="grid" style={{padding: '20px', margin: '10px'}}>
                    <Grid item xs={12} >
                    <h1 className="TotalCard">전체</h1>
                    <TotalChallenge></TotalChallenge>
                    </Grid>
                </Grid>
                </Layout>
             </Wrapper>
          
      );
 }

export default Challenge;



// const Container = styled.div`
//     min-height: 400px;
//     background: #1ab394;
//   `,
//   StyledSlider = styled(Slider)`
//     & .slick-slide img {
//       max-width: 100%;
//       min-height: 500px;
//     }
//   `,
//   ImageContainer = styled.div`
//     position: relative;
//     color: white;
//     margin: 0 20px;
//   `,
//   Image = styled.img``,
//   BottomLeft = styled.div`
//     position: absolute;
//     bottom: 8px;
//     left: 16px;
//   `;

// const items = [
//   { id: 1, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
//   { id: 2, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
//   { id: 3, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
//   { id: 4, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
//   { id: 5, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
//   { id: 6, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
//   { id: 7, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
//   { id: 8, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
//   { id: 9, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" },
//   { id: 10, url: "http://placekitten.com/g/400/200", caption: "Cute Kitten" }
// ];
