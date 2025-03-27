(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const u={username:"",email:"",bio:""},r={localStorageKey:"user",getUser(){const o=localStorage.getItem(this.localStorageKey);return o?JSON.parse(o):u},setUser(o){const e=JSON.stringify(o);localStorage.setItem(this.localStorageKey,e)},logIn(){return!!this.getUser().username},logout(){this.setUser(null),localStorage.removeItem(this.localStorageKey)}},c=`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,d=()=>{const e=location.hostname.includes("github.io")?"/front_5th_chapter1-1":"",l=r.logIn(),t=location.hash?location.hash.replace(/^#/,""):window.location.pathname,s=l?`
        <li><a href="${e}/profile" data-route-link class="${t===`${e}/profile`?"text-blue-600  font-bold":"text-gray-600"}">프로필</a></li>
        <li><a href="#" id="logout"  class="text-gray-600">로그아웃</a></li>
        `:`<li><a href="${e}/login" data-route-link class="${t===`${e}/login`?"text-blue-600  font-bold":"text-gray-600"}">로그인</a></li>`;return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="${e}/" data-route-link class="${t===`${e}/`?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
      ${s}
        </ul>
      </nav>`},m=()=>{const o=r.getUser();return`
    <div id="root">
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${d()}
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
                    value="${o.username||""}"
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
                    value="${o.email||""}"
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
                  ${o.bio||""}</textarea>
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
          ${c}
        </div>
      </div>
  </div > `},g=()=>{const o=document.getElementById("profile-form");o.addEventListener("submit",e=>{e.preventDefault();const l=new FormData(o);console.log("formData.get",l.get("email")),r.setUser({username:l.get("username")||"",email:l.get("email")||"",bio:l.get("bio")||""}),alert("프로필 업데이트가 완료되었어요.")})},b=()=>{document.body.innerHTML=m()},f=location.hostname.includes("github.io"),i=f?"/front_5th_chapter1-1":"",h=()=>`
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
`,x=()=>{const o=document.getElementById("login-form"),e=document.getElementById("username");o.addEventListener("submit",l=>{l.preventDefault();const a=e.value.trim();if(!a){alert("이메일 또는 전화번호를 입력해주세요.");return}if(a.length<3){alert("3글자 이상 입력해주세요.");return}r.setUser({username:a,email:"",bio:""}),location.hash?location.hash=`${i}/profile`:history.pushState({},"",`${i}/profile`),b()})},p=[{id:1,name:"홍길동",time:"5분 전",text:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{id:2,name:"김철수",time:"15분 전",text:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{id:3,name:"이영희",time:"30분 전",text:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"}],y=()=>{const o=p.map(e=>`
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
    ${d()}
      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>
        <div class="space-y-4">
        ${o}
        </div>
      </main>
    ${c}
    </div>
  </div>`},v=()=>`
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
  </main > `;export{h as L,y as M,v as N,m as P,r as S,x as s,g as u};
