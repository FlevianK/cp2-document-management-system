import React from 'react';
import { Link } from 'react-router';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const UserList = ({ users }) => {
  return (
    <div>
      {users.map(user =>
        <MuiThemeProvider>
          <Card key={user.id} style={{margin: " 1% 15% 3% 15%", padding: " 0 4% 4% 4% "}}>
            {/*<CardHeader
              title={document.title}
            />*/}
            <CardText>
              <p>Username: {user.username}</p>
              <p>Role: {user.title}</p>
              <p>Name: {user.firstName}  {user.lastName}</p>
              <p>Email: {user.email}</p>
            </CardText>
            <CardActions>
              <Link to={`/users/delete/${user.id}`} style={{color: " red", float: "left"}}>DELETE</Link>
              <Link to={`/users/update/${user.id}`} style={{color: " green", float: "right"}}>UPDATE</Link>
            </CardActions>
          </Card>
        </MuiThemeProvider>
      )}
    </div>
  );
};

export default UserList;  
