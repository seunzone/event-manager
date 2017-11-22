const db = [];

db.events = [
{
  id: 1,
  userId: 1,
  title: 'forLoop Nigeria',
  date: '10-10-17',
  time: '10-30-am',
  venue: 'EPIC Tower',
  details: 'Random text user writes about the event'
},
{
    id: 2,
    userId: 2,
    title: 'Cocktail Party',
    date: '20-12-17',
    time: '11-00-pm',
    venue: 'Zoza Hotels and suites',
    details: 'Random text user writes about the event'
},
{
    id: 3,
    userId: 3,
    title: 'Boonke Crusade',
    date: '13-11-17',
    time: '09-30-pm',
    venue: 'Lagos Open Field',
    details: 'Random text user writes about the event'
}

];

db.centers = [
    {
        id: 1,
        centerId: 1,
        capacity: 20,
        location: 'Yaba, Lagos',
        features: ['projector', 'AC', 'Underground hall'],
        description: 'Random text admin writes about the center'
    },
    {
        id: 2,
        centerId: 2,
        capacity: 200,
        location: 'Amity, Lagos',
        features: ['projector', 'AC', 'Game Center'],
        description: 'Random text admin writes about the center'
    },
    {
        id: 3,
        centerId: 3,
        capacity: 20,
        location: 'Yaba, Lagos',
        features: ['projector', 'AC', 'Underground hall'],
        description: 'Random text admin writes about the center'
    }
];

export default db;