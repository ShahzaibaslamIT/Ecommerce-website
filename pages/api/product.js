export default function Handler(req,res){
    const products=[
        {
            id:1,
            name:"American Burger",
            price:200,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn0IVEfLY9byENnGLuyZjemWXZ5IjyCNsajQ&s"

        },
        {
            id:2,
            name:"Deep Dish Pizza",
            price:500,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpSrtGIB4DeAx2s6bgnGfzC7O2cEEelRp10g&s"

        },
        {
            id:3,
            name:"Chargha",
            price:1000,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgwCWkAV2tIOfw2fSosSgWLgkUqgmmiyTAag&s"

        },
        {
            id:4,
            name:"Karhai",
            price:1200,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0vd1Eo-_BoKsgrRo9TUE3aJvkw38cYKjVmw&s"

        },
        {
            id:5,
            name:"Chicken stakes",
            price:850,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgjjtyV74gwbHdssKMTqY7gu2IqFKaCrq45Q&s"

        },
        {
            id:6,
            name:"Reshmi Kabab",
            price:300,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFwTPNG2ffCFUtpG_PUMa1lr9eGiB4g-N5rw&s"

        },

    ];
    req.status(200).json(products);
}