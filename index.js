import{a as d,S as p,i}from"./assets/vendor-Dj0z4On-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(s){if(s.ep)return;s.ep=!0;const t=e(s);fetch(s.href,t)}})();const g="53363226-49c521b83e2d6ffa4f69ff166",h="https://pixabay.com/api/";function y(o){const r={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:20};return d.get(h,{params:r}).then(e=>(console.log("API Response:",e.data),e.data)).catch(e=>{throw console.error("Error fetching images from Pixabay:",e),new Error("Failed to fetch images.")})}const c=document.querySelector(".gallery"),u=document.querySelector(".loader-container"),v=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:e,largeImageURL:n,tags:s,likes:t,views:a,comments:f,downloads:m})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${n}">
        <img class="gallery-image" src="${e}" alt="${s}" loading="lazy">
        <div class="gallery-info">
          <div class="info-item">
            <span class="info-label">Likes</span>
            <span class="info-value">${t}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Views</span>
            <span class="info-value">${a}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Comments</span>
            <span class="info-value">${f}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Downloads</span>
            <span class="info-value">${m}</span>
          </div>
        </div>
      </a>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",r),v.refresh()}function L(){c.innerHTML=""}function $(){u.classList.add("visible")}function l(){u.classList.remove("visible")}i.settings({timeout:3e3,resetOnHover:!0,position:"topRight"});const E=document.querySelector(".form"),P="search-text";E.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements[P].value.trim();if(r===""){i.error({title:"Error",message:"Please enter a search term!"});return}L(),$(),y(r).then(e=>{l(),!e.hits||e.hits.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(console.log(`Hooray! Found ${e.hits.length} images.`,e.hits),b(e.hits),i.success({title:"Success",message:`Found ${e.totalHits} images!`})),o.target.reset()}).catch(e=>{l(),console.error(e.message),i.error({title:"Request Failed",message:`An error occurred: ${e.message}`})})});
//# sourceMappingURL=index.js.map
