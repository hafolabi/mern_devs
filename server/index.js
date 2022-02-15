const express = require("express")
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'theinsightsdb'
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
db.connect();

app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM user"
    db.query(sqlSelect, (err, results) => {
        return res.json(results)
    })
})


app.post("/api/insert", (req, res) => {

    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.regEmail
    const gender = req.body.regGender
    const password = req.body.regPassword

    db.query("SELECT COUNT (*) AS cnt FROM user WHERE email = ? ",
            req.body.regEmail, (err, data) => {
                if (err) {
                    console.log(err)
                }

                if (data[0].cnt > 0) {
                    return res.send({ message: 'Email Already Exist, Refresh and Try Again!' })
                        //console.log('already exist')
                } else {
                    const sqlInsert = "INSERT INTO user (firstName, lastName, email, gender, password) VALUES (?,?,?,?,?)"
                    db.query(sqlInsert, [firstName, lastName, email, gender, password], (err, result) => {
                        return res.status(200).send({ msg: 'success' })
                    })
                }

            })
        /* // To Test if our Database was working
         const sqlInsert = "INSERT INTO register (fullName, email, gender, password) VALUES ('seun', 'afolabi@gmail.com','female', 'tope');"
         db.query(sqlInsert, (err, result) => {
             res.send("hello Sukura")
         })*/

})

app.post('/login', (req, res) => {
    const email = req.body.regEmail
    const password = req.body.regPassword

    const sqlSelect = "SELECT * FROM user WHERE email = ? AND password = ?"
    db.query(sqlSelect, [email, password], (err, result) => {
        if (err) {
            res.send({ err: err })
        }
        if (result.length > 0) {
            return res.send(result)
        } else {
            return res.send({ message: 'Wrong Email/Password Combination!' })
        }
    })

})

app.post('/cinema', (req, res) => {
    const movieName = req.body.regMovieName
    const movieReview = req.body.regMovieReview
    const time = req.body.regTime
    const date = req.body.regDate
    const location = req.body.regLocation

    db.query("SELECT COUNT (*) AS cnt FROM cinema WHERE movieName = ?",
        req.body.regMovieName, (err, data) => {
            if (err) {
                console.log(err)
            }

            if (data[0].cnt > 0) {
                return res.send({ message: 'Movie Name Already Exist' })
            } else

            {
                const sqlInsert = "INSERT INTO cinema (movieName, movieReview, time, date, location) VALUES(?,?,?,?,?)"
                db.query(sqlInsert, [movieName, movieReview, time, date, location], (err, result) => {
                    return res.status(200).send({ msg: 'success' })
                })
            }
        })
})

app.get('/cinema', (req, res) => {
    const sqlSelect = "SELECT * FROM cinema ORDER BY movieName DESC LIMIT 5"
    db.query(sqlSelect, (err, results) => {
        return res.json(results)
    })
})

app.delete('/delete/:movieName', (req, res) => {
    const name = req.params.movieName
    const sqlDelete = "DELETE FROM cinema WHERE movieName = ?";
    db.query(sqlDelete, name, (err, result) => {
        if (err) console.log(err)
        return res.json()
    })
})

// app.put('/api/update1', (req, res) => {
//     const name = req.body.regMovieName
//     const review = req.body.regMovieReview
//     const time = req.body.regTime
//     const date = req.body.regDate
//     const location = req.body.regLocation

//     const sqlUpdate = "UPDATE cinema SET movieReview = ?, time = ?, date = ?, location = ? WHERE movieName = ?";
//     db.query(sqlUpdate, [review, time, date, location, name], (err, result) => {
//         if (err) console.log(err)
//         return res.json()
//     })

// })

app.put('/api/update1', (req, res) => {
    const name = req.body.regMovieName
    const review = req.body.regMovieReview

    const sqlUpdate = "UPDATE cinema SET movieReview = ? WHERE movieName = ?";
    db.query(sqlUpdate, [review, name], (err, result) => {
        if (err) console.log(err)
        return res.json()
    })

})

app.put('/api/update2', (req, res) => {
    const name = req.body.regMovieName
    const time = req.body.regTime

    const sqlUpdate = "UPDATE cinema SET  time = ? WHERE movieName = ?";
    db.query(sqlUpdate, [time, name], (err, result) => {
        if (err) console.log(err)
        return res.json()
    })

})

app.put('/api/update3', (req, res) => {
    const name = req.body.regMovieName
    const date = req.body.regDate

    const sqlUpdate = "UPDATE cinema SET date = ? WHERE movieName = ?";
    db.query(sqlUpdate, [date, name], (err, result) => {
        if (err) console.log(err)
        return res.json()
    })

})

app.put('/api/update4', (req, res) => {
    const name = req.body.regMovieName
    const location = req.body.regLocation

    const sqlUpdate = "UPDATE cinema SET location = ? WHERE movieName = ?";
    db.query(sqlUpdate, [location, name], (err, result) => {
        if (err) console.log(err)
        return res.json()
    })

})

app.listen(3001, () => {
    console.log('running on port 3001')
})