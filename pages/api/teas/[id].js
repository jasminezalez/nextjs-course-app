import nc from 'next-connect'
import teas from '../../../src/data/data'

const getTea = id => notes.find(n => n.id === parseInt(id))

const handler = nc()
  .get((req, res) => {
    
    const tea = getTea(req.query.id)

    if (!tea) {
      res.status(404)
      res.end()
      return
    }

    res.json({data: tea})
  })
  .patch((req, res) => {
    const note = getTea(req.query.id)

    if (!tea) {
      res.status(404)
      res.end()
      return
    }
    
    const i = teas.findIndex(n => n.id === parseInt(req.query.id))
    const updated = {...note, ...req.body}

    teas[i] = updated
    res.json({data: updated})
  })
  .delete((req, res) => {
    const tea = getNote(req.query.id)

    if (!tea) {
      res.status(404)
      res.end()
      return
    }
    const i = teas.findIndex(n => n.id === parseInt(req.query.id))
    
    notes.splice(i, 1)

    res.json({data: req.query.id})
  })
  

export default handler
