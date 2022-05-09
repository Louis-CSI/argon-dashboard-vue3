module.exports = {
  important: true,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          light: '#ff664a',
          DEFAULT: '#ea2b1f',
          dark: '#af0000',
          50: 'rgb(253, 237, 236, 1)',
          100: 'rgb(252, 220, 218, 1)',
          150: 'rgb(250, 202, 199, 1)',
          200: 'rgb(248, 185, 180, 1)',
          250: 'rgb(246, 167, 162, 1)',
          300: 'rgb(245, 150, 143, 1)',
          350: 'rgb(241, 115, 106, 1)',
          400: 'rgb(239, 97, 87, 1)',
          450: 'rgb(238, 80, 68, 1)',
          500: 'rgb(236, 62, 50, 1)',
          600: 'rgb(224, 34, 21, 1)',
          650: 'rgb(205, 31, 19, 1)',
          700: 'rgb(187, 29, 17, 1)',
          750: 'rgb(168, 26, 16, 1)',
          80: 'rgb(149, 23, 14, 1)',
          850: 'rgb(131, 20, 12, 1)',
          900: 'rgb(112, 17, 10, 1)',
        },
        green: {
          light: '#52cb55',
          DEFAULT: '#009925',
          dark: '#006900',
          50: 'rgb(235, 255, 240, 1)',
          100: 'rgb(112, 255, 148, 1)',
          150: 'rgb(92, 255, 133, 1)',
          200: 'rgb(71, 255, 117, 1)',
          250: 'rgb(51, 255, 102, 1)',
          300: 'rgb(10, 255, 71, 1)',
          350: 'rgb(0, 245, 61, 1)',
          400: 'rgb(0, 224, 56, 1)',
          450: 'rgb(0, 204, 51, 1)',
          500: 'rgb(0, 184, 46, 1)',
          600: 'rgb(0, 143, 36, 1)',
          650: 'rgb(0, 122, 31, 1)',
          700: 'rgb(0, 102, 26, 1)',
          750: 'rgb(0, 82, 20, 1)',
          800: 'rgb(0, 61, 15, 1)',
          850: 'rgb(0, 41, 10, 1)',
          900: 'rgb(0, 20, 5, 1)',
        },
        blue: {
          light: '#7596ff',
          DEFAULT: '#3369e8',
          dark: '#003fb5',
          50: 'rgb(237, 242, 253, 1)',
          100: 'rgb(218, 228, 251, 1)',
          150: 'rgb(200, 215, 249, 1)',
          200: 'rgb(182, 201, 247, 1)',
          250: 'rgb(163, 188, 245, 1)',
          300: 'rgb(145, 174, 243, 1)',
          350: 'rgb(126, 161, 241, 1)',
          400: 'rgb(108, 147, 239, 1)',
          450: 'rgb(90, 134, 237, 1)',
          500: 'rgb(71, 120, 235, 1)',
          600: 'rgb(35, 93, 231, 1)',
          650: 'rgb(24, 83, 220, 1)',
          700: 'rgb(22, 76, 202, 1)',
          750: 'rgb(20, 69, 184, 1)',
          800: 'rgb(18, 62, 165, 1)',
          850: 'rgb(16, 55, 147, 1)',
          900: 'rgb(14, 49, 129, 1)',
        },
        gray: {
          light: '#372e31',
          DEFAULT: '#120309',
          dark: '#000000',
        },
        yellow: {
          light: '#ffe450',
          DEFAULT: '#eeb211',
          dark: '#b78300',
          50: 'rgb(254, 249, 236, 1)',
          100: 'rgb(252, 243, 217, 1)',
          150: 'rgb(251, 237, 198, 1)',
          200: 'rgb(250, 231, 179, 1)',
          250: 'rgb(248, 225, 160, 1)',
          300: 'rgb(247, 219, 141, 1)',
          350: 'rgb(244, 207, 102, 1)',
          400: 'rgb(243, 200, 83, 1)',
          450: 'rgb(242, 194, 64, 1)',
          500: 'rgb(240, 188, 45, 1)',
          600: 'rgb(229, 172, 16, 1)',
          650: 'rgb(210, 158, 15, 1)',
          700: 'rgb(191, 143, 13, 1)',
          750: 'rgb(172, 129, 12, 1)',
          800: 'rgb(153, 115, 11, 1)',
          850: 'rgb(134, 100, 9, 1)',
          900: 'rgb(114, 86, 8, 1)',
        },
      },
      fontSize: {
        xxs: ['0.5rem', '0.75rem'],
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
