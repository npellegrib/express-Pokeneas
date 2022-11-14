import * as os from 'os'

var Pokeneas = [
    {
        'id': '1',
        'Name': 'Bulbasur',
        'Tall': '0.7',
        'Ability': 'thickness',
        'Image': 'https://storage.googleapis.com/pokeneas_images/images/001.png',
        'Phrase': 'This Pokemon is born with a seed on its back, which sprouts over time',
        'ContainerId': os.hostname(),
    },
    {
        'id': '2',
        'Name': 'Ivysaur',
        'Tall': '1.0',
        'Ability': 'thickness',
        'Image': 'https://storage.googleapis.com/pokeneas_images/images/002.png',
        'Phrase': 'When the bulbous back grows large enough, it loses the ability to stand upright on its hind legs',
        'ContainerId': os.hostname(),
    },
    {
        'id': '3',
        'Name': 'Venusaur',
        'Tall': '2.0',
        'Ability': 'thickness',
        'Image': 'https://storage.googleapis.com/pokeneas_images/images/003.png',
        'Phrase': 'The plant flourishes when it absorbs solar energy, forcing it to always seek sunlight',
        'ContainerId': os.hostname(),
    },
    {
        'id': '4',
        'Name': 'Charmander',
        'Tall': '0.6',
        'Ability': 'sea flames',
        'Image': 'https://storage.googleapis.com/pokeneas_images/images/004.png',
        'Phrase': 'He prefers hot things. They say that when it rains steam comes out of the tip of the tail',
        'ContainerId': os.hostname(),
    },
    {
        'id': '5',
        'Name': 'Charmeleon',
        'Tall': '1.1',
        'Ability': 'sea flames',
        'Image': 'https://storage.googleapis.com/pokeneas_images/images/005.png',
        'Phrase': 'This naturally aggressive Pokemon attacks in battle with its flaming tail and shreds an opponent with its sharp claws',
        'ContainerId': os.hostname(),
    },
    {
        'id': '6',
        'Name': 'Charizard',
        'Tall': '1.7',
        'Ability': 'sea flames',
        'Image': 'https://storage.googleapis.com/pokeneas_images/images/006.png',
        'Phrase': 'It spits a fire so hot that it melts the rocks. Unintentionally causes forest fires',
        'ContainerId': os.hostname(),
    },
    {
        'id': '7',
        'Name': 'Squirtle',
        'Tall': '0.5',
        'Ability': 'torrent',
        'Image': 'https://storage.googleapis.com/pokeneas_images/images/007.png',
        'Phrase': 'When it retracts its long neck into its shell, it shoots water at incredible pressure',
        'ContainerId': os.hostname(),
    }
];


export const sendInfoPokenea = (req, res) => {
    const number = Math.floor(Math.random() * 7);
    var viewData = {
        pokenea: Pokeneas[number],
    }
    res.render('layout1', viewData)
}

export const sendPhrasePokenea = (req, res) => {
    const number = Math.floor(Math.random() * 7);
    var viewData = {
        pokenea: Pokeneas[number],
    }
    res.render('layout2', viewData)
}