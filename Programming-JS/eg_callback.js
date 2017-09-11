var fs = require('fs')

function getBears(filepath, done) {
  fs.readFile(filepath, function(err, bears){
    if(err) return done(err)
      fs.readfile('bears.dictionary' , function(err, dict){
        if(err) return done(err)
          compareBears(bears, dict)
      })
  })

}
