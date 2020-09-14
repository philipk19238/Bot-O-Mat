const robotTasks = [
    {
        description: 'Do the Dishes',
        eta: 4,
    }, {
        description: 'Sweep the House',
        eta: 5,
    }, {
        description: 'Do the Laundry',
        eta: 10,
    }, {
        description: 'Take out the Recycling',
        eta: 6,
    }, {
        description: 'Make a Sammich',
        eta: 7,
    }, {
        description: 'Mow the Lawn',
        eta: 20,
    }, {
        description: 'Rake the Leaves',
        eta: 18,
    }, {
        description: 'Give the Dog a Bath',
        eta: 13,
    }, {
        description: 'Bake some Cookies',
        eta: 8,
    }, {
        description: 'Wash the Car',
        eta: 5,
    }
];

const robotTypes = [
    {
        UNIPEDAL: 'Unipedal',
        BIPEDAL: 'Bipedal',
        QUADRUPEDAL: 'Quadrupedal',
        ARACHNID: 'Arachnid',
        RADIAL: 'Radial',
        AERONAUTICAL: 'Aeronautical'
    }
];

const imageLoc = {
    UNIPEDAL: "https://github.com/philipk19238/Bot-O-Mat/blob/master/src/data/images/unipedal.PNG?raw=true",
    BIPEDAL: "https://github.com/philipk19238/Bot-O-Mat/blob/master/src/data/images/bipedal.PNG?raw=true",
    QUADRUPEDAL: "https://github.com/philipk19238/Bot-O-Mat/blob/master/src/data/images/quad.PNG?raw=true",
    ARACHNID: "https://github.com/philipk19238/Bot-O-Mat/blob/master/src/data/images/arachnid.PNG?raw=true",
    RADIAL: "https://github.com/philipk19238/Bot-O-Mat/blob/master/src/data/images/air.PNG?raw=true",
    AERONAUTICAL: "https://github.com/philipk19238/Bot-O-Mat/blob/master/src/data/images/air.PNG?raw=true"
}

module.exports = { robotTasks, robotTypes, imageLoc }