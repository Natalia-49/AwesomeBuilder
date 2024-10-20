const floorArr =[{
    id: 0,
    building:"25",
    floor: "4",    
    apartmentNumber: "1",
    rooms: "3",
    square: "82,3 м2",
    price:"720$",
    priceTotal:"59256$",
    statys:"action",
},
{
    id: 1,
    building:"25",
    floor: "4",    
    apartmentNumber: "2",
    rooms: "2",
    square: "60,7 м2",
    price:"700$",
    priceTotal:"43704$",
    statys:"sold", 
},
{
    id: 2,
    building:"25",
    floor: "4",    
    apartmentNumber: "3",
    rooms: "2",
    square: "60,7 м2",
    price:"700$",
    priceTotal:"43704$",
    statys:"free", 
},
{
    id: 3,
    building:"25",
    floor: "4",    
    apartmentNumber: "4",
    rooms: "3",
    square: "82,0 м2",
    price:"720$",
    priceTotal:"59040$",
    statys:"action",
},
{
    id: 4,
    building:"25",
    floor: "4",    
    apartmentNumber: "5",
    rooms: "3",
    square: "79,7 м2",
    price:"720$",
    priceTotal:"57384$",
    statys:"reservation",
},
{
    id: 5,
    building:"25",
    floor: "4",    
    apartmentNumber: "6",
    rooms: "1",
    square: "39,2 м2",
    price:"730$",
    priceTotal:"28616$",
    statys:"free",
},
{
    id: 6,
    building:"25",
    floor: "4",    
    apartmentNumber: "7",
    rooms: "1",
    square: "42,0 м2",
    price:"730$",
    priceTotal:"30660$",
    statys:"reservation",
},
{
    id: 7,
    building:"25",
    floor: "4",    
    apartmentNumber: "8",
    rooms: "1",
    square: "39,2 м2",
    price:"730$",
    priceTotal:"28616$",
    statys:"sold",
},
{
    id: 8,
    building:"25",
    floor: "4",    
    apartmentNumber: "9",
    rooms: "3",
    square: "79,3 м2",
    price:"720$",
    priceTotal:"57096$",
    statys:"action",
},
]

const installFloor = () => {
    const floorItem = document.querySelectorAll('.floor-item')
    const floorInfo = document.querySelector('.information-list')
    const removeActiveClass =()=> floorItem.forEach(item => item.classList.remove('active'))

    floorItem.forEach(floorItem => {
        floorItem.addEventListener('click', function(){
            removeActiveClass()
            floorItem.classList.add('active')
        })
    })
}
document.querySelector('.page-floor-item') ? installFloor() : null;