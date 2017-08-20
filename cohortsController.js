var http = require('request')

module.exports = {

  getAll: (req, resp) => {

    http({ url:'https://devmountain.com/api/classSession'}, (devmtnRequest, devmtnResponse) => {
      resp.send(devmtnResponse)
    })


  }

}