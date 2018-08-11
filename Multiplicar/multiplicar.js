//requires

const fs = require('fs');



let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido: ${base} no es un número`);
            return;
        };

        if (!Number(limite)) {
            reject(`El valor introducido: ${limite} no es un número`);
            return;
        };

        let data = ""

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;

        }

        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`);

        });



    });
}

let listarTabla = (base, limite) => {


    console.log("iterando")
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);

    }

}



module.exports = {
    crearArchivo,
    listarTabla

}