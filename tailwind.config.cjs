const createScale = (name) => ({
  1: `var(--${name}1)`,
  2: `var(--${name}2)`,
  3: `var(--${name}3)`,
  4: `var(--${name}4)`,
  5: `var(--${name}5)`,
  6: `var(--${name}6)`,
  7: `var(--${name}7)`,
  8: `var(--${name}8)`,
  9: `var(--${name}9)`,
  10: `var(--${name}10)`,
  11: `var(--${name}11)`,
  12: `var(--${name}12)`,
});


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: createScale('indigo'),
      primaryA: createScale('indigoA'),
      gray: createScale('slate'),
      grayA: createScale('slateA'),
      error: createScale('red'),
      success: createScale('green'),
      warning: createScale('amber'),
      info: createScale('blue'),
      black: createScale('blackA'),
      white: createScale('whiteA'),
      transparent: 'transparent',
      starFill: 'rgb(255, 178, 36)',
    },
    extend: {
      fontFamily:{
        system:"'Inter', sans-serif"
      }
    },
  },
  plugins: [

    require('@tailwindcss/forms'),
  ],
}
