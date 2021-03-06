const url='http://localhost:5500/api';

const newUser = {
  name: 'Brunera',
  avatar: 'https://github.com/brunofilho1.png',
  city: 'Brasilândia de Minas'
};
const updatedUser = {
  name: 'CABEÇA DE PREGO',
  avatar: 'https://github.com/brunofilho1.png',
  city: 'São Paulo'
};

function getUser() {
  axios.get(url).then(res => {
    const data = res.data;
    renderApiResult.textContent = JSON.stringify(data.users);
    let avatar = JSON.stringify(data.users[1].avatar).replace(/"/g, '')
    foto.innerHTML = `<img src="${avatar}" />`
    nome.textContent = JSON.stringify(data.users[1].name).replace(/"/g, '')
    cidade.textContent = JSON.stringify(data.users[1].city).replace(/"/g, '')
  }).catch(error => console.log(error))
};

getUser();

function addNewUser() {
  axios.post(url, newUser).then(res => {
    console.log(res.data);
    alert(JSON.stringify(res.data));
    document.location.reload(true);
  }).catch(error => console.log(error));
}
/* addNewUser(); */

function updateUser() {
  axios.put(`${url}/3`, updatedUser).then(res => {
    console.log(res.data);
    alert(JSON.stringify(res.data));
    document.location.reload(true);
  }).catch(error => console.log(error))
}
/* updateUser() */

function deleteUser() {
  axios.delete(`${url}/3`).then(res => {
    alert(JSON.stringify(res.data));
    document.location.reload(true);
  }).catch(error => console.log(error))
}

function getOneUser() {
  axios.get(`${url}/3`).then(res => {
    const data = res.data;
    renderApiResult.textContent = JSON.stringify(data);
  }).catch(error => console.log(error))
}