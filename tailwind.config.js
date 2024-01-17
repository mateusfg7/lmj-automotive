module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    
    extend: {
      gridTemplateAreas: {
        services: ['sec1 sec1 sec2', 'sec3 sec4 sec2'],
      },
      gridTemplateColumns: {
        services: '1fr 1fr 1fr',
      },
      gridTemplateRows: {
        services: '1fr 1fr',
      },
      fontFamily: {
        sans: 'var(--font-sans)'
      },
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
}
