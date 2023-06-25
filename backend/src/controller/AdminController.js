import models from "../models/models.js";
const {User} = models;

export const getSellers = async (req, res)=> {
    let sellers = await User.findAll({where: {
        role: "SELLER"
    }, attributes:  { exclude: ['password'] }})

    sellers = JSON.parse( JSON.stringify(sellers));
    res.json({
        accepted: sellers.filter(el => el.isAccepted == true),
        notAccepted: sellers.filter(el => el.isAccepted == false)
    });
} 

export const acceptSeller = async (req, res) => {
    const {id} = req.body;

    User.update({ isAccepted: true }, {
        where: {
          id
        }
    }).then(async data =>{
        let seller = await User.findOne({where: {id}, attributes:  { exclude: ['password'] }})
        res.json({
            seller,
            message: "Продавец подтверждён",
        })
    })
    
}