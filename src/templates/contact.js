import React, { useState, useEffect } from 'react'
import SubHeader from '../components/sub-header'
import ReCAPTCHA from "react-google-recaptcha"
import Seo from '../components/seo';

const recaptchaPublicKey = process.env.CAPTCHA_KEY || "6Ld_dAwnAAAAAPbHV4jN7nz9mKU0_RGXJfnI_jVF"
const backUrl = process.env.BACK_URL || "https://admin.lacelestina.co"

const Contact = ({ pageContext }) => {
    const axios = require("axios")
    const lang = pageContext.lang
    const isDefaultLang = pageContext.lang === 'es'
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ alertMessage, setAlertMessage ] = useState('')
    const [formContent, setFormContent] = useState({ captcha: "" })
    const [ error, setError ] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormContent({ ...formContent, [e.target.name]: e.target.value })

        const contact = {
            "name": `${name}`,
            "email_address": `${email}`,
            "phone_number": 'no aplica',
            "published_at": null
        }
        await axios.post(`${backUrl}/contacts`, contact)
            .then(response => {
                console.log(`data -> ${response.data.data}`)
                setName('')
                setEmail('')
                setPhone('')
                setAlertMessage( isDefaultLang ? 'Solicitud Enviada' : 'Request sent'  )
                setError(false)
            }).catch(error => {
                console.log(`status -> ${error.response.status}, message -> ${error.response.statusText}`)
                setAlertMessage('Error')
                setError(true)
            })
    }

    const onReCAPTCHAChange = async (captchaCode) => {
        if (!captchaCode) {
          return;
        }
        setFormContent({ ...formContent, captcha: captchaCode });
    }

    return (
        <SubHeader lang={lang}>
            <Seo
				title={ isDefaultLang ? "Contactanos para escorts y putas" : 'Contact us for escort and call girl' }
				description={ isDefaultLang ? "Contactanos y te agregamos al canal privado, tenemos las mejores escorts y putas" : "Contact us for access to private channel, We have the best escorts and call girls" }
				keywords={ isDefaultLang ? "Contactanos y te agregamos al canal privado" : "Contact us for access to private channel" }
			/>
            <div className='bg-black py-4'>
                <div className='container'>
					<h1 className='text-danger'>
						{ isDefaultLang ? 'Contacto escorts y putas' : 'Escort and call girl contact' }
					</h1>
				</div>

                <div className="py-4 container col-12 row pb-4 mx-auto">
                    <h2 className="text-light mb-4">
						{ isDefaultLang ? 'Conviértete en cliente y recibe beneficios como:' 
                        : 'Become a customer and receive benefits such as: ' }
					</h2>
                    <h3 className="text-light mb-1">
                        {
                            isDefaultLang ? '1. Servicios gratis.' : '1. Free services.'
                        }
                    </h3>
                    <h3 className="text-light mb-1">
                        {
                            isDefaultLang ? '2. Adicionales Gratis.' : '2. Free aditionals.'
                        }
                    </h3>
                    <h3 className="text-light mb-4">
                        {
                            isDefaultLang ? '3. Acceso al catálogo con rostros por whats app de todas las modelos' : '3. All models faces catalog access'
                        }
                    </h3>
                    <form onSubmit={handleSubmit} >                    
                        <div className="col-6">
                            <input 
                                id="name"
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder={ isDefaultLang ? 'Nombre' : 'Name'   }
                                value={name}
                                onChange={ (e) => setName(e.target.value) }
                                required
                            />
                            <input 
                                id="email"
                                type="text"
                                name="email"
                                className="form-control mt-3"
                                placeholder={ isDefaultLang ? 'Correo electrónico' :  'Email' }
                                value={email}
                                onChange={ (e) => setEmail(e.target.value) }
                                required
                            />
                            <input
                                type="submit"
                                className="mb-4 mt-3 p-2 btn btn-primary"
                                disabled={ !formContent.captcha }
                                value={ isDefaultLang ? 'SEND MESSAGE' : 'ENVIAR MENSAJE' }
                            />
                            {
                                !!alertMessage ? <h6 className={`my-4 text-center ${ error ? 'text-danger' : 'text-success' }`}>{alertMessage}</h6> : null
                            }
                        </div>
                        <div className="flex justify-center">
                        {
                            <>
                                <ReCAPTCHA
                                    sitekey={recaptchaPublicKey}
                                    onChange={onReCAPTCHAChange}
                                />
                                <div className="py-2"></div>
                            </>
                        }
                        </div>
                        <a data-bs-toggle="collapse" href="#navbarNav" role="button" aria-expanded="false" aria-controls="navbarNav">
                            { isDefaultLang ? 'Política de privacidad' : 'Privacy policy' }
                        </a>
                        <div className="py-2"></div>
                        <div>
                            {   isDefaultLang ?
                                    <div className="collapse col-12" id="navbarNav">
                                        <h6>POLÍTICA DE PRIVACIDAD</h6>
                                        <p>
                                            El presente Política de Privacidad establece los términos en que La Celestina escorts Colombia usa y
                                            protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta
                                            compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar
                                            los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando
                                            que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de
                                            Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos
                                            revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.
                                        </p>
                                        <h6>Información que es recogida</h6>
                                        <p>
                                            Nuestro sitio web podrá recoger información personal por ejemplo: Nombre, información de contacto
                                            como su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario
                                            podrá ser requerida información específica para procesar algún pedido o realizar una entrega o
                                            facturación. 
                                        </p>
                                        <h6>Uso de la información recogida</h6>
                                        <p>
                                            Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible,
                                            particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar
                                            nuestros productos y servicios. Es posible que sean enviados correos electrónicos periódicamente a
                                            través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que
                                            consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos
                                            serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.
                                            La Celestina escorts Colombia está altamente comprometido para cumplir con el compromiso de
                                            mantener su información segura. Usamos los sistemas más avanzados y los actualizamos
                                            constantemente para asegurarnos que no exista ningún acceso no autorizado. 
                                        </p>

                                        <h6>Cookies</h6>
                                        <p>
                                            Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse
                                            en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información
                                            respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que
                                            tienen las cookies es que con ellas las web pueden reconocerte individualmente y por tanto brindarte el
                                            mejor servicio personalizado de su web.
                                            Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su
                                            frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información
                                            se elimina de forma permanente. Usted puede eliminar las cookies en cualquier momento desde su
                                            ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no
                                            dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la
                                            proporcione directamente, . Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de
                                            navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio web. También
                                            usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se declinan es
                                            posible que no pueda utilizar algunos de nuestros servicios.
                                        </p>

                                        <h6>Enlaces a Terceros</h6>
                                        <p>
                                            Este sitio web pudiera contener en laces a otros sitios que pudieran ser de su interés. Una vez que usted
                                            de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es
                                            redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus
                                            datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por
                                            lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.
                                        </p>

                                        <h6>Control de su información personal</h6>
                                        <p>
                                            En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es
                                            proporcionada a nuestro sitio web. Cada vez que se le solicite rellenar un formulario, como el de alta de
                                            usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico. En caso de
                                            que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier
                                            momento.
                                            Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su
                                            consentimiento, salvo que sea requerido por un juez con un orden judicial.
                                            La Celestina escorts Colombia Se reserva el derecho de cambiar los términos de la presente Política de
                                            Privacidad en cualquier momento.
                                        </p>
                                    </div> 
                                : 

                                    <div className="collapse col-12" id="navbarNav">
                                        <h6>PRIVACY POLICY</h6>
                                        <p>
                                            This Privacy Policy establishes the terms in which La Celestina escorts Colombia uses and
                                            protects the information that is provided by its users when using its website. This
                                            company is committed to the security of its users' data. When we ask you to fill
                                            fields of personal information with which you can be identified, we do so by ensuring
                                            It will only be used in accordance with the terms of this document. However, this Policy
                                            Privacy may change over time or be updated, so we recommend and emphasize 
                                            continually review this page to ensure that you agree to any such changes.
                                        </p>
                                        <h6>Information that is collected</h6>
                                        <p>
                                            Our website may collect personal information for example: Name, contact information
                                            such as your email address and demographic information. Also when necessary
                                            specific information may be required to process an order or make a delivery or billing. 
                                        </p>
                                        <h6>Use of collected information</h6>
                                        <p>
                                            Our website uses the information in order to provide the best possible service,
                                            particularly to keep a register of users, of orders if applicable, and to improve
                                            our products and services. Periodic emails may be sent to through our site with special offers, 
                                            new products and other advertising information that we deem relevant to you or may provide you with
                                            any benefit, these emails They will be sent to the address you provide and may be canceled at any time.
                                            La Celestina escorts Colombia is highly committed to fulfill the commitment of keep your information safe. 
                                            We use the most advanced systems and update them constantly to ensure that there is no unauthorized access.
                                        </p>

                                        <h6>Cookies</h6>
                                        <p>
                                            A cookie refers to a file that is sent in order to request permission to be stored
                                            on your computer, by accepting said file it is created and the cookie is then used to have information
                                            regarding web traffic, and also facilitates future visits to a recurring website. Other function that
                                            cookies have is that with them the web can recognize you individually and therefore offer you the
                                            best personalized service on your website. Our website uses cookies to be able to identify the pages 
                                            that are visited and their frequency. This information is used solely for statistical analysis and 
                                            then the information it is permanently deleted. You can delete cookies at any time from your
                                            computer. However, cookies help to provide a better service for websites, you are not
                                            give access to information from your computer or from you, unless you want it and the 
                                            provide directly. You can accept or deny the use of cookies, however most of browsers automatically 
                                            accept cookies as it serves to have a better web service. Also You can change the settings on your 
                                            computer to decline cookies. If they decline it is You may not be able to use some of our services.
                                        </p>

                                        <h6>Links to Third Parties</h6>
                                        <p>
                                            This website may contain links to other sites that may be of interest to you. If you click on these links 
                                            and leave our page, we no longer have control over the site to which you are redirected and therefore 
                                            we are not responsible for the terms or privacy or the protection of your data on those other third 
                                            party sites. Such sites are subject to their own privacy policies by which is recommended that 
                                            you consult them to confirm that you agree with them.
                                        </p>

                                        <h6>Control of your personal information</h6>
                                        <p>
                                            At any time you can restrict the collection or use of personal information that is
                                            provided to our website. Every time you are asked to fill in a form, such as the registration of
                                            user, you can check or uncheck the option to receive information by email. In case of
                                            that you have marked the option to receive our newsletter or advertising you can cancel it at any
                                            moment. This company will not sell, lease or distribute personal information that is collected without your
                                            consent, unless required by a judge with a court order. La Celestina escorts Colombia reserves 
                                            the right to change the terms of this Privacy Policy at any time.
                                        </p>
                                    </div>
                            }
                        </div>
                    </form>                    
                </div>
                
                <div className="container col-12">
                    <div className="row justify-content-between my-3">
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://escortnews.eu" title="Escort Girls" target="_blank" rel="noreferrer noopener">
                                <img width={200} height={100}  src="https://static.escortnews.eu/125x60.gif" alt="Escort Girls" />
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.escortnews.com" title="Escort Girls" target="_blank" rel="noreferrer noopener">
                                <img width={200} height={100} src="https://static.escortnews.com/new/banners-2021/88x32.gif" alt="Escort Girls" />
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.citytourgirls.com" target="_blank" rel="noreferrer noopener" title="Citytourgirls">
                                <img width={200} height={100} src="https://cdn.citytourgirls.com/static/bn/2p7z6ew6lw.gif" />
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.topescortdubai.com" target="_blank" rel="noreferrer noopener" title="Top Escort Dubai">
                                <img width={200} height={100} src="https://cdn.topescort.com/static/bn/iihgoxs1ap.gif" />
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.topescort.ge" target="_blank" rel="noreferrer noopener" title="Escort Georgia">
                                <img width={200} height={100} src="https://cdn.topescort.com/static/bn/vnl74cowkb.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.escortbabe.com" target="_blank" rel="noreferrer noopener" title="Escort Babe">
                                <img width={200} height={100} src="https://cdn.escortbabe.com/static/bn/jknwvk59mx.gif" />
                            </a> 
                        </div>
                    </div>

                    <div className="row justify-content-between my-3">
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.escortbabe.ch" target="_blank" rel="noreferrer noopener" title="Escort Switzerland">
                                <img width={200} height={100} src="https://cdn.escortbabe.com/static/bn/us697l9gpm.gif" />
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.escortbabe.at" target="_blank" rel="noreferrer noopener" title="Escort Austria">
                                <img width={200} height={100} src="https://cdn.escortbabe.com/static/bn/qfsd440cgg.gif" />
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.escortbabe.ru" target="_blank" rel="noreferrer noopener" title="Escort Russia">
                                <img width={200} height={100} src="https://cdn.escortbabe.com/static/bn/momi5pjwb7.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.callgirlsbulgaria.com" target="_blank" rel="noreferrer noopener" title="Escort Bulgaria">
                                <img width={200} height={100} src="https://cdn.callgirlsbulgaria.com/static/bn/dj4at1z57t.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.sexjobs.eu" target="_blank" rel="noreferrer noopener" title="Sex Jobs">
                                <img width={200} height={100} src="https://cdn.sexjobs.eu/static/bn/61fwo7bwac.gif" />
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.nordicescorts.com" target="_blank" rel="noreferrer noopener" title="Nordic Escorts">
                                <img width={200} height={100} src="https://cdn.nordicescorts.com/static/bn/ddrhh4f8xz.gif" />
                            </a>
                        </div>
                    </div>

                    <div className="row justify-content-between my-3">
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.kinkyescort.nl" target="_blank" rel="noreferrer noopener" title="Kinkyescort.nl">
                                <img width={200} height={100} src="https://cdn.topescort.com/static/bn/1gv64bxkcf.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.zuzana.com" target="_blank" rel="noreferrer noopener" title="Zuzana.com">
                                <img width={200} height={100} src="https://cdn.zuzana.com/static/bn/sqsdrwxcf2.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.travelgirlsclub.com" target="_blank" rel="noreferrer noopener" title="Travel Girls Club">
                                <img width={200} height={100} src="https://cdn.swinity.com/static/bn/rb13mkvt6s.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.escortdude.com" target="_blank" rel="noreferrer noopener" title="Escortdude.com">
                                <img width={200} height={100} src="https://cdn.escortdude.com/static/bn/axhfpxxgkj.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.escortgirls.be" target="_blank" rel="noreferrer noopener" title="Escort Belgium">
                                <img width={200} height={100} src="https://cdn.escortgirls.be/static/bn/bsrkapmu9g.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.topescort.com" target="_blank" rel="noreferrer noopener" title="Topescort.com">
                                <img width={200} height={100} src="https://cdn.topescort.com/static/bn/xpyex8rlzw.gif"/>
                            </a>
                        </div>
                    </div>

                    <div className="row justify-content-between my-3">
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.privehuis.nl" target="_blank" rel="noreferrer noopener" title="Escort & Thuisontvangst">
                                <img width={200} height={100} src="https://cdn.privehuis.nl/static/bn/8trgq57csg.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.privehuis.nl" target="_blank" rel="noreferrer noopener" title="Escort & Thuisontvangst">
                                <img width={200} height={100} src="https://cdn.privehuis.nl/static/bn/8trgq57csg.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.sexmassage.nl" target="_blank" rel="noreferrer noopener" title="Sexmassage.nl">
                                <img width={200} height={100} src="https://cdn.escortspots.com/static/bn/nmxhzxnsek.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.topescortnews.eu" target="_blank" rel="noreferrer noopener" title="Topescortnews.eu">
                                <img width={200} height={100} src="https://cdn.topescortnews.eu/static/bn/bqbdfky6eg.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.seduce.nl" target="_blank" rel="noreferrer noopener" title="Escort Rotterdam">
                                <img width={200} height={100} src="https://cdn.seduce.nl/static/bn/3rbk0odlna.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://escortdirectory.tv" title="EscortDirectory.TV - Escorts World Wide">
                                <img width={200} height={100} src="https://escortdirectory.tv/img/etv-200-100.gif" alt="EscortDirectory.TV - Escorts World Wide" title="EscortDirectory.TV - Escorts World Wide"/>
                            </a>
                        </div>
                    </div>

                    <div className="row justify-content-between my-3">
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.topescort.com.ua" target="_blank" rel="noreferrer noopener" title="Escort Ukraine">
                                <img width={198} height={52} src="https://cdn.topescort.com/static/bn/oili811b40.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.topescort.in" target="_blank" rel="noreferrer noopener" title="Escort India">
                                <img width={198} height={52} src="https://cdn.topescort.com/static/bn/cubvve60f3.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.escortnews.co.nz" target="_blank" rel="noreferrer noopener" title="Escort New Zealand">
                                <img width={198} height={52} src="https://cdn.topescort.com/static/bn/iiulzg6grf.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.escortnews.com.au" target="_blank" rel="noreferrer noopener" title="Escort Australia">
                                <img width={198} height={52} src="https://cdn.topescort.com/static/bn/52ul7zywx6.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.topescort.rs" target="_blank" rel="noreferrer noopener" title="Escort Belgrade">
                                <img width={198} height={52} src="https://cdn.topescort.com/static/bn/pa8lj37pmz.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.sexjobs.co.il" target="_blank" rel="noreferrer noopener" title="Escort Israel">
                                <img width={198} height={52} src="https://cdn.sexjobs.eu/static/bn/bdun0vll4c.gif"/>
                            </a>
                        </div>
                    </div>

                    <div className="row justify-content-between my-3">
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.callgirlsturkey.com" target="_blank" rel="noreferrer noopener" title="Call Girls Turkey">
                                <img width={198} height={52} src="https://cdn.callgirlsturkey.com/static/bn/w55fhrzaig.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.topescort.nl" target="_blank" rel="noreferrer noopener" title="Escort Amsterdam">
                                <img width={198} height={52} src="https://cdn.topescort.com/static/bn/0ateebybn5.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.sexjobs.it" target="_blank" rel="noreferrer noopener" title="Escort Italy">
                                <img width={198} height={52} src="https://cdn.sexjobs.it/static/bn/re27d6ewf7.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.sexguide.ro" target="_blank" rel="noreferrer noopener" title="Escort Romania">
                                <img width={198} height={52} src="https://cdn.sexguide.ro/static/bn/zc9prk4a7l.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.sexjobs.gr" target="_blank" rel="noreferrer noopener" title="Escort Greece">
                                <img width={198} height={52} src="https://cdn.sexjobs.gr/static/bn/npmxzovjop.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.sexjobs.gr" target="_blank" rel="noreferrer noopener" title="Escort Greece">
                                <img width={198} height={52} src="https://cdn.sexjobs.gr/static/bn/npmxzovjop.gif"/>
                            </a>
                        </div>
                    </div>

                    <div className="row justify-content-between my-3">
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.mistique.com/" target="_blank" rel="noreferrer noopener" title="Mistique">
                                <img width={198} height={52} src="https://cdn.mistique.com/static/bn/56z83ivzt4.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.escortmykonos.com" target="_blank" rel="noreferrer noopener" title="Escortmykonos">
                                <img width={198} height={52} src="https://cdn.escortmykonos.com/static/bn/5wa03xoztx.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.tophookers.nl" target="_blank" rel="noreferrer noopener" title="Hoeren Amsterdam">
                                <img width={198} height={52} src="https://cdn.tophookers.nl/static/bn/2zp923che4.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.sexjobs.pl" target="_blank" rel="noreferrer noopener" title="Escort Warsaw">
                                <img width={198} height={52} src="https://cdn.sexjobs.pl/static/bn/jgr3t55fnq.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.escorts.cz" target="_blank" rel="noreferrer noopener" title="Escort Prague">
                                <img width={198} height={52} src="https://cdn.escorts.cz/static/bn/5rd3c3zqy3.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.mykonosescort.com" target="_blank" rel="noreferrer noopener" title="Mykonosescort">
                                <img width={198} height={52} src="https://cdn.mykonosescort.com/static/bn/r6dfynzl0l.gif"/>
                            </a>
                        </div>
                    </div>

                    <div className="row justify-content-between my-3">
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.sexguide.nl" target="_blank" rel="noreferrer noopener" title="Escort Service & Prive ontvangst">
                                <img width={198} height={52} src="https://cdn.topescort.com/static/bn/1084q0kmpp.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.sexjobs.es" target="_blank" rel="noreferrer noopener" title="Escort Spain">
                                <img width={198} height={52} src="https://cdn.sexjobs.es/static/bn/bd6r4h5hs1.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.topescort.co.uk" target="_blank" rel="noreferrer noopener" title="London UK Escorts">
                                <img width={198} height={52} src="https://cdn.topescort.com/static/bn/qlqmmxtmko.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.topescort.de" target="_blank" rel="noreferrer noopener" title="Escort Service">
                                <img width={198} height={52} src="https://cdn.topescort.com/static/bn/y9g7ce8jeu.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.topescort.me" target="_blank" rel="noreferrer noopener" title="Escort Dubai & Middle East">
                                <img width={198} height={52} src="https://cdn.topescort.me/static/bn/0fsd8pgk7d.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.topescort.africa" target="_blank" rel="noreferrer noopener" title="Escort Africa">
                                <img width={198} height={52} src="https://cdn.topescort.com/static/bn/5ywb8fuxp5.gif"/>
                            </a>
                        </div>
                    </div>

                    <div className="row justify-content-between my-3">
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.topescortrussia.com" target="_blank" rel="noreferrer noopener" title="Escort Russia">
                                <img width={198} height={52} src="https://cdn.topescort.com/static/bn/8xkvzhrfes.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.topescort.cy" target="_blank" rel="noreferrer noopener" title="Escort Cyprus">
                                <img width={198} height={52} src="https://cdn.topescort.com/static/bn/bexyzoqmuk.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.topescort.asia" target="_blank" rel="noreferrer noopener" title="Escort Asia">
                                <img width={198} height={52} src="https://cdn.topescort.com/static/bn/m80ovvfb22.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.topescortmalta.com" target="_blank" rel="noreferrer noopener" title="Escort Malta">
                                <img width={198} height={52} src="https://cdn.topescort.com/static/bn/fcsa4s2r61.gif"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.smuglist.com" target="_blank" rel="noreferrer noopener" title="Smuglist.com">
                                <img width={198} height={52}src="https://cdn.smuglist.com/static/bn/1ndjkskp0j.gif"/>
                            </a>
                        </div>
                    </div>

                    <div className="row justify-content-between my-3">
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://escortlounge.org/" target="_blank" rel="noreferrer noopener" title="Worldwide Escort Directory">
                                <img width={320} height={60} src="https://escortlounge.org/images/escortlounge468x60.png" alt="escort directory" title="escortlounge.org" />
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.escortily.com" target="_blank" rel="noreferrer noopener">
                                <img width={320} height={60} decoding="async" title="www.escortily.com" alt="www.escortily.com" src="https://www.escortily.com/wp-content/uploads/2022/03/banner.png.webp"/>
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.fisse24.dk" target="_blank" rel="noreferrer noopener" alt="escort-annoncer">
                                <img width={320} height={60} alt="www.fisse24.dk" src="https://www.fisse24.dk/wp-content/uploads/2022/03/banner-01-e1647438529521.png" />
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.escort-annoncer.com" title="escort-annoncer" alt="escort-annoncer" target="_blank" rel="noreferrer noopener">
                                <img width={320} height={60} alt="www.Escort Aalborg" src="https://www.escort-annoncer.com/wp-content/uploads/2022/08/banner.png" />
                            </a>
                        </div>
                    </div>


                    <div className="row justify-content-between my-3">
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.escortily.dk" target="_blank" rel="noreferrer noopener">
                                <img width={320} height={60} target="_blank" rel="noreferrer noopener" alt="escortily.dk" src="https://www.escortily.dk/wp-content/uploads/2023/06/Banner.png" />
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.escort-lust.com" target="_blank" rel="noreferrer noopener">
                                <img width={320} height={60} title="escort-lust" alt="escort-lust" src="https://www.escort-lust.com/wp-content/uploads/2023/02/banner.png" />
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.escort55.com/" target="_blank" rel="noreferrer noopener">
                                <img width={320} height={60} decoding="async" alt="seksitreffit" src="https://www.escort55.com/wp-content/uploads/2023/03/banner1.png" />
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.acompanhantes69.net" target="_blank" rel="noreferrer noopener">
                                <img width={320} height={60} alt="acompanhantes69.net" src="https://www.acompanhantes69.net/wp-content/uploads/2022/06/banner.png" />
                            </a>
                        </div>
                    </div>

                    <div className="row justify-content-between my-3">
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.escortprivedames.be" target="_blank" rel="noreferrer noopener">
                                <img width={320} height={60} alt="escortprivedames" src="https://www.escortprivedames.be/wp-content/uploads/2022/08/banner.png" />
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.direct-seks.nl" target="_blank" rel="noreferrer noopener">
                                <img width={320} height={60} alt="www.direct-seks.nl" src="https://www.direct-seks.nl/wp-content/uploads/2023/03/banner.png" />
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.sexyholky.net" target="_blank" rel="noreferrer noopener" title="sexyholky.net" >
                                <img width={320} height={60} decoding="async" alt="sexyholky.net" src="https://www.sexyholky.net/wp-content/uploads/2022/08/banner.png" />
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.ladies69.ch" target="_blank" rel="noreferrer noopener">
                                <img width={320} height={60} alt="ladies69" src="https://www.ladies69.ch/wp-content/uploads/2022/08/banner.png" />
                            </a>                        
                        </div>
                    </div>

                    <div className="row justify-content-between my-3">
                        <div className="mx-auto my-xs-3 col-5 col-md-6">
                            <a href="https://escortlivegirls.com" target="_blank" rel="noreferrer noopener">
                                <img width={468} height={60} src="https://escortlivegirls.com/banner/elg468x60.png" alt="Escort Live Girls" title="Escort Live Girls" />
                            </a>
                        </div>
                        <div className="mx-auto my-xs-3 col-5 col-md-6">
                            <a href="https://www.londongirlmassage.co.uk/" title="High class escort in London" target="_blank">
                                <img width={468} height={60} src="https://www.londongirlmassage.co.uk/images/banner.jpg" alt="High class escort in London" />
                            </a>
                        </div>
                        
                    </div>
                    <div className="row justify-content-between my-3">
                        <div className="mx-auto my-xs-3 col-5 col-md-3">
                            <a href="https://www.chicasescort.lat" target="_blank" rel="noreferrer noopener" title="Chicas Escort">
                                <img width={200} height={300} src="https://cdn.chicasescort.lat/static/bn/dxbrgs6oje.gif"/>
                            </a>
                        </div>    
                        <div className="mx-auto my-xs-3 col-5 col-md-2">
                            <a href="https://www.escorts-sa.net" target="_blank" rel="noreferrer noopener">Escorts south africa</a>
                        </div>                    
                    </div>
                </div>
                
            </div>
            
        </SubHeader> 
    )
}

export default Contact

/*

<input 
    id="phone"
    type="text"
    name="phone"
    className="form-control mt-3"
    placeholder={ isDefaultLang ? 'Teléfono móvil' : 'Mobile phone' }
    value={phone}
    onChange={ (e) => setPhone(e.target.value) }
    required
/> 
*/