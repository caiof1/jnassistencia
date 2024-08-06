import styles from './Home.module.css'

// import components
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import {useEffect, useState} from 'react'

import image from '../../images/man.png'
import eletrolux from '../../images/Group 140.png'
import activy from '../../images/activity 1.png'
import command from '../../images/command 1.png'
import piechart from '../../images/pie-chart 1.png'
import maquina from '../../images/Rectangle 48.png'
import eli from '../../images/Ellipse 33.png'

import cliente1  from '../../images/cliente1.png'
import cliente2  from '../../images/cliente 2.png'

import cliente3  from '../../images/cliente3.png'
import cliente4 from '../../images/cliente4.png'
import cliente5 from '../../images/cliente5.png'

import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Pagination } from 'swiper/modules';

// import required modules

import { Autoplay } from 'swiper/modules';

const Home = () => {

  const [amountSlidePerView, setAmountSlidePerView] = useState(4);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) {
        setAmountSlidePerView(1);
      } else if (window.innerWidth < 900) {
        setAmountSlidePerView(2);
      } else if (window.innerWidth < 1100)  {
        setAmountSlidePerView(3);
      } else {
        setAmountSlidePerView(4);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <main className={styles.main}>
      <a href="https://contate.me/jnassistenciatecnica" className={styles.whatsapp}>
        <i class="fa-brands fa-whatsapp"></i>
      </a>
      <Header />
      <section className={styles.assistencia_image}>
        <div className={styles.text_assist}>
          <h1>Assistencia de Geladeira e Freezer</h1>
          <p className={styles.text_thebest}>A melhor e mais bem avaliada assistencia tecnica de Geladeira e Freezer de Belo Horizonte, com mais de 5 anos de experiencia!</p>
          <a href="https://contate.me/jnassistenciatecnica">
            <button>Entre em contato conosco!</button>
          </a>
        </div>
        <div className={styles.image_assist}>
          <div className={styles.google}>
            <div className={styles.text_google}>
              <span>Nota do Google</span>
              <span>
                <i className="fa-solid fa-star"></i> 
                4,9
              </span>
            </div>
            <a href="https://maps.app.goo.gl/mAkTwEcgPxigupmu9" target="_blank">
              <button>Ver</button>
            </a>
          </div>
          <div className={styles.back_image}>
            <img src={image} alt=""/>
          </div>
          <div className={styles.location}>
            <span>Localização</span>
            <span>
              <i className="fa-solid fa-location-dot"></i>
              <span>Santa Luzia - MG</span>
            </span>
          </div>
        </div>
      </section>

      

      <section className={styles.marcas}>
        <h2>Atendemos as principais marcas do mercado</h2>
        <Swiper
          slidesPerView={amountSlidePerView}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className={styles.all_marcas}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <img src={eletrolux} alt=""/>
            <span>Eletrolux</span>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={eletrolux} alt=""/>
            <span>Consul</span>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={eletrolux} alt=""/>
            <span>Brastemp</span>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={eletrolux} alt=""/>
            <span>Continental</span>
          </SwiperSlide>
        </Swiper>
      </section>
    </main>
    <section className={styles.diferenciais}>
      <div className={styles.quais_diferenciais}>
        <div className={styles.text_diferenciais}>
          <h2>Quais são os diferencias da JN</h2>
          <p>Não acredita no quão bom somos? então observe abaixo a nossa nota no google, podendo tirar suas conclusões com base nas avaliações dos nossos clientes!</p>
          <div className={styles.perfil_google}>
            <div>
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
              <span className={styles.avaliation}>4.9 / 5 avaliação</span>
              <span>Google</span>
            </div>
            <a href="https://maps.app.goo.gl/mAkTwEcgPxigupmu9" target="_blank">
              <button>Perfil da JN no Google</button>
            </a>
          </div>
        </div>
        <div className={styles.text_quais}>
          <div>
            <div className={styles.img}>
              <img src={activy} alt="" />
            </div>
            <span>
            <h4>Atendimento</h4>
            <p>O Atendimento é realizado no mesmo dia do contato. Não te deixamos na mão quando a sua geladeira ou freezer parar de funcionar!</p>
            </span>
          </div>
          <div>
            <div className={styles.img}>
              <img src={piechart} alt="" />
            </div>
            <span>
            <h4>Tecnico</h4>
            <p>Tecnico formado e graduado em diversos cursos, para te proporcionar total segurança!</p>
            </span>
          </div>
          <div>
            <div className={styles.img}>
              <img src={command} alt="" />
            </div>
            <span>
            <h4>Garantia</h4>
            <p>Segurança total para você como cliente, te damos 90 dias de garantia para que não precise se preocupar!</p>
            </span>
          </div>
        </div>
      </div>
    </section>

    <main className={styles.main}>
      <h3>Avaliações direta do Google</h3>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]} 
        className={styles.swiper_a}
      >
        <SwiperSlide className={styles.avaliation_swiper}>
          <div>
            <img src={cliente1} alt=""/>
            <span>
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
              <p>Vanusa Garcia de Barros</p>
            </span>
          </div>
          <p className={styles.avaliation_text}>Gostaria de manifestar minha satisfação com o trabalho do Júlio. Atencioso, prestativo e resolutivo. Me atendeu prontamente na realização do conserto de uma geladeira. Super indico. Preço justo.</p>
          
        </SwiperSlide>
        <SwiperSlide className={styles.avaliation_swiper}>
          <div>
            <img src={cliente3} alt=""/>
            <span>
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
              <p>VVarlei Neves</p>
            </span>
          </div>
          <p className={styles.avaliation_text}>Serviço realizado com sucesso! Parabéns Julio pelo serviço prestado. 👏👏
          </p>
          
        </SwiperSlide>
        <SwiperSlide className={styles.avaliation_swiper}>
          <div>
            <img src={cliente2} alt=""/>
            <span>
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
              <p>Álax Almeida</p>
            </span>
          </div>
          <p className={styles.avaliation_text}>O técnico que veio foi super cordial, sincero e atencioso as dúvidas. Prestou o serviço com cuidado e resolveu o problema da Geladeira. Difícil acha profissionais na área que atenda as expectativas, toda vez que precisa sei onde ligar. Outra coisa o preço é um dos melhores que achei na pesquisa.
          </p>
          
        </SwiperSlide>
        <SwiperSlide className={styles.avaliation_swiper}>
          <div>
            <img src={cliente4} alt=""/>
            <span>
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
              <p>Lucia Leal</p>
            </span>
          </div>
          <p className={styles.avaliation_text}>Necessário! Atencioso, educado, objetivo, técnico, preço justo, só pontos positivos q considerar. E um contato para salvar na agenda.
          </p>
          
        </SwiperSlide>
        <SwiperSlide className={styles.avaliation_swiper}>
          <div>
            <img src={cliente5} alt=""/>
            <span>
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
              <p>Ariele Dias</p>
            </span>
          </div>
          <p className={styles.avaliation_text}>Ótimo profissional, serviço de 1° qualidade e atendimento maravilhoso. Super indico!!!
          </p>
          
        </SwiperSlide>
        
      </Swiper>

      <section className={styles.oferecemos}>
        <div className={styles.oque_oferecemos}>
          <h2>O que oferecemos?</h2>
          <div>
            <span className={styles.circle_check}>
              <span><i className="fa-solid fa-check"></i></span>
              <p>Reparo em geladeiras</p>
            </span>
          </div>
          <div>
            <span className={styles.circle_check}>
              <span><i className="fa-solid fa-check"></i></span>
              <p>Reparo em Freezer</p>
            </span>
          </div>
          <div>
            <span className={styles.circle_check}>
              <span><i className="fa-solid fa-check"></i></span>
              <p>Reparo em Maquina de lavar</p>
            </span>
          </div>
          <div>
            <span className={styles.circle_check}>
              <span><i className="fa-solid fa-check"></i></span>
              <p>Atendimento rápido</p>
            </span>
          </div>
          <div>
            <span className={styles.circle_check}>
              <span><i className="fa-solid fa-check"></i></span>
              <p>Visita agendada</p>
            </span>
          </div>
        </div>
        <div className={styles.image_oferecemos}>
          <div className={styles.contact}>
            <img src={eli} alt=""></img>
            <div>
              <span>Julio</span>
              <span>Tecnico especializado</span>
            </div>
            <a href="https://contate.me/jnassistenciatecnica" target="_blank">
              <button><i class="fa-regular fa-comment"></i></button>
            </a>
          </div>
          <img src={maquina} alt="" />
          <div className={styles.custo}>
            <span><i className="fa-solid fa-check"></i></span>
            <p>Preço que cabe no seu bolso</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default Home