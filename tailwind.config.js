/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'phone2': {'max': '380px'},
      'phone': {'max': '600px'},
      'ipad': {'max': '768px'},
      'tablet800': {'max': '830px'},
      'tablet': {'max': '1024px'},
      'laptop': {'max': '1100px'},
      'desktop': {'max': '1280px'},
    },
    backgroundImage: {
      'bgHero': "url('./bgHero.png')",
      'bgHeroMobile': "url('./bgheroMobile.png')",
      'bgMenu': "url('./menuBg.png')",
      'bgMenuMobile': "url('./bgMenuMobile.png')",
      'bgFeedBack': "url('./feedBackBg.png')",
      'bgFeedBackMobile': "url('./feedBackBgMobile.png')",
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