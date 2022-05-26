const randomBtn = document.querySelector('.random-btn');
const  userImg = document.querySelector('.profile-img');
const  userContent = document.querySelector('.content');
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const dateOfBirth = document.querySelector('.date');
const address = document.querySelector('.address');
const phone = document.querySelector('.phone');
const password = document.querySelector('.password');
const icons = document.querySelectorAll('#icon');
const userText = document.querySelector('.title')

randomBtn.addEventListener('click', ()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res=> res.json())
    .then(data=> {
        console.log(data)
        const user = data.results[0];

        userImg.src = user.picture.large;
        userContent.innerHTML = `${user.name.title} ${user.name.first} ${user.name.last}`

        name.dataset.value = user.name.first;
        email.dataset.value = user.email;
        dateOfBirth.dataset.value = user.dob.date;
        address.dataset.value = `${user.location.city} ${user.location.country}`;
        phone.dataset.value = user.phone;
        password.dataset.value = user.login.password;
        
        changeColor()
    })
})

document.body.addEventListener('click', (e)=>{
    if(e.target.id === 'icon'){
        userText.innerHTML = e.target.parentElement.dataset.title;
        userContent.innerHTML = e.target.parentElement.dataset.value;

        icons.forEach(el=> el.parentElement.classList.remove('active'));
        e.target.parentElement.classList.add('active');
    }
})

function changeColor() {
    const options = "0123456789ABCDEF";
    let string = "#";
    for (let i = 1; i < 7; i++) {
      let index = Math.floor(Math.random() * 16);
      string += options[index];
    }

    document.body.style.backgroundColor = string;
  }
