const mainEl = document.querySelector('.result');
const sectionEl = document.querySelector('.details');


mainEl.addEventListener('click', (e) => {
    e.stopPropagation();
    const username = e.target.getAttribute('data-abc');
    const a1 = e.target.getAttribute('data-price');
    console.log(username);
    console.log(a1);
    // if (username) {
    //     const items = document.querySelectorAll('.item');
    //     items.forEach(item => item.classList.remove('active'));

    //     e.target.parentElement.parentElement.classList.add('active');
    //     fetchRepos(username);
    // }
});





const renderUsers = (users) => {

    mainEl.innerHTML = users.map(user => {
        return `
            <div class="products">
                <h1>${user.category}</h1>
                <h2>${user.title}</h2>
    
                <img src="${user.image}" height="150" />
                <p>
                    <button data-abc="${user.id}" data-price=${user.price} >Show repos</button>

                </p>                
            </div>
        `
    }).join('');
};

const renderRepos = (repos) => {
    sectionEl.innerHTML = repos
        .map(repo => `<p>${repo.full_name}</p>`)
        .join('');
};

const fetchUsers = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const result = await response.json();
    console.log(result);

    let y=result.filter(user=>user.price<100);
sectionEl.innerHTML = y.map(user => {
    return `
        <div class="products" >
            <h1>${user.category}</h1>
            <h2>${user.title}</h2>
            <img src="${user.image}" height="150" />
            <p>
                <button data-abc="${user.id}" data-price=${user.price} >Show repos</button>

            </p>                
        </div>
    `
}).join('');
    renderUsers(result);
  
};

fetchUsers();

