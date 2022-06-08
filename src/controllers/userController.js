const mongoose = require('mongoose');
const User = mongoose.model('User');


module.exports = {
  async login(req, res) {

  },
  async register(req, res) {

  },
  async list(req, res) {

    const options = {
      page: req.params.page,
      limit: req.params.limit,
    }
    const users = await User.find({})
    .skip(options.page > 0 ? (options.page -1) * options.limit : 0)
    .limit(options.limit)
    .sort({name: 1});

    if(!users) return res.status(404).json({ success: false })

    return res.status(200).json({ 
      success: true, 
      users 
    })
  }
}