(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const b={username:"",email:"",bio:""},a={localStorageKey:"user",getUser(){const t=localStorage.getItem(this.localStorageKey);return t?JSON.parse(t):b},setUser(t){const e=JSON.stringify(t);localStorage.setItem(this.localStorageKey,e)},logIn(){return!!this.getUser().username},logout(){this.setUser(null),localStorage.removeItem(this.localStorageKey)}},m=`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,f=()=>{const e=location.hostname.includes("github.io")?"/front_5th_chapter1-1":"",s=a.logIn(),o=location.hash?location.hash.replace(/^#/,""):window.location.pathname,n=s?`
        <li><a href="${e}/profile" data-route-link class="${o===`${e}/profile`?"text-blue-600  font-bold":"text-gray-600"}">프로필</a></li>
        <li><a href="#" id="logout"  class="text-gray-600">로그아웃</a></li>
        `:`<li><a href="${e}/login" data-route-link class="${o===`${e}/login`?"text-blue-600  font-bold":"text-gray-600"}">로그인</a></li>`;return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="${e}/" data-route-link class="${o===`${e}/`?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
      ${n}
        </ul>
      </nav>`},g=()=>{const t=a.getUser();return`
    <div id="root">
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${f()}
          <main class="p-4">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
                내 프로필
              </h2>
              <form id="profile-form" >
                <div class="mb-4">
                  <label
                    for="username"
                    class="block text-gray-700 text-sm font-bold mb-2"
                  >사용자 이름</label
                  >
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value="${t.username||""}"
                    class="w-full p-2 border rounded"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="email"
                    class="block text-gray-700 text-sm font-bold mb-2"
                  >이메일</label
                  >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value="${t.email||""}"
                    class="w-full p-2 border rounded"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="bio"
                    class="block text-gray-700 text-sm font-bold mb-2"
                  >자기소개</label
                  >
                  <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    class="w-full p-2 border rounded"
                  >
                  ${t.bio||""}</textarea>
                </div>
                <button
                  type="submit"
                  class="w-full bg-blue-600 text-white p-2 rounded font-bold"
                >
                  프로필 업데이트
                </button>
              </form>
            </div>
          </main>
          ${m}
        </div>
      </div>
  </div > `},p=()=>{const t=document.getElementById("profile-form");t.addEventListener("submit",e=>{e.preventDefault();const s=new FormData(t);console.log("formData.get",s.get("email")),a.setUser({username:s.get("username")||"",email:s.get("email")||"",bio:s.get("bio")||""}),alert("프로필 업데이트가 완료되었어요.")})},h=()=>{document.body.innerHTML=g()},x=location.hostname.includes("github.io"),u=x?"/front_5th_chapter1-1":"",y=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input id="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
        </div>
        <div class="mb-6">
          <input type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`,v=()=>{const t=document.getElementById("login-form"),e=document.getElementById("username");t.addEventListener("submit",s=>{s.preventDefault();const r=e.value.trim();if(!r){alert("이메일 또는 전화번호를 입력해주세요.");return}if(r.length<3){alert("3글자 이상 입력해주세요.");return}a.setUser({username:r,email:"",bio:""}),location.hash?location.hash=`${u}/profile`:history.pushState({},"",`${u}/profile`),h()})},w=[{id:1,name:"홍길동",time:"5분 전",text:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{id:2,name:"김철수",time:"15분 전",text:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{id:3,name:"이영희",time:"30분 전",text:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"}],$=()=>{const t=w.map(e=>`
  <div class="bg-white rounded-lg shadow p-4">
    <div class="flex items-center mb-2">
      <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
      <div>
        <p class="font-bold">${e.name}</p>
        <p class="text-sm text-gray-500">${e.time}</p>
      </div>
    </div>
    <p>${e.text}</p>
    <div class="mt-2 flex justify-between text-gray-500">
      <button>좋아요</button>
      <button>댓글</button>
      <button>공유</button>
    </div>
  </div>
`).join("");return`
  
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
    ${f()}
      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>
        <div class="space-y-4">
        ${t}
        </div>
      </main>
    ${m}
    </div>
  </div>`},P=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
     ${`<a href="${location.hostname.includes("github.io")?"/front_5th_chapter1-1":""}/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
  홈으로 돌아가기
</a >`}
    </div >
  </main > `,L=location.hostname.includes("github.io"),l=L?"/front_5th_chapter1-1":"",d={[`${l}/`]:$,[`${l}/login`]:y,[`${l}/profile`]:g};function i(){const t=document.getElementById("root"),e=window.location.pathname,s=a.logIn(),r=d[e]||P;if(t){if(t.innerHTML=r(),e===`${l}/profile`&&!s){history.replaceState(null,"",`${l}/login`),t.innerHTML=d[`${l}/login`]();return}if(e===`${l}/login`&&s){history.replaceState(null,"",`${l}/`),t.innerHTML=d[`${l}/`]();return}if(e===`${l}/login`&&!s){v();return}if(e===`${l}/profile`&&s){p();return}}}function S(t){history.pushState({},"",t),i()}const H=location.hostname.includes("github.io"),E=H?"/front_5th_chapter1-1":"";window.addEventListener("DOMContentLoaded",i);window.addEventListener("popstate",i);document.addEventListener("click",t=>{const e=t.target.closest("a[data-route-link]");if(t.target.closest("#logout")){t.preventDefault(),a.logout(),history.replaceState(null,"",`${E}/login`),i();return}e&&(t.preventDefault(),S(e.getAttribute("href")))});
