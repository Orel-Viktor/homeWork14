"use strick";
import "./styles/main.scss";

function GetUserInfo({
  userContent,
  addForm,
  userForm,
  addInfo,
  inputName,
  inputPhone,
  inputAge,
  pre,
}) {
  const addBtnForm = document.querySelector(addForm);
  const formUser = document.querySelector(userForm);
  const addBtnInfo = document.querySelector(addInfo);
  const nameInput = document.querySelector(inputName);
  const phoneInput = document.querySelector(inputPhone);
  const ageInput = document.querySelector(inputAge);
  const contentUser = document.querySelector(userContent);
  const preEl = document.querySelector(pre);
  let currentItems = JSON.parse(localStorage.getItem("dataUsers")) || [];

  formUser.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  this.openForm = function () {
    formUser.classList.add("open-form");
  };

  this.infoAdd = () => {
    formUser.classList.remove("open-form");
    const getRandomId = Math.floor(Math.random() * 100);
    const userData = {
      userName: nameInput.value,
      userPhone: phoneInput.value,
      userAge: ageInput.value,
      userId: getRandomId,
    };
    currentItems.push(userData);
    localStorage.setItem("dataUsers", JSON.stringify(currentItems));
    this.createTemplate(userData);
    formUser.reset();
  };

  this.createTemplate = function ({ userId, userName, userPhone, userAge }) {
    const divItemsInfo = document.createElement("div");
    const divItemId = document.createElement("div");
    const divItemName = document.createElement("div");
    const divItemPhone = document.createElement("div");
    const divItemAge = document.createElement("div");
    const divItemAction = document.createElement("div");
    const divButtonDelete = document.createElement("button");
    const divButtonView = document.createElement("button");

    divItemId.innerText = userId;
    divItemName.innerText = userName;
    divItemPhone.innerText = userPhone;
    divItemAge.innerText = userAge;

    divItemsInfo.appendChild(divItemId).classList.add("flex-item-content");
    divItemsInfo.appendChild(divItemName).classList.add("flex-item-content");
    divItemsInfo.appendChild(divItemPhone).classList.add("flex-item-content");
    divItemsInfo.appendChild(divItemAge).classList.add("flex-item-content");
    divItemsInfo.appendChild(divItemAction).classList.add("flex-item-content");
    divItemsInfo.classList.add("flex-div-content");

    divItemAction.classList.add("flex-action-content");
    divItemAction.appendChild(divButtonDelete).innerText = "Delete";
    divItemAction.appendChild(divButtonView).innerText = "View";

    contentUser.after(divItemsInfo);

    divButtonDelete.addEventListener("click", () => {
      divItemsInfo.remove();
      currentItems = currentItems.filter((item) => item.userId !== userId);
      localStorage.setItem("dataUsers", JSON.stringify(currentItems));
    });

    divButtonView.addEventListener("click", () => {
      preEl.innerText = JSON.stringify({
        userId,
        userAge,
        userPhone,
        userName,
      });
    });
  };

  currentItems.forEach(this.createTemplate);
  addBtnInfo.addEventListener("click", this.infoAdd);
  addBtnForm.addEventListener("click", this.openForm);
}

const userInfo = new GetUserInfo({
  userForm: ".js--form",
  addForm: ".js--add-form",
  addInfo: ".js--add-info",
  inputName: ".js--name",
  inputPhone: ".js--phone",
  inputAge: ".js--age",
  userContent: ".js--content",
  pre: ".js--pre",
});
