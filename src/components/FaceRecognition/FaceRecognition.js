import React from 'react';

const FaceRecognition = ({ imageURL, box }) => {
  return(
    <div className='center ma'>
     <div className=''>
      <img id='inputImage' src={imageURL} alt='' width='500px' height='auto'/>
     </div>
    </div>
  )
}

export default FaceRecognition;
