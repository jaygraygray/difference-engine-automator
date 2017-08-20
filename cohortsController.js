var http = require('request')
    moment = require('moment')
module.exports = {

  getAll: (req, resp) => {

    http({ url:'https://devmountain.com/api/classSession'}, (devmtnRequest, devmtnResponse) => {
      
      let data = JSON.parse(devmtnResponse.body)
      let now = new Date('2017-11-26T05:00:00.000Z')
      let matchDate = new Date(now.setTime( now.getTime() + 1 * 86400000))

      let cohortNames = data.filter( cohort => {
        let formatDate = new Date(cohort.date_start)
        return cohort.name === 'Web Dev Immersive' && moment(cohort.date_start).format('YYYY-MM-DD') == moment(matchDate).format('YYYY-MM-DD')
      })
      .map( cohort => {
        return cohort.id
      })
      
    
      resp.send(cohortNames)

    })

  }

}