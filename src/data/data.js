const teas = ["earl grey", "chamomile", "matcha green tea", "peppermint", "chai", "jasmine green tea", "barley tea", "shilagit", "oolong tea", "lemon balm tea", "lemon verbena tea", "lemongrass tea"]
  .map((el, i) => ({
    id: Date.now() + i,
    title: `${el}`
  }))

module.exports = teas
