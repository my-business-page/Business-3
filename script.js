document.addEventListener('DOMContentLoaded',()=>{
  const showPage=()=>{const loader=document.querySelector('.loader');if(loader)loader.classList.add('done');document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))};
  showPage();
  setTimeout(showPage,900);
  const header=document.querySelector('header');
  const toggle=document.querySelector('.menu-toggle,.menu');
  const nav=document.querySelector('.nav,.site-nav');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');if(nav.parentElement)nav.parentElement.classList.toggle('nav-open',open);toggle.setAttribute('aria-expanded',String(open))})}
  const onScroll=()=>{if(header)header.classList.toggle('scrolled',window.scrollY>40)};
  onScroll();window.addEventListener('scroll',onScroll,{passive:true});
  const items=document.querySelectorAll('.reveal');
  if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});items.forEach(item=>observer.observe(item))}
  const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
  const canvas=document.getElementById('vfx');
  if(canvas){try{const ctx=canvas.getContext('2d');if(!ctx)return;const dpr=Math.min(window.devicePixelRatio||1,2);const dots=Array.from({length:36},()=>({x:Math.random(),y:Math.random(),r:.5+Math.random()*1.4,v:.00015+Math.random()*.0003}));const resize=()=>{canvas.width=innerWidth*dpr;canvas.height=innerHeight*dpr;canvas.style.width=innerWidth+'px';canvas.style.height=innerHeight+'px';ctx.setTransform(dpr,0,0,dpr,0,0)};resize();addEventListener('resize',resize,{passive:true});const draw=()=>{ctx.clearRect(0,0,innerWidth,innerHeight);ctx.fillStyle='rgba(255,245,220,.8)';dots.forEach(d=>{d.y-=d.v;if(d.y<0)d.y=1;ctx.globalAlpha=.22;ctx.beginPath();ctx.arc(d.x*innerWidth,d.y*innerHeight,d.r,0,Math.PI*2);ctx.fill()});requestAnimationFrame(draw)};draw()}catch(e){/* visual effect is optional; never block the page */}}
});