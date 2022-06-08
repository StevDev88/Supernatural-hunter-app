const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

app.use(express.static('public'))


const winchesterFamily = {
    'sam winchester': {
        'personName': 'Sam Winchester',
        'birthdate': 'May 2nd, 1983',
        'birthplace': 'Lawrence, Kansas',
        'species': 'Human',
        'quote': `"I don't feel free. What we've done, what we've lost, right now, that is what I'm feeling, and sometimes it's like I can't even breathe. But maybe tomorrow. (...) Maybe I'll feel better in the morning."`,
        'description': `Sam has shaggy brown hair that grows longer and smoother in later seasons; he had a fringe as a child as well as in the first two seasons. Over the course of the show, he grew the fringe out. His eye color seems to change; sometimes they appear light green, sometimes they appear brown, etc. He is noted by other characters to be handsome. Sam is very tall, 6' 4" (193.04 cm) having a muscular build with broad shoulders and a muscular chest.`,
        'image': 'https://static.wikia.nocookie.net/supernatural/images/5/58/JP_SNS2_46.jpg'
    },
    'dean winchester': {
        'personName': 'Dean Winchester',
        'birthdate': 'January 24, 1979',
        'birthplace': 'Lawrence, Kansas',
        'species': 'Human',
        'quote': `"God or no God, you go to Hell!"`,
        'description': `Dean has green eyes, light freckles on his face and short-cropped Ivy-league hair that is dark blonde. He is 6'1"-- making him shorter than his younger brother Sam—and muscular. Dean is noted to be "handsome" or even "pretty" by other characters constantly.`,
        'image': 'https://static.wikia.nocookie.net/supernatural/images/d/da/Gimme_Shelter_12.jpg'
    },
    'john winchester': {
        'personName': 'John Winchester',
        'birthdate': '1954, month unknown',
        'birthplace': 'Normal, Illinois',
        'species': 'Human',
        'quote': `"It scares the hell out of me. You two are all I've got. But I guess we are stronger as a family. So ... let's go after this damn thing. Together."`,
        'description': 'John is tall and stocky, with brown hair, hazel eyes, and a persistent 5 o\'clock shadow.  Already having remarkable skills from his experience as a Vietnam Marine Corporal, with him also achieving four medals in his military career, as a hunter, John Winchester would become among the best hunters in history.',
        'image': 'https://upload.wikimedia.org/wikipedia/en/6/63/John_winchester.jpg'
    },
    'mary winchester': {
        'personName': 'Mary Winchester',
        'birthdate': 'December 5, 1954',
        'birthplace': 'Unknown',
        'species': 'Human',
        'quote': `"I want a family. I want to be safe. You know the worst thing I can think of, the very worst thing? Is for my children to be raised into this like I was."`,
        'description': 'Mary has blonde hair, often kept in slight curls and undone. In her youth, she wore short-sleeved shirts topped with a jacket and jeans. Lean and strong, she makes a powerful hunter.',
        'image': 'https://static.wikia.nocookie.net/supernatural/images/8/87/Game_Night_12.jpg'
    },
    'demon': {
        'personName': 'Azazel',
        'birthdate': 'Prehistory',
        'birthplace': 'Unknown',
        'species': 'Demon',
        'quote': `"If any of you gals are the praying type, now would be a good time to start."`,
        'description': 'Azazel was demon, a Prince of Hell, but before both his name and title became known in Hell, he was literally called The Yellow-Eyed Demon (a specific racial description for a General of Hell). It has been shown that its true form, which manifests itself on earth as black smoke, looks like a skull. He usually posses a pale caucasian middle-aged male in a dark trench coat, a tie, and a formal hat.',
        'image': 'https://static.wikia.nocookie.net/supernatural/images/6/63/AzazelSPN.png'
    }
}


app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/public/style.css', (req, res) =>{
    res.sendFile(__dirname + '/public/style.css')
})

app.get('/public/main.js', (req, res) =>{
    res.sendFile(__dirname + '/public/main.js')
})


app.get('/api/:charName', (req, res) =>{
    const characterName = req.params.charName.toLowerCase()
    if (winchesterFamily[characterName]){
        res.json(winchesterFamily[characterName])
    } else {
        res.json(winchesterFamily['demon'])
    }
})


app.listen(process.env.PORT || PORT, () =>{
    console.log('Server is running the 100m dash.')
})