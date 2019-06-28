const db = require('mongoose');
const Card = require('../models/card');

// unrestricted
exports.getCards = (req, res) => {

    let _cards = [
        { _id: 1, title: 'Vego', text: 'Här finns det gott om stora maträtter för hela familjen.', footer: 'Svedmyravägen 132, 121 12 Bromölla', img: "https://korpenvasteras.zoezi.se/api/public/image/get?size=50x50&type=usergroup&id=88", alt:"" },
        { _id: 1, title: 'Sverre', text: 'Bengansson', footer: 'Svedmyravägen 132, 121 12 Bromölla', img: "https://korpenvasteras.zoezi.se/api/public/image/get?size=50x50&type=usergroup&id=88", alt:"" },
        { _id: 1, title: 'Osta', text: 'Osna', footer: 'sadfas', img: "https://korpenvasteras.zoezi.se/api/public/image/get?size=50x50&type=usergroup&id=88", alt:"" },
        { _id: 1, title: 'Knut', text: 'Karlsson', footer: 'Sundgren är itne lång. Igen 132, 121 12 Svedala', img: "https://korpenvasteras.zoezi.se/api/public/image/get?size=50x50&type=usergroup&id=88", alt:"https://camo.githubusercontent.com/6087557f69ec6585eb7f8d7bd7d9ecb6b7f51ba1/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f66697265666f782f66697265666f785f34387834382e706e67" },

    ]

    return res.status(200).json(_cards);
}

exports.getCard = (req, res) => {
    let _card = { _id: 1, title: 'Nicklas', text: 'Johansson', footer: 'Svedmyravägen 132, 121 12 Bromölla', img: "", alt:"" }
    
    return res.status(200).json(_card);
}