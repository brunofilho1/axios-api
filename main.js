const url='http://localhost:5500/api';

const newUser = {
  name: 'Brunera',
  avatar: 'https://github.com/brunofilho1.png',
  city: 'Brasilândia de Minas'
};

function getUser() {
  axios.get(url).then(res => {
    const data = res.data;
    renderApiResult.textContent = JSON.stringify(data);
  }).catch(error => console.log(error))
};

getUser();

function addNewUser() {
  axios.post(url, newUser).then(res => {
    console.log(res.data);
    alert(JSON.stringify(res.data));
  }).catch(error => console.log(error));
}

addNewUser();