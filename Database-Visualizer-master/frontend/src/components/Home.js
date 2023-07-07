import React from "react";
import "./Home.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, Grid } from "@mui/material";
const Home = () => {
  return (
    <div>
      <header className=" text-center" id="showcase">
        <h1 id="one">W E L C O M E </h1>

        <div class="search-box">
          <input
            type="text"
            placeholder="Search anything"
            class="search-input"
          />
          <a href="#" class="search-btn">
            <i class="fas fa-search"></i>
          </a>
        </div>
        <div className="container" style={{ paddingTop: "40%" }}></div>
      </header>
      {/* <div className="container" id="contain"> */}
      {/* <div class="row"> */}
      {/* <div class="col">  */}
      <Container maxWidth="x1" className="mt-5">
        <Grid container spacing={5}>
          <Grid item md={3} sm={3} xs={12}>
            <Card className="card" id="done" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn.dribbble.com/users/51395/screenshots/1476926/media/b2dc760d3f5e3f9ada5839aef44dfb34.gif"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Bar Chart
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A bar chart or bar graph is a chart or graph that presents
                    categorical data with rectangular bars with heights or
                    lengths proportional to the values that they represent.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item md={3} sm={3} xs={12}>
            <Card className="card" id="done" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://i.pinimg.com/originals/77/7c/f3/777cf301563c11a8a7b5da834c9b58eb.gif"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Pie Chart
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A pie chart is a circular statistical graphic,which is
                    divided into slices to illustrate numerical proportion.the
                    arc length of each slice is proportional to the quantity it
                    represents
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <Card className="card" id="done" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn.dribbble.com/users/272144/screenshots/4960141/media/65f135eb94e05f6cc1a6a1c0a335c1b2.gif"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Area Chart
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    An area chart or area graph displays graphically
                    quantitative data. It is based on the line chart. The area
                    between axis and line are commonly emphasized with colors,
                    textures and hatchings.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <Card className="card" id="done" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://miro.medium.com/max/640/1*fH26Pim3AgmEmzrKr0rrDA.gif"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Scatter Plot Chart
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A bar chart or bar graph is a chart or graph that presents
                    categorical data with rectangular bars with heights or
                    lengths proportional to the values that they represent.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={5} marginTop="5px" marginBottom="3%">
          <Grid item md={3} sm={3} xs={12}>
            <Card className="card" id="done" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn.dribbble.com/users/7162/screenshots/1888419/open-uri20150119-12-2b4861"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Line Chart
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A line graph is a type of chart used to show information
                    that changes over time. We plot line graphs using several
                    points connected by straight lines. We also call it a line
                    chart.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item md={3} sm={3} xs={12}>
            <Card className="card" id="done" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://raw.githubusercontent.com/holtzy/The-Python-Graph-Gallery/master/static/graph/animated_gapminder.gif"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Bubble Chart
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A bar chart or bar graph is a chart or graph that presents
                    categorical data with rectangular bars with heights or
                    lengths proportional to the values that they represent.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <Card className="card" id="done" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://plotly.github.io/static/images/zoom-pan-hover/pan-axis.gif"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dual Axis Chart
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A dual axis chart (also called a multiple axes chart) uses
                    two axes to easily illustrate the relationships between two
                    variables with different magnitudes and scales of
                    measurement.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <Card className="card" id="done" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://vizzlo.com/site/uploads/mekko.gif"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mekko Chart
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A Marimekko chart is a graphical representation that uses
                    stacked bar graphs of varying widths to visualize
                    categorical data. A Marimekko chart is also known as the
                    mosaic plot.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <footer>
        <div class="footer">
          <div class="row" style={{ paddingLeft: "45%" }}>
            <a href="#" style={{ width: 24, height: 24 }}>
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#" style={{ width: 24, height: 24, paddingLeft: "3%" }}>
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#" style={{ width: 24, height: 24, paddingLeft: "4%" }}>
              <i class="fa fa-youtube"></i>
            </a>
            <a href="#" style={{ width: 24, height: 24, paddingLeft: "5%" }}>
              <i class="fa fa-twitter"></i>
            </a>
          </div>

          <div class="row">
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>

          <div class="row" style={{ marginLeft: "30%" }}>
            INFERNO Copyright © 2022 Inferno - All rights reserved || Designed
            By: Rajil Aziz
          </div>
        </div>
      </footer>
    </div>

    // </div>

    // </div>
    // </div>
  );
};

export default Home;
