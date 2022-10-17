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
}) {

  const addBtnForm = document.querySelector(addForm);
  const formUser = document.querySelector(userForm);
  const addBtnInfo = document.querySelector(addInfo);
  const nameInput = document.querySelector(inputName);
  const phoneInput = document.querySelector(inputPhone);
  const ageInput = document.querySelector(inputAge);
  const contentUser = document.querySelector(userContent);
  
  
 
  function resetInput() {
    nameInput.value = "";
    phoneInput.value = "";
    ageInput.value = "";
  }
  formUser.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  this.openForm = function () {
    formUser.classList.add("open-form");
  };
  addBtnForm.addEventListener("click", this.openForm);
  this.infoAdd = () => {
    formUser.classList.remove("open-form");
    const getRandomId = Math.floor(Math.random() * 100)
   

    const localUserData =[]
    const userData = {
      userName: nameInput.value,
      userPhone: phoneInput.value,
      userAge: ageInput.value,
      userId: getRandomId,
    }
    localUserData.push(userData)
    console.log(userData)
    localStorage.setItem("dataUsers", JSON.stringify(userData))
    
    this.createTemplate({
      nameDescription: nameInput.value,
      phoneDescription: phoneInput.value,
      ageDescription: ageInput.value,
      idDescription: getRandomId,
    });

    resetInput();
  };
  addBtnInfo.addEventListener("click", this.infoAdd);

  this.createTemplate = function ({
    idDescription,
    nameDescription,
    phoneDescription,
    ageDescription,
  }) {
    const divItemsInfo = document.createElement("div");
    const divItemId = document.createElement("div");
    const divItemName = document.createElement("div");
    const divItemPhone = document.createElement("div");
    const divItemAge = document.createElement("div");
    const divItemAction = document.createElement("div");
    const divButtonDelete = document.createElement("button");
    const divButtonView = document.createElement("button");


    divItemId.innerText = idDescription;
    divItemName.innerText = nameDescription;
    divItemPhone.innerText = phoneDescription;
    divItemAge.innerText = ageDescription;

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
      divItemsInfo.remove()
    })

   

    return divItemsInfo;
  };
}

const userInfo = new GetUserInfo({
  userForm: ".js--form",
  addForm: ".js--add-form",
  addInfo: ".js--add-info",
  inputName: ".js--name",
  inputPhone: ".js--phone",
  inputAge: ".js--age",
  userContent: ".js--content",
}
);
