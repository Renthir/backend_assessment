globalId = 6
const fortunes = [
    {id: 1, fortune: 'All the effort you are making will ultimately pay off.'},
    {id: 2, fortune: 'All the troubles you have will pass away very quickly.'},
    {id: 3, fortune: 'All will go well with your new project.'},
    {id: 4, fortune: 'All your hard work will soon pay off.'},
    {id: 5, fortune: 'Allow compassion to guide your decisions.'}
]

module.exports = {


    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]
        res.status(200).send(randomFortune)
    },

    addFortune: (req, res) => {
        let newFortune = {
            id: globalId,
            fortune: req.body.fortune
        }

        fortunes.push(newFortune)
        console.log(fortunes)
        res.sendStatus(200)
    },

    deleteFortune: (req, res) => {
        //I can't get this function to work and I can't figure out why
        let delId = req.params.id

        // let fortIdx = fortunes.findIndex((elem) => {elem.id === delId})
        for (let i = 0; i < fortunes.length; i++){
            if (fortunes[i].id === delId){
                let delFortune = fortunes.splice(fortIdx, 1)
                res.status(200).send(`Fortune ${delFortune.id} Deleted`)
                return
            }
        }

        res.status(400).send('Please input a valid fortune ID#')
    },

    sillyFortune: (req, res) => {
        fortunes.forEach((elem) => {
            elem.fortune += '.. but at what cost?'
        })
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]
        res.status(200).send(randomFortune)

    }

}