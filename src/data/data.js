export const data  = [
    {
        id: 1,
        title: 'Call of Duty',
        category: 'Fps',
        imagen: 'call',
        price: 2500,
    }
    ,
    {
        id: 2,
        title: 'Rust',
        category: 'Mundo Abierto',
        imagen: 'rust',
        price: 500,
    }
    ,

    {
        id: 3,
        title: 'Pubg',
        category: 'Batleroyale',
        imagen: 'pubg',
        price: 800,
    }
    ,
    {
        id: 4,
        title: 'Counter Strike Go',
        category: 'Fps',
        imagen: 'counter',
        price: 250,
    },
]


export const getProducts = (  categoryName) => {
    console.log(categoryName)
        return new Promise((res , rej) => {
            setTimeout(() => {
                if (categoryName){
                    const filterData = data.filter((item) =>{
                        return item.category === categoryName;
                    });
                    console.log(filterData);
                    res(filterData);
                } else {
                    res(data);
                }
            }, 1000);
        })
    }
    
