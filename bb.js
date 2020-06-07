// input

let bt = document.getElementById("bt");
let input = document.getElementById("input");
bt.addEventListener("click", onclickevent);
function onclickevent() {
  alert(input.value);
}

// bài luyện tập
// Làm 1 form đăng kí tài khoản, báo lỗi khi email hoặc pass ko hợp lệ
let inputmail = document.getElementById("inputmail");
let inputpass = document.getElementById("inputpass");
let conpass = document.getElementById("conpass");
let regist = document.getElementById("regist");
let rep = document.getElementById("rep");

function regg() {
  if (inputmail.value == "") {
    rep.innerText = "Email ko dc de trong!";
  } else if (inputpass.value == "") {
    rep.innerText = "Password ko dc de trong!";
  } else if (inputpass.value !== conpass.value) {
    rep.innerText = "Xac nhan password sai";
  } else {
    rep.innerText = "Dang ki thanh cong";
    // 3 dòng dưới là để xóa thông tin đã nhập trong các ô, vì mặc định nó vẫn còn
    inputmail.value = "";
    inputpass.value = "";
    conpass.value = "";
  }
}

regist.addEventListener("click", regg);
// (input.value == "") = (!input.value);   ==> cách code rút gọn

// querry string
// Cho ng dùng nhập vào các list của 1 ul và tự động add nó vào ul
let mainform = document.getElementById("main-form");
mainform.addEventListener("submit", onSubmitevent);
let ul = document.getElementById("list");
function onSubmitevent(event) {
  // mặc định khi ấn submit trang sẽ bị refresh và nội dung nhập sẽ bị gửi lên trên thanh địa chỉ
  //  .preventdefault để ngăn chặn điều đó
  event.preventDefault();
  console.log(event);

  let todocontent = mainform.todo.value;
  console.log(todocontent);
  let li = document.createElement("li");
  // thêm nút delete để tiện việc xóa
  li.innerHTML = `${todocontent} <button id="del">Delete</button>`;
  ul.appendChild(li);
  mainform.todo.value = "";
}
ul.addEventListener("click", onDeleteEvent);
function onDeleteEvent(event) {
  console.log(event.target);
  if (event.target.id === "del") {
    event.target.parentNode.remove();
  }
}

//event.target ----- event bubbling!
//local storage
