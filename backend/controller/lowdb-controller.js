const low = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")

const adapter = new FileSync("db.json")
const db = new low(adapter)

// Set some defaults
db.defaults({ section2: {}, section4: [] }).write()

const getSection2 = async (req, res, next) => {
  await db.read()
  const section2 = db.get("section2").value()

  res.json(section2)
}

const getSection4 = async (req, res, next) => {
  await db.read()
  const section4 = db.get("section4").value()
  // console.log(section4)

  // db.data ||= { section4: [] }
  // const { section4 } = db.data
  res.json(section4)
}

exports.getSection2 = getSection2
exports.getSection4 = getSection4
