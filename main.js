"use strick";
import "./styles/main.scss";

function GetUserInfo({ userContent, addForm, userForm, addInfo, inputName, inputPhone, inputAge, }) {
  const addBtnForm = document.querySelector(addForm);
  const formUser = document.querySelector(userForm);
  const addBtnInfo = document.querySelector(addInfo);
  const nameInput = document.querySelector(inputName);
  const phoneInput = document.querySelector(inputPhone);
  const ageInput = document.querySelector(inputAge);
  const contentUser = document.querySelector(userContent)

 function resetInput(){
  nameInput.value = ""
  phoneInput.value = ""
  ageInput.value = ""
 }

  formUser.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  this.openForm = function () {
    formUser.classList.add("open-form");
  };
    addBtnForm.addEventListener("click", this.openForm);

  this.infoAdd = ()=> {
    formUser.classList.remove("open-form");
    this.createTeamplate({
    nameDescription: nameInput.value,
    phoneDescription: phoneInput.value, 
    ageDescription: ageInput.value
    })
    resetInput()
  };
  addBtnInfo.addEventListener("click", this.infoAdd);

  this.createTeamplate = function ({
    idDescription, 
    nameDescription, 
    phoneDescription, 
    ageDescription, 
    actionDescription,
  }) {
    const divItemsInfo = document.createElement("div");
    const divItemId = document.createElement("div");
    const divItemName = document.createElement("div");
    const divItemPhone = document.createElement("div");
    const divItemAge = document.createElement("div");
    const divItemAction = document.createElement("div");

    divItemId.innerText = idDescription;
    divItemName.innerText = nameDescription;
    divItemPhone.innerText = phoneDescription;
    divItemAge.innerText = ageDescription;
    divItemAction.innerText = actionDescription;

    divItemsInfo.appendChild(divItemId).classList.add("flex-item-content");
    divItemsInfo.appendChild(divItemName).classList.add("flex-item-content");;
    divItemsInfo.appendChild(divItemPhone).classList.add("flex-item-content");;
    divItemsInfo.appendChild(divItemAge).classList.add("flex-item-content");;
    divItemsInfo.appendChild(divItemAction).classList.add("flex-item-content");;
    divItemsInfo.classList.add("flex-div-content")
    
    contentUser.after(divItemsInfo)
    

    return divItemsInfo
  };
}

const UserInfo = new GetUserInfo({
  userForm: ".js--form",
  addForm: ".js--add-form",
  addInfo: ".js--add-info",
  inputName: ".js--name",
  inputPhone: ".js--phone",
  inputAge: ".js--age",
  userContent: ".js--content",
});
