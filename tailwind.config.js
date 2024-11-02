/** @type {import('tailwindcss').Config} */
export default {
   content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
theme: {
   extend: {
		container: {
			center:true,
			padding: "2rem",
		},
},
},
plugins: [
	function({ addUtilities }) {
      addUtilities({
      '.btn-custom': {
         padding: '0.5rem',
         width: '100%',
          backgroundColor: '#38a169', // green-400
         fontSize: '1.15rem',
          fontWeight: '700', // Bold
         color: '#ffffff',
          borderRadius: '9999px', // Full rounding
      },
      })
   },
	function({ addUtilities }) {
      addUtilities({
      '.btn-custom2': {
         padding: '0.5rem',
         width: '100%',
          backgroundColor: '#38a169', // green-400
         fontSize: '1rem',
          fontWeight: '700', // Bold
         color: '#ffffff',
          borderRadius: '9999px', // Full rounding
      },
      })
   }
],
}

