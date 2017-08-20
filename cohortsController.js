var http = require('request')
    moment = require('moment')
module.exports = {

  getAll: (req, resp) => {

    http({ url:'https://devmountain.com/api/classSession'}, (devmtnRequest, devmtnResponse) => {
      let data = JSON.parse(devmtnResponse.body)


      //get the current date, and add a day to it
      //if any cohorts' date matches, return
      let now = new Date('2017-11-26T05:00:00.000Z')
      let matchDate = new Date(now.setTime( now.getTime() + 1 * 86400000))

      let cohortNames = data.filter( cohort => {
        let formatDate = new Date(cohort.date_start)
       // console.log("formatDate: ", formatDate.slice(0,10))
       // console.log("matchdate:", matchDate.slice(0,10))
        return cohort.name === 'Web Dev Immersive' && moment(cohort.date_start).format('YYYY-MM-DD') == moment(matchDate).format('YYYY-MM-DD')
      })
    
      resp.send(cohortNames)
    })

    

  }

}