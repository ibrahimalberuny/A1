import React from 'react'
import '../styles/profiles.css'


export default function ProfileDescription({ profile, globalConfig, lang }) {
	const isDefaultLang = lang === 'es'
	const profilePhone = profile.category_city.phone.replace('(+57)','').replace('(+57)','')
	const phone_number = profile.phone_number && profile.phone_number !== '...' ? profile.phone_number : null
	const callme = `${ isDefaultLang ? 'Llama o escribeme, la pasaremos delicioso' : 'Call me or text me, we will have agreat hot time'} (Telegram, Whatsapp) -> ${ phone_number ? phone_number : '(+57)' + profilePhone.replace('(+57)','') }`;
	const cosmetic_surgeries = profile.category_cosmetic_surgeries.map( cs => isDefaultLang ? cs.name : cs.name_en ).toString()
	const additional_services = profile.category_additional_services.map( ca => isDefaultLang ? ca.name : ca.name_en ).toString()
		
	return (
		<>
			<div className="container row align-items-center col-12 col-md-5 mx-auto">
				<table className="text-white profile-table">
				<caption>{ isDefaultLang ? 'Perfil de ' + profile.name : profile.name + ' profile'}</caption>
					<tbody className="space-table">
						{ phone_number ? 
							<tr>
								<td>{ isDefaultLang ? 'Teléfono' : 'Phone number' }</td>
								<td>{phone_number}</td>
							</tr> : null
						}
						<tr>
							<td>{ isDefaultLang ? 'Edad' : 'Age' }</td>
							<td>{profile.age}</td>
						</tr>
						<tr>
							<td>{ isDefaultLang ? 'Color de piel' : 'Skin Color' }</td>
							<td>
								{ isDefaultLang
									? profile.category_skin_color ? profile.category_skin_color.name : 'pendiente'
									: profile.category_skin_color ? profile.category_skin_color.name_en : 'pending'
								}
							</td>
						</tr>
						<tr>
							<td>{ isDefaultLang ? 'Tamaño de busto' : 'Bust Size' }</td>
							<td>{profile.category_bust_size ? profile.category_bust_size.cup_size : 'pendiente'}</td>
						</tr>
						<tr>
							<td>{ isDefaultLang ? 'Tamaño de cola' : 'Ass Size' }</td>
							<td>
								{ isDefaultLang
									? profile.category_ass_size ? profile.category_ass_size.name : 'pendiente'
									: profile.category_ass_size ? profile.category_ass_size.name_en : 'pending' 
								}
							</td>
						</tr>
						<tr>
							<td>{ isDefaultLang ? 'Contextura' : 'Contexture' }</td>
							<td>
								{isDefaultLang
									? profile.category_contexture ? profile.category_contexture.name : 'pendiente'
									: profile.category_contexture ? profile.category_contexture.name_en : 'pending'}
							</td>
						</tr>
						<tr>
							<td>{ isDefaultLang ? 'Estatura' : 'Height' }</td>
							<td>{profile.height} CM</td>
						</tr>
						<tr>
							<td>{ isDefaultLang ? 'Ubicación' : 'Location' }</td>
							<td>{profile.category_city ? profile.category_city.name : 'pendiente'}</td>
						</tr>
						<tr>
							<td>{ isDefaultLang ? 'Color de ojos' : 'Eyes Color' }</td>
							<td>
								{ isDefaultLang
									? profile.category_eyes_color ? profile.category_eyes_color.name : 'pendiente'
									: profile.category_eyes_color ? profile.category_eyes_color.name_en : 'pending'
								}
							</td>
						</tr>
						<tr>
							<td>{ isDefaultLang ? 'Color de pelo' : 'Hair Color' }</td>
							<td>
								{ isDefaultLang
									? profile.category_hair_color ? profile.category_hair_color.name : 'pendiente'
									: profile.category_hair_color ? profile.category_hair_color.name_en : 'pending'
								}
							</td>
						</tr>
						<tr>
							<td>{ isDefaultLang ? 'Idiomas' : 'Languages' }</td>
							<td>
								{ isDefaultLang
									? profile.languages ? profile.languages : 'pendiente'
									: profile.languages_en ? profile.languages_en : 'pending'
								}
							</td>
						</tr>
						<tr>
							<td>{ isDefaultLang ? 'Intereses' : 'Interest' }</td>
							<td>
								{ isDefaultLang
									? profile.interest ? profile.interest : 'pendiente'
									: profile.interest_en ? profile.interest_en : 'pending'
								}
							</td>
						</tr>
						<tr>
							<td>{ isDefaultLang ? 'Comida' : 'Food' }</td>
							<td>
								{ isDefaultLang
									? profile.food ? profile.food : 'pendiente'
									: profile.food_en ? profile.food_en : 'pending'
								}
							</td>
						</tr>
						<tr>
							<td>{ isDefaultLang ? 'Bebidas' : 'Drinks' }</td>
							<td>
								{ isDefaultLang
									? profile.drinks ? profile.drinks : 'pendiente'
									: profile.drinks_en ? profile.drinks_en : 'pending'
								}
							</td>
						</tr>
						<tr>
							<td>{ isDefaultLang ? 'Estilo de ropa' : 'Dress style' }</td>
							<td>
								{ isDefaultLang
									? profile.dress_style ? profile.dress_style : 'pendiente'
									: profile.dress_style_en ? profile.dress_style_en : 'pending'
								}
							</td>
						</tr>
						<tr>
							<td>{ isDefaultLang ? 'Cirugías estéticas' : 'Plastic surgeries' }</td>
							<td>
								{ isDefaultLang
									? cosmetic_surgeries ? cosmetic_surgeries : 'pendiente'
									: cosmetic_surgeries ? cosmetic_surgeries: 'pending'
								}
							</td>
						</tr>
						{ additional_services ? 
							<tr>
								<td>{ isDefaultLang ? 'Servicios adicionales' : 'Additional services' }</td>
								<td>
									{ isDefaultLang
										? additional_services ? additional_services : 'pendiente'
										: additional_services ? additional_services: 'pending'
									}
								</td>
							</tr> 
							:
							null
						}
					</tbody>
				</table>
			</div>
			<div className="mt-3">
				<hr className='border mt-5 col-10 mx-auto'/>
				<div className="col mx-auto">
					<div className="col-12 text-white mx-auto row container text-center">
						<div className="col-12 col-md-4 mt-3">
							<img 
								src='/images/profiles/radar1.png'
								className="m-3 indexZ"
								width={50} 
								height={50}
								alt="Imagen radar 1 Hora"
								placeholder="DOMINANT_COLOR"
								quality="100"
								loading='lazy'
								/>
							<h2 className="text-muted">
								{ isDefaultLang ? '1 Hora' : '1 Hour' }
							</h2>
							<h3>{new Intl.NumberFormat('en-US', {
										style: 'currency',
										currency: isDefaultLang ? 'COP' : 'USD',
									}).format(
										Math.ceil(
											profile.rate_one_hour *
												(isDefaultLang ? 1 : globalConfig.cop_to_usd_rate)
										)
									)}
							</h3>
						</div>
						<div className="col-12 col-md-4 mt-3">
							<img 
								src='/images/profiles/radar2.png'
								className="m-3 indexZ"
								width={50} 
								height={50}
								alt="Imagen radar 2 Horas"
								placeholder="DOMINANT_COLOR"
								quality="100"
								loading='lazy'
							/>
							<h2 className="text-muted">
								{ isDefaultLang ? '2 Horas' : '2 Hours' }
							</h2>
							<h3>{new Intl.NumberFormat('en-US', {
										style: 'currency',
										currency: isDefaultLang ? 'COP' : 'USD',
									}).format(
										Math.ceil(
											profile.rate_two_hours *
												(isDefaultLang ? 1 : globalConfig.cop_to_usd_rate)
										)
									)}
							</h3>
						</div>
						<div className="col-12 col-md-4 mt-3">
							<img 
								src='/images/profiles/radar3.png'
								className="m-3 indexZ"
								width={50} 
								height={50}
								alt="Imagen radar 3 Horas"
								placeholder="DOMINANT_COLOR"
								quality="100"
								loading='lazy'
							/>
							<h2 className="text-muted">
								{ isDefaultLang ? '5 Horas' : '5 Hours' }
							</h2>
							<h3>{new Intl.NumberFormat('en-US', {
										style: 'currency',
										currency: isDefaultLang ? 'COP' : 'USD',
									}).format(
										Math.ceil(
											profile.rate_five_hours *
												(isDefaultLang ? 1 : globalConfig.cop_to_usd_rate)
										)
									)}
							</h3>
						</div>
					</div>
					<div className="text-white mx-auto text-center mt-4">
						<small>
							{ isDefaultLang
								? 'Estas tarifas incluyen transporte y preservativos'
								: 'rates transportation and condoms included'
							}
						</small>
						<br />
						<p className="fw-bold my-4">
							{ isDefaultLang ? 'Medio de Pago:' : 'Payment Method:' }
						</p>
						<div className="container">
							<img 
								src='/images/profiles/pagos.png'
								className="m-3 indexZ col-12 col-md-9"
								width={650}
								height={120}
								alt="Imagen Pagos"
								placeholder="DOMINANT_COLOR"
								quality="100"
								loading='lazy'
							/>
						</div>
						<p className="fw-bold my-4">
							{ callme }
						</p>						
						<div className="container col-10 col-md-6">
							{ profile.video_url ? 
								(
									<div>
										<video className="d-block w-100" controls >
											<source src={profile.video_url} type="video/mp4" />
											<track default kind="captions" srcLang="" src="/caption.vtt"/>
										</video>
									</div>
								) 
								: 
								( '' )
							}
						</div>
					</div>
				</div>
			</div>
		</>
  )
}
