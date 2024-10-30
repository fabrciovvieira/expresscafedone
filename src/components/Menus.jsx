import { useState } from "react";
import { motion } from "framer-motion";

const menus = [
    {
      title: "MENU CLÁSSICO",
      items: [
        { name: "Carioca", description: "(expresso e água)" },
        { name: "Expresso", description: "(expresso puro)" },
        { name: "Macchiato", description: "(expresso com espuma do leite)" },
        { name: "Latte", description: "(expresso com leite)" },
        { name: "Chá variados", description: "" },
        { name: "Cappuccino italiano", description: "(expresso, leite e cacau em pó)" },
      ],
    },
    {
      title: "MENU GOURMET",
      items: [
        { name: "Menu de Café Clássico + Cappuccino Vanilla", description: "(expresso, cacau, leite e essência)" },
        { name: "Expresso romano", description: "(expresso com raspas de limão siciliano)" },
        { name: "Chocolate quente", description: "" },
      ],
    },
    {
      title: "MENU PREMIUM",
      items: [
        { name: "Menu de Café Clássico + petit fours", description: "" },
        { name: "Cappuccino tradicional", description: "(mistura sabor canela)" },
        { name: "Moccaccino", description: "(expresso, espuma do leite e calda de chocolate)" },
        { name: "Expresso com licor 43", description: "" },
        { name: "Expresso com amarula", description: "" },
        { name: "Expresso com baileys", description: "" },
        { name: "Expresso com essências", description: "" },
      ],
    },
    {
      title: "MENU OURO",
      items: [
        { name: "Expresso", description: "" },
        { name: "Macchiato", description: "" },
        { name: "Latte", description: "" },
        { name: "Soda italiana", description: "água com gás, gelo e xarope de maçã verde ou frutas vermelhas" },
        { name: "Mocca gelado", description: "leite, calda de chocolate, gelo e expresso" },
        { name: "Latte caramelo gelado", description: "leite, calda de caramelo e gelo" },
      ],
    },
];

const Menus = () => {
    const [currentMenu, setCurrentMenu] = useState(0);

    const handleDragEnd = (event, info) => {
        // Verifica a direção do arrasto
        if (info.offset.x < -100) {
          nextMenu();
        } else if (info.offset.x > 100) {
          // Arrastou para a direita
          prevMenu();
        }
      };
    
      const nextMenu = () => {
        setCurrentMenu((prev) => (prev + 1) % menus.length);
      };
    
      const prevMenu = () => {
        setCurrentMenu((prev) => (prev - 1 + menus.length) % menus.length);
      };
    

  return (
    <div 
      className="w-screen h-full flex flex-col justify-center items-center bg-bgMenu bg-contain phone:bg-cover bg-no-repeat phone:bg-bgMenuMobile"
    >
      <div className="mt-[400px] phone:mt-[200px] ">
        <h1 className='font-Cormorant italic font-bold text-9xl text-fontColours pb-5 phone:text-5xl'>Conheça nosso menu</h1>
      </div>

      <motion.div 
      key={currentMenu}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      className="">
        <h1 className="text-center text-3xl font-bold italic font-Cormorant pb-10">{menus[currentMenu].title}</h1>
        <div className="flex flex-col justify-center items-center text-center">
            {menus[currentMenu].items.map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-center text-center">
              <span className="font-bold">{item.name}</span>
              <span className="font-thin">{item.description}</span>
              
            </div>
          ))}
        </div>
      </motion.div>
      <div className="flex justify-between items-center w-[90%] mb-10">
      <button onClick={prevMenu} className="text-2xl text-white bg-black rounded-full px-2 hover:bg-gray-700 transition duration-200">←</button>
      <div className="flex space-x-2 mt-8">
          {menus.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full ${index === currentMenu ? 'bg-fontColours' : 'bg-fontColours'}`}
            />
          ))}
        </div>
        <button onClick={nextMenu} className="text-2xl text-white bg-black rounded-full px-2 hover:bg-gray-700 transition duration-200">→</button>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-fontColours text-[#EBDED1] px-3 py-3 text-3xl phone:text-sm font-raleway rounded-xl text-center mb-10"
      >
        SOLICITE SEU ORÇAMENTO AGORA
      </motion.button>
    </div>
  );
};

export default Menus;
