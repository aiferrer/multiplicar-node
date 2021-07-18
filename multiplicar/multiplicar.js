const fs = require('fs');
const color = require('colors');

let crearArchivo = async (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/archivo-base${base}-al-limite${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`archivo-base${base}-al-limite${limite}.txt`);

        });


    });

}

let listarTabla = (base, limite) => {

    console.log('=============='.green);
    console.log(`Tabla base ${base}`.green);
    console.log('=============='.green);
    
    for (let i = 1; i <= limite; i++) {        
        console.log(`${base} * ${i} = ${base * i}\n`);
    }
}

module.exports ={
    crearArchivo,
    listarTabla
}





