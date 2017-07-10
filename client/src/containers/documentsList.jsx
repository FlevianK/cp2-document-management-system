import React from 'react';
import { Link } from 'react-router';

const DocumentsList = ({ documents }) => {
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
          <tr key={document.id}>
            <td >{document.title}</td>
            <td>{document.content}</td>
            <td>{document.access}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default DocumentsList;  
