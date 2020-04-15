const INITIAL_STATE={
    sections:[
            {
            title:'Hats',
            imgUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:1,
            linkUrl:'shop/hats'
            },
            {
            title:'Jackets',
            imgUrl:'https://i.ibb.co/px2tCc3/jackets.png',
            id:2,
            linkUrl:'shop/jackets'
            },
            {
            title:'Sneakers',
            imgUrl:'https://i.ibb.co/0jqHpnp/womens.png',
            id:5,
            linkUrl:'shop/sneakers'
            },
        {
            title:'Womens',
            imgUrl:'https://i.ibb.co/GCCdy8t/womens.png',
            id:3,
            size:'large',
                linkUrl:'shop/womens'
            },
            {
            title:'Mens',
            imgUrl:'https://i.ibb.co/R70vBrQ/mens.png',
            id:4,
            size:'large',
            linkUrl:'shop/mens'
            },
            ]
};
const directoryReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
};

export default directoryReducer;