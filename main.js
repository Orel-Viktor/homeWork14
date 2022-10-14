"use strick";
import "./styles/main.scss";

function GetUserInfo({ addForm, userForm, addInfo }) {
  const addBtnForm = document.querySelector(addForm);
  const formUser = document.querySelector(userForm);
  const addBtnInfo = document.querySelector(addInfo)

  formUser.addEventListener('submit' ,(event)=>{
    event.preventDefault()
  })
  
  this.openForm = function () {
    formUser.classList.add("open-form");
  };
  addBtnForm.addEventListener("click", this.openForm);

  this.infoAdd = function(){
    formUser.classList.remove("open-form");
  }
  addBtnInfo .addEventListener('click', this.infoAdd)
}


const UserInfo = new GetUserInfo({
  userForm: ".js--form",
  addForm: ".js--add-form",
  addInfo: ".js--add-info"
});