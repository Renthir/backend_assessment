const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const fortuneText = document.getElementById('fortuneText')
const addFortune = document.getElementById('addFortune')
const deleteFortune = document.getElementById('deleteFortune')
const silly = document.getElementById('silly')


silly.addEventListener('click', () => {
    axios.put('http://localhost:4000/api/fortune')
        .then((res) => {
            alert(res.data.fortune)
        })
})

deleteFortune.addEventListener('click', () => {
    let id = +fortuneText.value
    axios.delete(`http://localhost:4000/api/fortune/${id}`)
        .then((res) => {
            alert(res.data)
        }).catch((err) => {
            console.error("Error response:");
            console.error(err.response.data);  
            console.error(err.response.status);
            console.error(err.response.headers);
        })
})

addFortune.addEventListener('click', () => {
    let text = fortuneText.value
    let body = {fortune: text}
    
    axios.post('http://localhost:4000/api/fortune', body)
    .then((res => {
        alert('Fortune Added!')
    }))
    fortuneText.value = ''
})

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

fortuneBtn.addEventListener('click', () => {
    axios.get('http://localhost:4000/api/fortune')
    .then(res => {
        alert(`ID: ${res.data.id}; Fortune: ${res.data.fortune}`)
    })
})

