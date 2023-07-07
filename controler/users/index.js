
const data =[
    {
        name:"mani"
    },
    {
        name:"Harikaran"
    },
    {
        name:"abi"
    },
    {
        name:"sabari"
    },
]
exports.getUser=function(req,res){
    res.send({
        message:"Data fetched successfully",
        data
    })
}