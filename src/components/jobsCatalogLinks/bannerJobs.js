import React from 'react'

export default function bannerJobs({ lang }) {
	const isDefaultLang = lang === 'es'
	return (
    <div className="row" >
			<div className="container p-5 text-white mt-3 d-block d-md-none">
					<div className="bg-dark row">
					<h1 className="text-white text-center text-uppercase gothic">
							{ isDefaultLang ? 'Trabaja ' : 'Work here'}
					</h1>
					<br/>
					<div className='d-flex justify-content-center'>
							<h2 className="text-italic text-danger">
							{ isDefaultLang ? 'Con Nosotros' : 'With us' }
							</h2> 
							<b className='display-6 ms-1'>!</b>
					</div>
					<p className="text-white">
							{ isDefaultLang ? 'Trabajar con ' : 'Work with ' } 
							<strong className="text-danger">La Celestina</strong>
							{ isDefaultLang ? ' es muy sencillo, solo debes escribir al correo electrónico ' : ' is very easy, you only need to send us an email to ' }
							<i className="fw-bold">contacto@lacelestina.co</i><br /> { isDefaultLang ? ' o por Whatsapp al' : ' or Whatsapp message to' } 
							<i className="fw-bold">302 427 7416</i>
					</p>
					</div>
			</div>
			<div className="container">
					<div className="text-center row justify-content-center mb-5 mt-3">
					<div className="d-none d-md-block col-3">
							<div className="col-12 col-md-9">
							<hr className='border-top-0 border border-white'/>
							</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4">
							<a href="https://api.whatsapp.com/send/?phone=573024277416&text&app_absent=0" target="_blank" rel="noreferrer"><svg xmlns="https://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-whatsapp text-white me-3" viewBox="0 0 16 16">
							<path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
							</svg>
							<span className="visually-hidden">
									Whatsapp La Celestina
							</span>
							</a>
							<a href="https://twitter.com/lorelocasex4" target="_blank" rel="noreferrer"><svg xmlns="https://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="text-white mx-3" viewBox="0 0 16 16">
							<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
							</svg>
							<span className="visually-hidden">
									Twitter La Celestina
							</span>
							</a>
							<a href="https://lacelestinaescorts.tumblr.com/" target="_blank" rel="noreferrer"><svg width="36" height="36" fill="currentColor" focusable="false" className="svg-inline--fa fa-tumblr fa-w-10 text-white mx-3" viewBox="0 0 320 512">
							<path d="M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z" />
							</svg>
							<span className="visually-hidden">
									Tumblr
							</span>
							</a>
							<a href="https://www.youtube.com/channel/UC0EtjYkIjWoHRnt9u7sBuQg" target="_blank" rel="noreferrer"><svg xmlns="https://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-youtube text-white ms-3" viewBox="0 0 16 16">
							<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
							</svg>
							<span className="visually-hidden">
							Youtube La Celestina
							</span>
							</a>
					</div>
					<div className="d-none d-md-block col-3">
							<div className="col-12 col-md-9">
							<hr className='border-top-0 border border-white'/>
							</div>
					</div>
				</div>
			</div>
			<div className="col-12 bg-dark">
				<div>
					<img
						src="/images/jobs/bannerjobs.jpg"
						alt={ isDefaultLang ? "Banner Trabajo" : "Banner Jobs" }
						width={1200}
						height={800}
						className="mx-auto col-12 cover d-none d-md-block"
						loading="lazy"
						placeholder="DOMINANT_COLOR"
						quality="100" 
					/>
				</div>
				<div className="td-md-5 px-4 container">
					<p className="text-white mx-auto text-justify block d-sm-none">
						<i className="text-primary">
							{ isDefaultLang ? ' la mejor agencia' : ' the best Escort agency' }
						</i>
						. Donde siempre respetaremos tus derechos, dándote acceso a la mejor clientela, asegurando tu integridad y privacidad. Somos<i className="text-danger"> 100% respetuosos y profesionales</i> (no hacemos casting ni pedimos pruebas), siempre seremos honestos sinceros supeando todas tus expectativas.
					</p>
				</div>
			</div>
    </div>
  )
}
