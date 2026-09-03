document.addEventListener('DOMContentLoaded',()=>{
  const loader=document.querySelector('.loader');
  if(loader){setTimeout(()=>{loader.classList.add('done');loader.classList.add('loaded')},500)}
  const header=document.querySelector('header');
  const toggle=document.querySelector('.menu-toggle,.menu');
  const nav=document.querySelector('.nav,.site-nav');
  if(toggle&&nav){toggle.addEventListener('click',()=>{nav.classList.toggle('open');nav.parentElement.classList.toggle('nav-open');toggle.setAttribute('aria-expanded',nav.classList.contains('open'))})}
  const onScroll=()=>{if(header)header.classList.toggle('scrolled',window.scrollY>40)};
  onScroll();window.addEventListener('scroll',onScroll,{passive:true});
  const items=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});items.forEach(item=>observer.observe(item))}else items.forEach(item=>item.classList.add('visible'));
  const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
  const canvas=document.getElementById('vfx');
  if(canvas){const ctx=canvas.getContext('2d');let w=0,h=0;const dots=Array.from({length:45},()=>({x:Math.random(),y:Math.random(),r:.5+Math.random()*1.6,v:.00015+Math.random()*.00035}));const resize=()=>{w=canvas.width=innerWidth*devicePixelRatio;h=canvas.height=innerHeight*devicePixelRatio;canvas.style.width=innerWidth+'px';canvas.style.height=innerHeight+'px';ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0)};resize();addEventListener('resize',resize);const draw=()=>{ctx.clearRect(0,0,innerWidth,innerHeight);dots.forEach(d=>{d.y-=d.v;if(d.y<0)d.y=1;ctx.beginPath();ctx.arc(d.x*innerWidth,d.y*innerHeight,d.r,0,Math.PI*2);ctx.globalAlpha=.25;ctx.fillStyle='rgba(255,245,220,.8)';ctx.fill()});requestAnimationFrame(draw)};draw()}
});