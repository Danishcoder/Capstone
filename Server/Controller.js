const dotenv = require("dotenv").config()
const Sequelize = require("sequelize")

const {CONNECTION_STRING} = process.env
const sequelize = new Sequelize(CONNECTION_STRING,  {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
  })
    


module.exports = {
    addVote: (req,res) => {
        sequelize.query(`
        update boxerinfo 
        set totalvotes = totalvotes+1
        where boxer_id = ${req.query.boxer_id}
        `).then(() => {
            res.send("Success")
        })
    },
    getBoxers: (req,res) => {
        sequelize.query(`
        SELECT * FROM boxerinfo ORDER BY boxer_id asc`)
        .then((data) => {
            res.send(data)
        })
    },
    seed: (req,res) => {
        sequelize.query(`
        create table boxerinfo (
            boxer_id serial primary key, 
            totalVotes integer,
            );

            insert into boxers (name)
            values ('Floyd Mayweather'),
            ('Mike Tyson'),
            ('Manny Pacquiao),
            ('Canelo Alvarez'),
            ('Muhammad Ali'),
            ('Random Boxer'),
            ('Random Boxer'),
            ('Random Boxer');
            
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        })
    }
}