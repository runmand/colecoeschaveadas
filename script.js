function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();
usuarios.set('Luiz', 'Admin');
usuarios.set('Amanda', 'Admin');
usuarios.set('Bia', 'Admin');
usuarios.set('Ste', 'Admin');
usuarios.set('Marcel', 'User');

console.log(getAdmins(usuarios));