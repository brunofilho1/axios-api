const url='http://localhsot:5500/api';

function getUser() {
  axios.get(url)
  .then(res => {
    console.log(res);
  })
  .catch(error => console.log(error))
};

getUser();
