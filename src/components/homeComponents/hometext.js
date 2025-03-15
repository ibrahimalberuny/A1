import React from 'react'

const Hometext =({text})=>{
  function createMarkup(text) {
    return { __html: text };
  }

return (
    <div className='container mx-auto row my-5 pt-5 bg-black' >
        <div className='col-md-2'></div>
    <div className="col-md-8 pt-5" >
    <p className='text-justify text-white'
    dangerouslySetInnerHTML={createMarkup(text)}>
    </p>
  </div>
  </div>
)


}

export default Hometext;