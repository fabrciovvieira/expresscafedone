import logo from '../assets/logoCafe.png'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';

const cardData = [
    {
      title: "Sofisticação e Sabor",
      description: "Serviço impecável, com baristas qualificados e cafés de origem selecionada, garantindo uma experiência inesquecível."
    },
    {
      title: "Qualidade Garantida",
      description: "Cada xícara é preparada com atenção aos detalhes, proporcionando uma experiência de café única e memorável."
    },
    {
      title: "Atendimento Personalizado",
      description: "Nosso atendimento é focado em oferecer a melhor experiência para nossos clientes, sempre prontos para atender suas necessidades."
    }
];

const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const cardVariants = {
        hidden: { opacity: 0, x: -200, scale: 0.2 },
        visible: { opacity: 1, x: 0, scale: 1 }
    };
  return (
    <div className="w-screen h-full  bg-bgHero bg-cover bg-no-repeat phone:bg-bgHeroMobile phone:bg-contain">
        <img src={logo} alt="logo" className='w-[250px] h-auto m-auto pt-10'/>

        <div className='w-[100%] pl-36 phone:pl-0 phone:flex phone:flex-col phone:justify-center phone:items-center'>
            <h1 className="font-Cormorant text-7xl font-light pb-10 phone:text-3xl phone:text-center">Um toque de elegância <br />
                <span className="font-bold text-8xl phone:text-5xl">em cada evento.</span>
            </h1>

            <p className="w-[60%] phone:w-screen phone:text-center font-raleway font-normal text-3xl phone:text-xl">Imagine seus momentos especiais sendo enriquecidos com o sabor inconfundível do <span className="font-bold">melhor café</span>.
            Na Cafeteria Express, trazemos uma <span className="font-bold">experiência sensorial</span> única para seu evento, com bebidas de qualidade superior e uma apresentação impecável.</p>
            <motion.button 
            whileHover={{scale:1.1}}
            className="bg-fontColours text-[#EBDED1] px-3 py-3 text-3xl phone:text-sm font-raleway rounded-xl mt-10 phone:mx-auto">SOLICITE SEU ORÇAMENTO AGORA</motion.button>  
        </div>

        <div 
        ref={ref}
        className="flex phone:flex-col w-screen pt-24 pb-10 gap-10 justify-center phone:items-center phone:m-auto  phone:pb-10 phone:bg-background">
        {cardData.map((card, index) => (
            <motion.div 
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: index * 0.5 }} 
            className="w-[275px] h-full p-5 flex flex-col gap-3 border border-fontColours rounded-2xl"
            >
            <h2 className="text-4xl font-Cormorant font-bold text-center">{card.title}</h2>
            <p className="text-2xl font-raleway">{card.description}</p>
            </motion.div>
        ))}
        </div>
    </div>
  )
}

export default Hero