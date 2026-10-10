const account = JSON.parse(localStorage.getItem("currentUser") || "null");
const page = window.location.pathname.split("/").pop();
const publicPages = ["index.html", "dang-nhap.html", "dang-ky.html", ""];

if (!account && !publicPages.includes(page)) {
    window.location.replace("dang-nhap.html");
} else {
    const containernavbar = document.getElementById("navbar");

    containernavbar.innerHTML = `<header class="site-header sticky-top">
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg"
            style="background: linear-gradient(135deg, rgb(39, 29, 75), rgb(46, 46, 116));">
            <div class="container">
                <a href="index.html" class="d-flex navbrand logo-link">
                    <img src="images/logo.png" alt="" width="50" height="50">
                    <span class="logo-text fs-4 ps-3"> Thành Đoàn <br><small>TP. Hồ Chí Minh</small></span>
                </a>

                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu" type="button">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="menu">
                    <ul class="navbar-nav ms-auto text-center align-items-lg-center">
                        <li class="nav-item"><a href="index.html" class="nav-link">Trang chủ</a></li>
                        <li class="nav-item"><a href="danh-sach.html" class="nav-link">Danh sách bài thi</a></li>
                        <li class="nav-item"><a href="tra-cuu.html" class="nav-link">Tra cứu kết quả</a></li>
                        <li class="nav-item"><a href="ve-chung-toi.html" class="nav-link">Về chúng tôi</a></li>
                        <li class="nav-item"><a href="dang-nhap.html" class="nav-link" id="navLogin">Đăng nhập</a></li>
                        <li class="nav-item"><a href="dang-ky.html" class="nav-link" id="navRegister">Đăng ký</a></li>
                        <li class="nav-item d-none" id="navUser"></li>
                        <li class="nav-item"><a href="#" class="nav-link d-none" id="navLogout" onclick="logout()">Đăng xuất</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>`

    const user = JSON.parse(localStorage.getItem("currentUser") || "null");
    const login = document.getElementById("navLogin");
    const register = document.getElementById("navRegister");
    const userEl = document.getElementById("navUser");
    const logoutEl = document.getElementById("navLogout");

    if (user) {
        login.classList.add("d-none");
        register.classList.add("d-none");
        userEl.classList.remove("d-none");
        userEl.innerHTML = '<span class="nav-link text-warning fw-bold">' + user.name + '</span>';
        logoutEl.classList.remove("d-none");
    } else {
        login.classList.remove("d-none");
        register.classList.remove("d-none");
        userEl.classList.add("d-none");
        logoutEl.classList.add("d-none");
    }
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "dang-nhap.html";
}