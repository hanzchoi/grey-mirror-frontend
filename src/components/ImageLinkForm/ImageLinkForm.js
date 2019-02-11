import React from 'react'

const ImageLinkForm = () =>{
  return (
    <div>
      <p className='f3'>
        {'This app will detect faces in your pictures. Try it out'}
      </p>
      <div>
        <input className='f4 p2 w-70 center' type='text'/>
        <button className='w-30 grow f4 link pv2 dib white bg-light-purple'>Detect</button>
      </div>
    </div>
  );
}
export default ImageLinkForm;
