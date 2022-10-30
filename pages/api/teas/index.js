import nc from 'next-connect'
import teas from '../../../src/data/data'

const handler = nc()
  .get((req, res) => {
    res.json({data: teas})
  })
  .post((req, res) => {
    const id = Date.now()
    const tea = {...req.body, id}

    teas.push(tea)
    res.json({data: tea})
  })
  

export default handler
