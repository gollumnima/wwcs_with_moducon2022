/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    extend: {},
    plugins: [require("daisyui")],
    daisyui: {
      styled: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      themes: [
        {
          'wwcs_theme': {                          /* your theme name */
             'primary': '#007D7F',           /* Primary color */
             'primary-focus': '#035052',     /* Primary color - focused */
             'primary-content': '#FCED17',   /* Foreground content color to use on primary color */
  
             'secondary': '#FCED17',         /* Secondary color */
             'secondary-focus': '#f3cc30',   /* Secondary color - focused */
             'secondary-content': '#000', /* Foreground content color to use on secondary color */
  
             'accent': '#BB27A8',            /* Accent color */
             'accent-focus': '#912083',      /* Accent color - focused */
             'accent-content': '#ffffff',    /* Foreground content color to use on accent color */
  
             'neutral': '#3d4451',           /* Neutral color */
             'neutral-focus': '#2a2e37',     /* Neutral color - focused */
             'neutral-content': '#ffffff',   /* Foreground content color to use on neutral color */
  
             'base-100': '#ffffff',          /* Base color of page, used for blank backgrounds */
             'base-200': '#f9fafb',          /* Base color, a little darker */
             'base-300': '#d1d5db',          /* Base color, even more darker */
             'base-content': '#1f2937',      /* Foreground content color to use on base color */
  
             'info': '#3045BF',              /* Info */
             'info-content': '#ffffff',              /* Info */
             'success': '#479F48',           /* Success */
             'warning': '#ff9900',           /* Warning */
             'error': '#E86431',             /* Error */
          },
        },
      ],
    }, 
}
