import { footer } from "../components/footer";
import { header } from "../components/header";
import { Store } from "../store";

export const ProfilePage = () => {
  const state = Store.getState();

  return `
    <div id="root">
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${header()}
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
                    value="${state.username || ""}"
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
                    value="${state.email || ""}"
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
                  ${state.bio || ""}</textarea>
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
          ${footer}
        </div>
      </div>
  </div > `;
};

export const updateProfile = () => {
  const profileForm = document.getElementById("profile-form");

  profileForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // <form> 요소로부터 사용자가 입력한 데이터를 한 번에 가져오기
    const formData = new FormData(profileForm);

    Store.setState({
      username: formData.get("username") || "",
      email: formData.get("email") || "",
      bio: formData.get("bio") || "",
    });
    alert("프로필 업데이트가 완료되었어요.");
  });
};

export const renderProfilePage = () => {
  document.body.innerHTML = ProfilePage();
};
