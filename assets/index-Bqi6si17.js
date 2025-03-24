(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=l(o);fetch(o.href,s)}})();const g={username:"",email:"",bio:""},a={localStorageKey:"user",getState(){const e=localStorage.getItem(this.localStorageKey);return e?JSON.parse(e):g},setState(e){const t=JSON.stringify(e);localStorage.setItem(this.localStorageKey,t)},logIn(){return!!this.getState().username},logout(){this.setState(null),localStorage.removeItem(this.localStorageKey)}},u=`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,m=()=>{const e=a.logIn(),t=window.location.pathname,n=location.hostname.includes("github.io")?"/front-5th-chapter1-1":"",o=e?`
        <li><a href="${n}/profile" data-route-link class="${t===`${n}/profile`?"text-blue-600":"text-gray-600"}">프로필</a></li>
        <li><a href="${n}/login" id="logout" data-route-link class="text-gray-600">로그아웃</a></li>
        `:`<li><a href="${n}/login" data-route-link class="${t===`${n}/login`?"text-blue-600":"text-gray-600"}">로그인</a></li>`;return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="${n}/" data-route-link class=${t===`${n}/`?"text-blue-600":"text-gray-600"}>홈</a></li>
      ${o}
        </ul>
      </nav>`},f=()=>{const e=a.getState();return`
    <div id="root">
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${m()}
          <main class="p-4">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
                내 프로필
              </h2>
              <form id="profile-form">
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
                    value="${e.username||""}"
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
                    value="${e.email||""}"
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
                  ${e.bio||""}</textarea>
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
          ${u}
        </div>
      </div>
  </div > `},b=()=>{const e=document.getElementById("profile-form");e.addEventListener("submit",t=>{t.preventDefault();const l=new FormData(e);a.setState({username:l.get("username")||"",email:l.get("email")||"",bio:l.get("bio")||""}),alert("프로필 업데이트가 완료되었어요.")})},p=()=>{document.body.innerHTML=f()},h=()=>`
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
`,x=()=>{const e=document.getElementById("login-form"),t=document.getElementById("username");e.addEventListener("submit",l=>{l.preventDefault();const n=t.value.trim();if(!n){alert("이메일 또는 전화번호를 입력해주세요.");return}if(n.length<3){alert("3글자 이상 입력해주세요.");return}a.setState({username:n,email:"",bio:""}),history.pushState({},"","/profile"),p()})},y=[{id:1,name:"홍길동",time:"5분 전",text:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{id:2,name:"김철수",time:"15분 전",text:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{id:3,name:"이영희",time:"30분 전",text:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"}],v=()=>{const e=y.map(t=>`
  <div class="bg-white rounded-lg shadow p-4">
    <div class="flex items-center mb-2">
      <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
      <div>
        <p class="font-bold">${t.name}</p>
        <p class="text-sm text-gray-500">${t.time}</p>
      </div>
    </div>
    <p>${t.text}</p>
    <div class="mt-2 flex justify-between text-gray-500">
      <button>좋아요</button>
      <button>댓글</button>
      <button>공유</button>
    </div>
  </div>
`).join("");return`
  
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
    ${m()}
      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>
        <div class="space-y-4">
        ${e}
        </div>
      </main>
    ${u}
    </div>
  </div>`},w=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
     ${`<a href="${location.hostname.includes("github.io")?"/front-5th-chapter1-1":""}/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
  홈으로 돌아가기
</a >`}
    </div >
  </main > `,$=location.hostname.includes("github.io"),r=$?"/front-5th-chapter1-1":"",d={[`${r}/`]:v,[`${r}/login`]:h,[`${r}/profile`]:f};function c(){const e=window.location.pathname,t=d[e]||w,l=a.logIn(),n=document.getElementById("root");if(!n)return;if(e===`${r}/profile`&&!l){history.replaceState(null,"",`${r}/login`),n.innerHTML=d[`${r}/login`]();return}if(n.innerHTML=t(),e===`${r}/login`){x();return}e===`${r}/profile`&&l&&b();const o=document.getElementById("logout");o&&o.addEventListener("click",s=>{s.preventDefault(),a.logout(),history.replaceState(null,"",`${r}/login`),n.innerHTML=d[`${r}/login`]()})}function S(e){history.pushState({},"",e),c()}window.addEventListener("DOMContentLoaded",c);window.addEventListener("popstate",c);document.addEventListener("click",e=>{const t=e.target.closest("a[data-route-link]");t&&(e.preventDefault(),S(t.getAttribute("href")))});
