import{S as u,i as l}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();function d(o){const r=new URLSearchParams({key:"45094869-2592a7d622688fe6b4ce663f6",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${r}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>{throw console.error("Error fetching images",t),t})}const h=(o,r)=>{r.innerHTML="";const t=o.map(e=>`
    <li class="card">
      <a class="card-link" href="${e.largeImageURL}">
        <img class="card-image" src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="info-text">
        <ul class="card-list">
          <li class="card-list-li">
            <h3>likes</h3>
            <p>${e.likes}</p>
          </li>
          <li class="card-list-li">
            <h3>views</h3>
            <p>${e.views}</p>
          </li>
          <li class="card-list-li">
            <h3>comments</h3>
            <p>${e.comments}</p>
          </li>
          <li class="card-list-li">
            <h3>downloads</h3>
            <p>${e.downloads}</p>
          </li>
        </ul>
      </div>
    </li>
  `).join("");r.insertAdjacentHTML("beforeend",t),new u(".card-link",{inlineStyles:!1,captionsData:"alt",captionDelay:250,disableScroll:!0}).refresh()},f=document.querySelector("#search-form"),m=document.querySelector("#search-input"),c=document.querySelector("#loader"),n=document.querySelector("#gallery");f.addEventListener("submit",o=>{o.preventDefault();const r=m.value.trim();if(!r){l.show({title:"❌",message:"Please enter a search query.",messageColor:"white",backgroundColor:"#E25757",position:"topRight"});return}c.style.display="block",n.innerHTML="",d(r).then(t=>{const i=t.hits;i.length>0?h(i,n):l.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#E25757",position:"topRight"})}).catch(t=>{console.error("Error fetching images",t),l.show({title:"❌",message:"Failed to fetch images. Please try again later!",messageColor:"white",backgroundColor:"#E25757",position:"topRight",timeout:6e3})}).finally(()=>{c.style.display="none",o.target.reset()})});
//# sourceMappingURL=commonHelpers.js.map
