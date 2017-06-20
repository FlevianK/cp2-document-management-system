import React from 'react';

const DocumentList = ({documents}) => {  
  return (
    <table>
        <thead>
          <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Content</th>
              <th>Access</th>
          </tr>
        </thead>

        <tbody>
           {documents.map(document => 
          <tr>
            <td key={document.id} >{document.id}</td>
            <td>{document.title}</td>
            <td>{document.content}</td>
            <td>{document.access}</td>
          </tr>
           )}
          </tbody>
          </table>
  );
};

export default DocumentList;  