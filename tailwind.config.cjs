module.exports = {
  content: ['./src/**/*.{astro,md,mdx,html,js,tsx,ts}'],
  theme: {
    extend: {
      colors:{ mcode:{ bg:'var(--mcode-bg)', fg:'var(--mcode-fg)', accent:'var(--mcode-accent)'} },
      letterSpacing:{ tightest:'-0.05em' },
      spacing:{ '1':'4px','1.5':'6px','2':'8px','3':'12px','4':'16px','5':'20px','6':'24px','7':'28px','8':'32px','10':'40px','12':'48px','14':'56px','16':'64px','20':'80px','24':'96px' },
      fontSize:{ 'm-y':['64px',{lineHeight:'0.9'}],'m-yh':['32px',{lineHeight:'0.9'}],'m-xl':['40px',{lineHeight:'1'}],'m-lg':['24px',{lineHeight:'1.1'}],'m-base':['16px',{lineHeight:'1.4'}] },
      borderRadius:{ '2xl':'1rem' }
    }
  },
  plugins: []
};
