import * as fs from 'fs'
export  default async function  handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      let data = await fs.promises.readdir('contactData')
      fs.promises.writeFile(`contactData/${data.length+1}.json` , JSON.stringify(req.body), ()=>{

      })
      console.log(req.body)
      res.status(200).json(["Yes this is working"])
    } else {
      // Handle any other HTTP method
    res.status(200).json(["Haris Ali Blog"])

    }
  }