import React from 'react';
import { Link } from 'react-router';

const DocumentList = ({ documents }) => {  
  return (
    <table>
        <thead>
          <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Access</th>
              <th></th>
              <th></th>
          </tr>
        </thead>

        <tbody>
           {documents.map(document => 
          <tr>
            <td key={document.id}>{document.title}</td>
            <td>{document.content}</td>
            <td>{document.access}</td>
            <td ><Link to={`/documents/delete/${document.id}`}>Delete</Link></td>
            <td ><Link to={`/documents/update/${document.id}`}>Update</Link></td>
          </tr>
           )}
          </tbody>
          </table>
  );
};

export default DocumentList;  
