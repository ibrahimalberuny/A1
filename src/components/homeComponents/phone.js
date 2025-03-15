import React from 'react'

const Phone = ({ myPhone, telegram }) => {	
	const myNumber = myPhone && myPhone[0] ? myPhone[0].replace('(', '').replace(') ', '').replace('-', '').replace('-', '').replace(' ','') : ''
	const myNumber1 = myPhone && myPhone[1] ? myPhone[1].replace('(', '').replace(') ', '').replace('57','').replace('-', '').replace('-', '').replace('|', '').replace(' ','') : ''
	const myNumber2 = myPhone && myPhone[2] ? myPhone[2].replace('-', '').replace('-', '') : ''
	
	let number1=myNumber? true:false
	let number2=myNumber1? true:false
	let number3=myNumber2? true:false
	
	return ( 
		<>	
			{number1? <a
				className="whatsapp-opacity col-5 col-sm-3 my-2 btn btn-outline-light"
				href={ myPhone[0] ? `tel:${myNumber}` : ( telegram ? telegram : 'https://t.me/Damascelestina')}
				alt="Whatsapp chat 1" target="_blank" rel="noreferrer" aria-label="Phone Number 1"
			>
				{myPhone[0] ? myPhone[0] : ''}
			</a>:''}
			{number2? <a
				className="whatsapp-opacity col-5 col-sm-3 my-2 mx-2 btn btn-outline-light"
				href={ myPhone[1] ? `tel:${myNumber1}` : ( telegram ? telegram : 'https://t.me/Damascelestina')}
				alt="Whatsapp chat 2" target="_blank" rel="noreferrer" aria-label="Phone Number 2"
			>
				{myPhone[1] ? myPhone[1].replace('|','') : ''}
			</a>:''}
			{number3? <a
				className="whatsapp-opacity d-none d-sm-block col-sm-3 col-md-3 my-2 btn btn-outline-light"
				href={ myPhone[2] ? `tel:${myNumber2}` : ( telegram ? telegram : 'https://t.me/Damascelestina')}
				alt="Whatsapp chat 3" target="_blank" rel="noreferrer" aria-label="Phone Number 3"
			>
				{myPhone[2] ? myPhone[2] : ''}
			</a>:''}			
		</>        
  )
}

export default Phone;