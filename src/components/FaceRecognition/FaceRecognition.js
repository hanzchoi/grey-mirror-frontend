import React from 'react';

const FaceRecognition = ({ imageURL }) => {
  return(
    <div className='center ma'>
     <div className=''>
      <img src={imageURL} alt='' width='500px' height='auto'/>
     </div>
    </div>
  )
}

export default FaceRecognition;
