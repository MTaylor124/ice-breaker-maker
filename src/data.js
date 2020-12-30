

const icebreakers = [
    {
        prompt: 'this is the question how do you guys feel about it?',
        category: 'Tech',

        // Tech, Lifestyle, Hobbies, Spiritual, Mindfulness, etc
        createdBy: 'usersID',

        // CREATED BY ME BUTTON:
        // Go to the icebreakers collection
        // map through them only return the documents that 
        // have in the createdBy field an ID that matches the ID of the user


    }
]

const hostInformation = [
    {
        hostID: 'usersID',
        joinedOn: 'date',
        favorites: [
            {
                icebreakerID: 'id',
                favoritedOn: 'feb-20-2020'
            },
            {
                icebreakerID: 'id',
                favoritedOn: 'feb-22-2020'
            },
            {
                icebreakerID: 'id',
                favoritedOn: 'feb-26-2020'
            },
        ]
    }
]

let firebase

function favorite () {
    firebase.firestore().collection('users').where('id', '==', 'context id')
    .get()
    .then(doc => {
        firebase.firestore().collection('users')
        .doc(doc.id)
        .collection('favorites')
        .add({
            favoritedOn: 'todays date',
            favoriteIcebreakerID: 'context ID of icebreaker (write this into context)',
        })
    })
    .then(() => {
        firebase.firestore().collection('Icebreakers')
        .doc('context ID of icebreaker')
        .update({
            numberOfLikes: firebase.firestore.FieldValue.increment(1)
        })
        .catch(err => {
            console.error(err.code)
        })
    })
    .catch(err => {
        console.error(err.code)
    })
}


