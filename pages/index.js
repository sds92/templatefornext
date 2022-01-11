import { FeedBack, Icons, Catalog, Header, Section, Deviders } from '../components/complicated';

export default function Home({ lgView }) {
  return (
    <body>
      <>
        <Header lgView={lgView} />

        <Section className={lgView ? `mt-20` : `mt-16`} id={'Main'} />
        <Section className={''}>
          <Catalog lgView={lgView}/>
        </Section>
        <Section className={''} id={'About'} />
        <Deviders/>
        <Section className={''} id={'Advantages'} />
        <Section className={''} id={'Gallery'} />

        <Section className={''} id={'Contacts'} />

        

        <section className='section section-lg bg-gray-700 bg-gray-500 avdantages' id='advantages'>
          
        </section>

        {/* <!-- Projects--> */}

        <section className='section section-lg text-center' id='gallery'>
         
        </section>

        {/* <!-- Map & contacts--> */}

        <section className='section section-lg bg-gray-100 contacts' id='contacts'>
          <div className='container'>
            <h3 className='wow-outer text-center'>
              <span
                className='wow slideInUp'
                // style='visibility: visible; animation-name: slideInUp;'
              >
                Контакты
              </span>
            </h3>

            <div className='margin-top-30 contacts-container'>
              <div className='col-lg-8'>
                <div className='form-container' data-roboweb='5ddf99f7064cf1624d23d7ec-508'>
                  <h6 className='wow-outer' data-roboweb='5ddf99f7064cf1624d23d7ec-509'>
                    <span
                      className='wow slideInDown'
                      data-id='17'
                      data-type='string'
                      data-editable='true'
                      data-roboweb='5ddf99f7064cf1624d23d7ec-510'
                    >
                      Свяжитесь с нами
                    </span>
                  </h6>
                  {/* <!-- RD Mailform--> */}

                  <FeedBack />
                </div>
              </div>
              <div className='col-lg-4 wow fadeIn'>
                <div className='layout-bordered__aside-item'>
                  <h6 className='heading-8'>Телефон</h6>

                  <div className='unit flex-row unit-spacing-xxs'>
                    <div className='unit__body'>
                      <a href='tel:+74951202735'>+7 (495) 120-27-35</a>
                    </div>
                  </div>
                </div>
                <div className='layout-bordered__aside-item margin-top-30'>
                  <h6 className='heading-8'>E-mail</h6>

                  <div className='unit flex-row unit-spacing-xxs'>
                    <div className='unit__body'>
                      <a href='mailto:stroyoptplit@mail.ru'>stroyoptplit@mail.ru</a>
                    </div>
                  </div>
                </div>
                <div className='layout-bordered__aside-item margin-top-30'>
                  <h6 className='heading-8'>Адрес</h6>

                  <div className='unit flex-row unit-spacing-xxs'>
                    <div className='unit__body'>
                      <span>Москва, Проектируемый проезд № 134, вл&nbsp;4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section map'>
          <div className='google-map-container google-map lazy-loaded'>
            <iframe
              src='https://yandex.ru/map-widget/v1/-/CCUYiXRD-B'
              width='100%'
              height='100%'
              frameBorder='1'
              allowFullScreen='true'
              // style='position:relative;'
            ></iframe>
          </div>
        </section>

        {/* <!-- Page Footer--> */}
        <footer className='section footer-minimal bg-gray-700 footer'>
          <div className='container-full' data-roboweb='5ddf99f7064cf1624d23d7ec-546'>
            <div className='footer-container'>
              <div className='brand'>
                <a href='index.html'>
                  <img src='images/logo.png' alt width='40' height='50' srcset='images/logo.png 2x' />
                </a>
              </div>

              <div className='development'>
                <img src='images/roboweb-lite.png' alt='' />
                <p>
                  &nbsp;2021. Сайт создан с помощью <a href='https://roboweb.site/'>RoboWeb</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
      <div className='preloader' data-roboweb='5ddf99f7064cf1624d23d7ec-561'>
        <div className='preloader-logo' data-roboweb='5ddf99f7064cf1624d23d7ec-562'>
          <img src='images/logo-big.png' alt width='129' height='39' srcset='images/logo-big.png 2x' />
        </div>
        <div className='preloader-body' data-roboweb='5ddf99f7064cf1624d23d7ec-564'>
          <div id='loadingProgressG' data-roboweb='5ddf99f7064cf1624d23d7ec-565'>
            <div
              className='loadingProgressG'
              id='loadingProgressG_1'
              data-roboweb='5ddf99f7064cf1624d23d7ec-566'
            ></div>
          </div>
        </div>
      </div>
      {/* <!-- PANEL--> */}
      {/* <!-- Global Mailform Output--> */}
      <div className='snackbars' id='form-output-global' data-roboweb='5ddf99f7064cf1624d23d7ec-567'></div>
      {/* <!-- Javascript--> */}
    </body>
  );
}
