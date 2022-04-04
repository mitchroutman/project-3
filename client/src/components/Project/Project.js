import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Project() {
    return(
        <div>
        <div id='dashboard-header'>
          <h1>Dashboard</h1>
        </div>
        
        <div className="card">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
                Timeline for Website Development
              </Typography>
              {/* <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
              </Typography> */}
              {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography> */}
              <Typography variant="body2">
                Due 4/1/22
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
              <br></br>
    
        <div className="card">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
                    Develop new portfolio website          
              </Typography>
              {/* <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
              </Typography> */}
              {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography> */}
              <Typography variant="body2">
                Due 4/1/22
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
    
      </div>
    );
}