const express = require('express')
const router = express.Router()
const { User, PROJECTION } = require('./model')

router.get('/', (req, res) => {
    User.find((err, Users) => {
        if (err) {
            res.status(500).send('Users could not be loaded.')
        } else {
            res.send(Users)
        }
    })
})

router.get('/:email', (req, res) => {
  User.find({ email: req.params.email }, PROJECTION, (err, User) => {
      console.log(User)
      console.log(User != [])
      if (User != []) {
        if (err) {
        res.status(500).send('User could not be loaded')
        } else {
        res.send(User)
        }
      } else {
          res.send('We could not find a user with the specified email.')
      }
  })
})

const multer = require('multer')
// In the next command you will asign the name of the folder which will contain the static files.
const pictureUploader = multer({ dest: 'profile_pics/' })

router.post('/', pictureUploader.single('profile_pic'), (req, res) => {
    const newUser = new User(req.body)
    if (req.file) {
        newUser.profile_pic = `${req.protocol}://${req.get('host')}/${req.file.destination}${req.file.filename}`
    }
    newUser.save((err, registeredUser) => {
        if (err) {
            res.status(422).send({message: err.message})
        } else {
            res.send(registeredUser)
        }
    })
})

router.put('/:id', (req, res) => {
    User.updateOne({_id: req.params.id}, req.body, (err, updatedUser) => {
        if (updatedUser.nModified === 1) {
            if (err) {
                res.status(422).send({message: err.message})
            } else {
                res.send({'User succesfully updated!': updatedUser})
            }
        } else {
            res.send('We could not find a user with the specified Id.')
        }
    })
})

router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
        if (deletedUser) {
            const deletedUserName = deletedUser.name
            if (err) {
                res.status(500).send({message: err.message})
            } else {
                res.send(`The user '${deletedUserName}' has been deleted.`)
            }
        } else {
            res.send('We could not find a user with the specified Id.')
        }
    })
})

module.exports = router