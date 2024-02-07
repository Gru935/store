import bcript from 'bcryptjs'
export let users = [];
export let products = [];
let productId = 0;

const salt = bcript.genSaltSync(10)
const hash = bcript.hashSync('12345678', salt);

users.push({
    name: 'Teste',
    email: 'teste@teste.com',
    role: 'Admin',
    password: hash
})


export function userCreateRepository(user){
    users.push({
        ...user
    });
}

export function userListRepository(){
    return users.map(user => {
        return {
            ...user,
            password: undefined
        }
    });
}

export function userEditRepository(data, oriEmail){
    users.filter(user => {
        if(user.email === oriEmail){
            user.name = data.name;
            user.role = data.role;
            user.password = data.password;
            user.email = data.email;
        }
    });
}

export function userDeleteRepository(email){
    users = users.filter(user => user.email !== email);
}


export function userFindByEmail(email){
    return users.find(user => user.email === email);
}

export function productCreateRepository(product){
    product.id = productId;
    products.push({
        ...product
    });
    productId++;
}

export function productListRepository(){
    return products.map(product => {
        return {
            ...product
        }
    });
}

export function productEditRepository(data, id){
    products.filter(product => {
        if(product.id === id){
            product.name = data.name;
            product.value = data.value;
        }
    });
}

export function productDeleteRepository(id){
    products = products.filter(product => product.id !== id);
}