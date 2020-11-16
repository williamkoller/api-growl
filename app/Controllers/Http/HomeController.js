'use strict'

class HomeController {
  async index({ response }){
    response.json({ msg: "Welcome !!!" })
  }
}

module.exports = HomeController
