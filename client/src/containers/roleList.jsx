import React from 'react';
import { Link } from 'react-router';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const RoleList = ({ roles }) => { 
  return (
    <div>
      {roles.map(role =>
        <MuiThemeProvider>
          <Card key={role.id} style={{margin: " 1% 15% 3% 15%", padding: " 0 4% 4% 4% "}}>
            <CardText>
              <p>Role: {role.title}</p>
              <p>Role: {role.description}</p>
            </CardText>
            <CardActions>
              <Link to={`/roles/delete/${role.id}`} style={{color: " red", textAlign: "center"}}>DELETE</Link>
              <Link to={`/roles/update/${role.id}`} style={{color: " green", float: "right"}}>UPDATE</Link>
            </CardActions>
          </Card>
        </MuiThemeProvider>
      )}
    </div>
  ); 
};

export default RoleList;  
