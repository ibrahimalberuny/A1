import React from 'react'

export default function articles({ lang }) {
    const isDefaultLang = lang === 'es'

   return (
    <div>
        <div  id="carouselExampleControls" className=" bg-dark col-12 carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner ps-4 mx-auto">
              <h3 className="col-12 p-3 fs-6 lh-base text-white text-center mt-5">
                Trabajar con La celestina es muy sencillo, solo debe escribir al correo electrónico <span>contacto@lacelestina.co</span>, o por whatsapp a la línea <span>302 427 7416</span><br/>
                Es el lugar mas confiable para convertirte en escort prepago de lujo, en <a href="https://lacelestina.co">la mejor agencia</a>, donde siempre respetamos tus derechos, dándote accesos a la mejor clientela, asegurando tu identidad y privaacidad. Somos 100% respetuosos y profesionales (no hacemos casting bi pedimos pruebas), siempre seremos honestos y sinceros, superando todas tus expectativas.
              </h3>
              <h3 className="col-12 p-3 fs-6 lh-base text-white text-center mt-5">
                <i className="text-danger">
                  La celestina
                </i>
                &ensp;es la mejor agencia en Colombia, abajo puedes ver<br/>
                  nuestras notas de prensa y reseñas que así nos reconocen.
              </h3>
              <div className="mx-auto text-center">
                <img
                  src="/images/jobs/tabs/ch.png"
                  width={120}
                  height={10}
                  alt={ isDefaultLang ? "Banner Notas de Prensa" : "Banner Press Release" }
                  loading="lazy"
                  placeholder="DOMINANT_COLOR"
                  quality="100" 
                />
              </div>
              <div className="bg-dark carousel-item col active card col-12">
                <div className="container row mx-auto">
                  <div className="radio-cards p-3 p-md-5 col-12 col-md-8 col-lg-5 my-3">
                    <p className="col-11 mx-auto">
                      ¿Cómo es la vida de una prepago?
                      <br/>
                      <span className="d-none d-sm-block">
                        "Cristina" es una mujer que ejerce esta profesión y narra cuáles han sido los hechos que han marcado su labor...
                      </span>
                    </p>
                    <p className="fw-bold mb-3 ">
                      Caracol Radio
                    </p>
                    <div className="row justify-content-between">
                      <a  className="col-10 col-sm-5 text-decoration-none fw-bold" href="https://alacarta.caracol.com.co/audio/097RD130000000473119/" target="_blank" rel="noreferrer">
                        <p className="text-danger">
                          Ir al artículo
                        </p>
                      </a>
                      <p className="text-muted col-10 col-sm-5">
                        feb,27 2017
                      </p>
                    </div>
                  </div>
                  <div className="radio-cards p-3 p-md-5 col-12 col-md-8 col-lg-5 my-3">
                    <p className="col-11">
                      Quiero ser prepago ¿Cuál es la mejor agencia?
                      <br/>
                      <span className="d-none d-sm-block">
                        Hola, siempre me ha llamado la atención este mundo, soy bonita, soy universitaria y creo que tengo las cualidades
                      </span>
                    </p>
                    <p className="fw-bold mb-3">
                      Foros Prepagos de Colombia
                    </p>
                    <div className="row justify-content-between">
                      <a className="col-10 col-sm-5 text-decoration-none fw-bold" href="https://foroprepagoscolombia.com/viewtopic.php?f=38&t=4354&p=22082&hilit=la+celestina#p22080" target="_blank" rel="noreferrer">
                        <p className="text-danger">
                          Ir al artículo
                        </p>
                      </a>
                      <p className="text-muted col-10 col-sm-5">
                        nov,10 2017
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-dark carousel-item card col-12">
                <div className="container row mx-auto">
                  <div className="radio-cards p-3 p-md-5 col-12 col-md-8 col-lg-5 my-3">
                    <p className="col-11">
                      ¿Turismo sexual en Colombia ¿Qué dicen sus beneficiadas?
                      <br/>
                      <span className="d-none d-sm-block">
                        "En Bogotá hay 23.426 trabajadoras sexuales, según alcaldia en Cali, Medellín y el eje cafeterero; la cita podría triplicarse
                      </span>
                    </p>
                    <p className="fw-bold mb-3 ">
                      Séptimo Día
                    </p>
                    <div className="row justify-content-between">
                      <a className="col-10 col-sm-5 text-decoration-none fw-bold" href="https://www.caracoltv.com/septimo-dia/capitulos/turismo-sexual-en-colombia-que-dicen-sus-beneficiados-y-que-dicen-quienes-quieren-que-se-prohiba" target="_blank" rel="noreferrer">
                        <p className="text-danger">
                          Ir al artículo
                        </p>
                      </a>
                      <p className="text-muted col-10 col-sm-5">
                        feb,25 2017
                      </p>
                    </div>
                  </div>
                  <div className="radio-cards p-3 p-md-5 col-12 col-md-8 col-lg-5 my-3">
                    <p className="col-11">
                      "Ahora me duele darlo gratis"
                      <br/>
                      <br />
                      Hablamos las Escorts casi novatas de Bogotá
                    </p>
                    <p className="fw-bold mb-3 ">
                      Revista VICE
                    </p>
                    <div className="row justify-content-between">
                      <a className="col-10 col-sm-5 text-decoration-none fw-bold" href="https://www.vice.com/es_co/article/z4gvy9/feliz-san-valentin-hablamos-con-escorts-casi-novatas-de-bogota" target="_blank" rel="noreferrer">
                      <p className="text-danger">
                        Ir al artículo
                        </p>
                      </a>
                      <p className="text-muted col-10 col-sm-5">
                        feb,14 2017
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="d-none d-md-block carousel-control-prev" type="button" data-bs-slide="prev" data-bs-target="#carouselExampleControls" >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="d-none d-md-block carousel-control-next" type="button" data-bs-slide="next" data-bs-target="#carouselExampleControls" >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="d-none d-md-block row mx-auto ms-3 col col-12 col-sm-8 d-block d-md-none">
            <div className="radio-cards p-3 p-md-5 col-10  my-3">
              <p className="col-11 mx-auto">
               ¿Turismo sexual en Colombia ¿Qué dicen sus beneficiadas?
                <br/>
                <span className="">
                "En Bogotá hay 23.426 trabajadoras sexuales, según alcaldia en Cali, Medellín y el eje cafeterero; la cita podría triplicarse
                </span>
              </p>
              <p className="fw-bold mb-3 ">
              Séptimo Día
              </p>
              <div className="row justify-content-between">
                <a className="col-10 col-sm-5 text-decoration-none fw-bold" href="https://www.caracoltv.com/septimo-dia/capitulos/turismo-sexual-en-colombia-que-dicen-sus-beneficiados-y-que-dicen-quienes-quieren-que-se-prohiba" target="_blank" rel="noreferrer">
                  <p className="text-danger">
                    Ir al artículo
                  </p>
                </a>
                <p className="text-muted col-10 col-sm-5">
                  feb,27 2017
                </p>
              </div>
            </div>
            <div className="radio-cards p-3 p-md-5 col-10 col-sm-8 my-3 d-block d-md-none">
              <p className="col-11">
              "Ahora me duele darlo gratis"
                <br/>
                <span className="">
                Hablamos las Escorts casi novatas de Bogotá
                </span>
              </p>
              <p className="fw-bold mb-3">
                Revista AVICE
              </p>
              <div className="row justify-content-between">
                <a className="col-10 col-sm-5 text-decoration-none fw-bold" href="https://www.vice.com/es_co/article/z4gvy9/feliz-san-valentin-hablamos-con-escorts-casi-novatas-de-bogota" target="_blank" rel="noreferrer">
                  <p className="text-danger">
                  Ir al artículo
                  </p>
                </a>
                <p className="text-muted col-10 col-sm-5">
                feb,14 2017
                </p>
              </div>
            </div>           
          </div>
    </div>
  )
}
