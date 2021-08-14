const express = require('express')
const axios = require('axios')

const router = express.Router()

// GET / 라우터
router.get('/', async (req, res, next) => {
    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json?language=ko&address='+encodeURI('해운대해수욕장')+'&key=AIzaSyAjZt39bdV9uc3fxitQpzQBztXaIsEUA1Y');
        const location = response.data.results[0].geometry.location
        const adr = response.data.results[0].address_components
        let dong = ''
        for(let item of adr){
          if(item.types.length!==3) continue;
          if(item.types[2]==='sublocality_level_2'){
            dong=item.short_name
          }
        }
        const weather = await axios.get('https://api.openweathermap.org/data/2.5/onecall?units=metric&exclude=hourly?&lat='+location.lat+'&lon='+location.lng+'&appid=65b4e6c33f67eeb007448fddc53c6391')
        res.status(200).send({weather:weather.data, dong})
    }catch (error) {
        console.error(error)
        next(error)
    }
})

module.exports = router