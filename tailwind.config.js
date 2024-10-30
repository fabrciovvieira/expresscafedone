/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'phone2': {'max': '380px'},
      'phone': {'max': '900px'},
      'ipad': {'max': '768px'},
      'tablet800': {'max': '830px'},
      'tablet': {'max': '1024px'},
      'laptop': {'max': '1100px'},
      'desktop': {'max': '1280px'},
    },
    backgroundImage: {
      'bgHero': "url('./public/bgHero.png')",
      'bgHeroMobile': "url('./public/bgheroMobile.png')",
      'bgMenu': "url('./public/menuBg.png')",
      'bgMenuMobile': "url('./public/bgMenuMobile.png')",
      'bgFeedBack': "url('./public/feedBackBg.png')",
      'bgFeedBackMobile': "url('./public/feedBackBgMobile.png')",
    },
    extend: {
      colors: {
        background: "#DFCCB6",
        background2: "#FFF2E4",
        fontColours: "#422218",
      },
      fontFamily: {
        Cormorant: ['Cormorant', 'serif'],
        raleway: ['raleway', 'serif'],
      },
    },
  },
  plugins: [],
}