import React from 'react';
import { Link } from 'react-router';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const DocumentsList = ({ documents }) => {
  return (
    <div>
      {documents.map(document =>
        <MuiThemeProvider>
          <Card key={document.id} style={{margin: " 1% 15% 3% 15%", padding: " 0 4% 4% 4% "}}>
            <CardHeader
              title={document.title}
            />
            <CardText>
              <p>{document.content}</p>
              <p>{document.access}</p>
            </CardText>
          </Card>
        </MuiThemeProvider>
      )}
    </div>
  );
};

export default DocumentsList;  
