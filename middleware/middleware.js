var exports = module.exports = {}

exports.auth = (req, res, next) => {
    console.log("Sommeone connected", req.ip)
    next()
}
