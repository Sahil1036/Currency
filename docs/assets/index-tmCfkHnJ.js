(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function e(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(t){if(t.ep)return;t.ep=!0;const c=e(t);fetch(t.href,c)}})();let d="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/",h="https://wise.com/public-resources/assets/flags/rectangle/";const x=document.getElementById("menu_right"),y=document.getElementById("navbar").classList,E=document.getElementById("sign").classList;x.addEventListener("click",()=>{y.toggle("hidden"),E.toggle("fa-xmark")});const a=document.getElementById("from");let i,r;const u=document.getElementById("to");fetch(d+"usd.json").then(o=>o.json()).then(o=>{for(let n in o.usd){const e=document.createElement("option");e.text=n,e.value=n,e.id="from",n==="inr"&&(e.selected=!0),a.add(e)}for(let n in o.usd){const e=document.createElement("option");e.text=n,e.value=n,e.id="to",n==="usd"&&(e.selected=!0),u.add(e)}i=a.value,r=u.value});const f=document.getElementById("from_image"),v=document.getElementById("to_image");a.onchange=()=>{i=a.value,f.src=h+i+".png",f.onerror=()=>{f.src="https://qph.cf2.quoracdn.net/main-qimg-d75cc959409a6af23ad2dbdbf30116f7-lq"}};u.onchange=()=>{r=u.value,v.src=h+r+".png",v.onerror=()=>{v.src="https://qph.cf2.quoracdn.net/main-qimg-d75cc959409a6af23ad2dbdbf30116f7-lq"}};const g=document.getElementById("calculate"),l=document.getElementById("amount"),L=document.getElementById("convert_btn"),j=document.getElementById("reset_btn");L.addEventListener("click",async function(){const o=await fetch(d+i+".json"),n=await fetch(d+r+".json"),e=await o.json(),s=await n.json();let t=g.children;t=t[0].children,t[0].innerHTML=`${l.value} ${i} =`,t[1].innerHTML=`${l.value*e[i][r]} ${r}`,t[2].innerHTML=`${l.value} ${r} = ${l.value*s[r][i]} ${r}`,g.classList.remove("hidden")});j.addEventListener("click",()=>{g.classList.add("hidden")});const _=[1,5,10,25,50,100,500,1e3,5e3,1e4],b=document.getElementById("convert_usd_to_inr"),I=document.getElementById("convert_inr_to_usd");fetch(d+"usd.json").then(o=>o.json()).then(o=>{const n=o.usd.inr;_.forEach(e=>{const s=document.createElement("div");s.innerHTML=` <div class="flex justify-evenly font-light p-3 text-xl">
      <div class="flex justify-evenly text-blue-500">
        <p>${e}</p>
        usd
      </div>
      <div class="flex justify-evenly">
        <p>${(e*n).toFixed(2)}</p>
        Inr
      </div>
    </div>`,b.append(s)})});fetch(d+"inr.json").then(o=>o.json()).then(o=>{const n=o.inr.usd;_.forEach(e=>{const s=document.createElement("div");s.innerHTML=` <div class="flex justify-evenly font-light p-3 text-xl">
      <div class="flex justify-evenly text-blue-500">
        <p>${e}</p>
        inr
      </div>
      <div class="flex justify-evenly">
        <p>${(e*n).toFixed(7)}</p>
        usd
      </div>
    </div>`,I.append(s)})});let p=document.getElementById("menu_list").children;p=Array.from(p);p.forEach(o=>{o.addEventListener("click",n=>{screen.width<1024&&(y.toggle("hidden"),E.toggle("fa-xmark"))})});
