module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      50: '50px',
      100: '100px',
      150: '150px',
      200: '200px',
      250: '250px',
      300: '300px',
      350: '350px',
      400: '400px',
      500: '500px',
    },
    maxHeight: {
      50: '50px',
      100: '100px',
      150: '150px',
      200: '200px',
      250: '250px',
      300: '300px',
      350: '350px',
      400: '400px',
      500: '500px',
    },
    minWidth: {
      50: '50px',
      100: '100px',
      150: '150px',
      200: '200px',
      250: '250px',
      300: '300px',
      350: '350px',
      400: '400px',
      500: '500px',
    },
    borderRadius: {
      'custom-shape': '64% 36% 83% 17% / 23% 81% 19% 77%',
    },
    height: {
      500: '500px',
      400: '400px',
    },
    fontFamily: {
      sans: ['"Roboto"', 'sans-serif'],
      serif: ['"Roboto Slab"', 'serif'],
      body: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        greenNormal: '#17B65A',
        greenDark: '#007931',
        greenLight: '#CEEDDB',
        grayDark: '#22333B',
      },
      maxHeight: {
        128: '32rem',
        50: '50px',
        100: '100px',
        150: '150px',
        200: '200px',
        250: '250px',
        300: '300px',
        350: '350px',
        400: '400px',
        500: '500px',
      },
      backgroundImage: () => ({
        modal: 'linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75))',
        'new-login-background':
          'linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url(https://wallpapercave.com/wp/wp1871766.jpg)',
        'skills-background':
          'linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url(https://uphillathlete.com/wp-content/uploads/2016/12/IMG_2512-e1483205456919.jpg)',
        'login-background':
          "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1280.jpg')",
        'login-background2':
          "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1280.jpg')",
        'landing-background':
          'linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url(https://www.gb-advisors.com/wp-content/uploads/2020/05/paper-3213924_1920.jpg)',
        'profile-background':
          "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1080.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      colors: {
        greenNormal: '#17B65A',
        greenDark: '#007931',
        greenLight: '#CEEDDB',
        grayDark: '#22333B',
      },
      backgroundColor: ['responsive', 'active'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
