const router = require('express').Router();
const fetch = require('node-fetch')
const parseString = require('xml2js').parseString;
//const db = require('../data/topnine-model.js')

router.get('/', async(req, res) => {
  
    const url = "https://water.weather.gov/ahps2/hydrograph_to_xml.php?gage=ronv2"
    const fetched = await fetch(url)
    console.log(fetched)
   const json = parseString(fetched, function (err, result) {
        if(result){return[{"no":"no"}]}else {
            return [{"no":"no"}]
        }

    });
    //const res_feched = await json.json()
       res.json(json)
})

// router.post('/', (req, res) => {
   
//         db.add(post)
//             .then(posted => {
//                 res.status(201).json(posted)
//             })
//             .catch(error => {
//                 res.status(500).json({ message: "There was an error while saving the post to the database" })
//             })
    
// })



module.exports = router