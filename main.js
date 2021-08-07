const fs = require('fs')

const data1  = {
    id: 1,
    product: {
        title: 'lapiz',
        price: 50,
        thumbnail:
            'https://www.pngegg.com/en/png-bolri'
    }
}

const p1 = {
    title: 'lapiz',
    price: 50,
    thumbnail:
        'https://www.pngegg.com/en/png-bolri'
}

const p2 = {
    title: 'goma',
    price: 80,
    thumbnail:
        'https://www.pngegg.com/en/png-zgkcx'
}

const p3 = {
    title: 'papel',
    price: 100,
    thumbnail:
        'https://www.pngegg.com/en/png-bbria'
}


class Contenedor{
    constructor(archivo){
        this.archivo = archivo
        this.id = 0
        this.data = []
    }

    async save(obj) {
        await this.getAll()
        this.id++
        this.data.push({
            id: this.id,
            product: obj
            })
        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify(this.data))
        } catch (error) {
        console.log(error)   
        }
    }

    getByID(id) {}

    async getAll() {
        try {
            const data = await fs.promises.readFile(this.archivo, 'utf-8')
            if (data) {
                this.data = JSON.parse(data)
                this.data.map((producto) => {
                    if (this.id<producto.id) this.id = producto.id
                })
                this.data = JSON.parse(data)
                console.log(this.data)
            }
        } catch (error) {
            return
        }
    }

    deleteById(id) {}

    deleteAll() {}

}

const lista = new Contenedor('archivo.txt')

async function newFunction() {
    await lista.save(p1)
    await lista.save(p2)
    await lista.save(p3)
}

newFunction()