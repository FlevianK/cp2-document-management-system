import React from 'react';
import { Link } from 'react-router';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const RoleList = ({ roles }) => { 
  return (
    <div>
      {roles.map(role =>
        <MuiThemeProvider>
          <Card key={role.title} style={{margin: " 1% 15% 3% 15%", padding: " 0 4% 4% 4% "}}>
            <CardText>
              <p>Role: {role.title}</p>
            </CardText>
            <CardActions>
              <Link to={`/roles/delete/${role.title}`} style={{color: " red", textAlign: "center"}}>DELETE</Link>
            </CardActions>
          </Card>
        </MuiThemeProvider>
      )}
    </div>
  ); 
};

export default RoleList;  
