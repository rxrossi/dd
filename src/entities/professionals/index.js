export default db => {
  return {
    getAll() {
      return new Promise((resolve, reject) => {
        db.all("SELECT * FROM professional", (err, rows) => {
          if (err) {
            console.error(err)
            reject()
          } else {
            resolve(rows)
          }
        })
      })
    }
  }
}
