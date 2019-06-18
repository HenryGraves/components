import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import fake from 'faker';
import ApprovalCard from './ApprovalCard';

// We learned about props here too!
  
const App = () => {
  return (
    <div className="ui container comments">

      <ApprovalCard>
       <CommentDetail 
          author="sam" 
          timeAgo="today at 6pm"
          comment="nice"
          avatar={fake.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="no u" 
          timeAgo="today at 7pm"
          comment="oof"
          avatar={fake.image.avatar()}
        />
      </ApprovalCard>
      
    </div>
  );
};

ReactDOM.render(<App />,
  document.querySelector('#root'));