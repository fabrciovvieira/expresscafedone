import { motion, useInView } from 'framer-motion';
import { useRef } from "react";

import feed1 from '../assets/feed1.png';
import feed2 from '../assets/feed2.png';
import feed4 from '../assets/feed4.png';
import feed5 from '../assets/feed5.png';
import feed6 from '../assets/feed6.png';
import caneca from '../assets/caneca2.png';



const FeedBack = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    // Variáveis de animação para as imagens
    const imageVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    };
  
  return (
    <div 
      ref={ref}
      className="w-screen h-[133vh] phone:h-full bg-lastBg bg-cover phone:bg-contain bg-no-repeat phone:flex-col feedback"
    >
      <div className="phone:h-auto  bg-lastBg bg-cover bg-no-repeat">
        <h1 className="font-Cormorant pt-32 text-6xl italic text-center text-fontColours phone:text-5xl phone:font-bold">
          A EXPERIÊNCIA <br />
          <span className="font-bold">NÃO MENTE...</span>
        </h1>
        
        <div className="w-full h-screen px-32 phone:px-4 phone:pb-8 m-auto flex justify-center items-center gap-5 phone:gap-5  phone:flex-col phone:h-auto phone:mt-10">
          {/** Animação nas imagens */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 0.5 }} // Delay para o primeiro feed
          >
            <img 
              src={feed1} 
              alt="Feedback image 1" 
              className="w-[400px] h-auto" 
            />
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 0.7 }} // Delay para o segundo feed
          >
            <img 
              src={feed2} 
              alt="Feedback image 2"
              className="w-[400px] h-auto" 
            />
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 0.9 }} // Delay para o terceiro feed
          >
            <img 
              src={feed5} 
              alt="Feedback image 3"
              className="w-[400px] h-auto" 
            />
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <img 
              src={feed4} 
              alt="Feedback image 4"
              className="w-[400px] h-auto" 
            />
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <img 
              src={feed6} 
              alt="Feedback image 4"
              className="w-[400px] h-auto" 
            />
          </motion.div>
        </div>

        <h2 className="text-7xl font-Cormorant font-bold italic text-center pt-20 phone:text-5xl bg-background">
          O toque especial <br /> para o seu evento:
        </h2>
        <div className="w-screen max-w-screen-lg bg-background m-auto flex phone:flex-col justify-center items-center gap-5 pb-10 pt-32 px-32 phone:px-3 phone:pt-10">
          <div className=" phone:text-center w-[70%] phone:w-[95%]">
            <p className="font-raleway text-3xl phone:text-lg">
              Sabemos que seu evento é único, e o café tem o poder de tornar os momentos ainda mais especiais. 
              Com a <span className="font-bold">Cafeteria Express</span>, oferecemos mais do que uma bebida – 
              oferecemos uma experiência completa de prazer e requinte, pensada para surpreender seus convidados.
            </p>
            <p className="font-raleway text-3xl pt-3 phone:text-lg">
              Entre em contato e descubra como podemos transformar seu evento com o melhor café que você já experimentou:
            </p>
            <a href="https://wa.me/5548988426128">
              <motion.button
                whileHover={{scale:1.1}}
                className="bg-fontColours text-[#EBDED1] px-3 py-3 text-3xl phone:text-sm font-raleway rounded-xl mt-10 phone:w-full"
              >
                SOLICITE SEU ORÇAMENTO AGORA
              </motion.button>
            </a>
          </div>  
          <img src={caneca} alt="Caneca do café" className="w-[500px] h-auto phone:w-[250px] phone:mt-5"/>
        </div>
      </div>
    </div>
  )
}

export default FeedBack