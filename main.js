const firebaseConfig = {
  apiKey: "AIzaSyBoVtFKGoy0pzuwFj9s3L0jhz95yZw0Uns",
  authDomain: "bowlingclub-a7f4a.firebaseapp.com",
  projectId: "bowlingclub-a7f4a",
  storageBucket: "bowlingclub-a7f4a.firebasestorage.app",
  messagingSenderId: "564414783398",
  appId: "1:564414783398:web:7bda19088ff01e697df967",
  measurementId: "G-9NMMNGZR14"
};
firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

document.getElementById("loginBtn").onclick = function() {
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      document.getElementById("userInfo").innerHTML = `
        <p>이름: ${user.displayName}</p>
        <p>이메일: ${user.email}</p>
        <img src="${user.photoURL}" width="60" alt="프로필사진" />
        <br>
        <button id="logoutBtn">로그아웃</button>
      `;
      document.getElementById("logoutBtn").onclick = function() {
        firebase.auth().signOut().then(()=>{
          location.reload();
        });
      };
    })
    .catch((error) => {
      alert("로그인 실패: " + error.message);
    });
};
