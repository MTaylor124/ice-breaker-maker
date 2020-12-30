import React, {createContext} from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

export const GlobalContext = createContext()

export class GlobalContextProvider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            test: 'yes',

            // Matt
            checkContext: () => {
                console.log('context:', this.state)
            },
            auth: {
                signedIn: false,
                signIn: () => {
                    this.setState(s => {
                        return s.auth.signedIn = true
                    })
                },
                signOut: () => {
                    this.setState(s => {
                        s.user.userID = null
                        s.auth.signedIn = false
                        return s
                    })
                },
                toggleSignedIn: () => {
                    this.setState(s => {
                        return s.auth.signedIn = !this.state.auth.signedIn
                    })
                }
            },
            nav: {
                redirectingToFavorites: false,
                redirectToFavorites: () => {
                    this.setState(s => {
                        setTimeout(() => {
                            this.setState(s => {
                                return s.nav.redirectingToFavorites = false
                            })
                        }, 50)
                        return s.nav.redirectingToFavorites = true
                    })
                },
                redirectingToActivities: false,
                redirectToActivities: () => {
                    this.setState(s => {
                        setTimeout(() => {
                            this.setState(s => {
                                return s.nav.redirectingToActivities = false
                            })
                        }, 50)
                        return s.nav.redirectingToActivities = true
                    })
                },
                redirectingToTopics: false,
                redirectToTopics: () => {
                    this.setState(s => {
                        setTimeout(() => {
                            this.setState(s => {
                                return s.nav.redirectingToTopics = false
                            })
                        }, 50)
                        return s.nav.redirectingToTopics = true
                    })
                },
                redirectingToCreate: false,
                redirectToCreate: () => {
                    this.setState(s => {
                        setTimeout(() => {
                            this.setState(s => {
                                return s.nav.redirectingToCreate = false
                            })
                        }, 50)
                        return s.nav.redirectingToCreate = true
                    })
                }
                
            },
            user: {
                userID: null,
                setUserID: (userID) => {
                    this.setState(s => {
                        return s.user.userID = userID
                    })
                },
                userRef: null,
                setUserRef: (userRef) => {
                    this.setState(s => {
                        return s.user.userRef = userRef
                    })
                }
            },
            icebreakers: {
                icebreakerList: [],
                addToIceBreakers: (newIceBreaker) => {
                    this.setState(s => {
                        return s.icebreakers.icebreakerList.push(newIceBreaker)
                    })
                },
                checkIcebreakers: () => {
                    console.log(this.state.icebreakers.icebreakerList)
                },
                clearList: () => {
                    this.setState(s => {
                        return s.icebreakers.icebreakerList = []
                    })
                },
                indexOfRandomIcebreaker: null,
                setIndexOfRandomIcebreaker: (newIndex) => {
                    this.setState(s => {
                        return s.icebreakers.indexOfRandomIcebreaker = newIndex
                    })
                },
                loadingList: null,
                loadList: () => {
                    this.setState(s => {
                        return s.icebreakers.loadingList = true
                    })
                },
                finishLoadingList: () => {
                    this.setState(s => {
                        return s.icebreakers.loadingList = false
                    })
                }

            },
            createPrompt: {
                changeTitle: (newtitle) => {
                    this.setState(s => {
                        return s.createPrompt.title = newtitle
                    })
                },
                title: null,
                changeBody: (newBody) => {
                    this.setState(s => {
                        return s.createPrompt.body = newBody
                    })
                },
                body: null,
                disableIce: false,
                disableAct: false,
                type: null,
                setType: (newType) => {
                    if (this.state.createPrompt.type === null) {
                        if (newType === 'Icebreakers') {
                            this.setState(s => {
                                s.createPrompt.type = 'Icebreakers'
                                s.createPrompt.disableAct = true
                                s.createPrompt.disableIce = false
                                return s
                            })
                        } else if (newType === 'Activity') {
                            this.setState(s => {
                                s.createPrompt.type = 'Activity'
                                s.createPrompt.disableAct = false
                                s.createPrompt.disableIce = true
                                return s
                            })
                        }
                    } else {
                        this.setState(s => {
                            s.createPrompt.type = null
                            s.createPrompt.disableAct = false
                            s.createPrompt.disableIce = false
                            return s
                        })
                    }
                },
                submitting: false,
                submitForm: (theType) => {
                    this.setState(s => {
                        s.createPrompt.submittedType = theType
                        return s.createPrompt.submitting = true
                    })
                },
                submitted: false,
                finishSubmitting: () => {
                    this.setState(s => {
                        return s.createPrompt.submitted = true
                    })
                },
                submittedType: null,
                clearData: () => {
                    this.setState(s => {
                        s.createPrompt.title = null
                        s.createPrompt.body = null
                        s.createPrompt.type = null
                        s.createPrompt.disableIce = false
                        s.createPrompt.disableAct = false
                        s.createPrompt.submitted = null
                        s.createPrompt.submittedType = null
                        s.createPrompt.submitting = null
                        return s
                    })
                }
            },
            home: {
                showingPopup: false,
                showPopup: () => {
                    this.setState(s => {
                        return s.home.showingPopup = true
                    })
                },
                closePopup: () => {
                    this.setState(s => {
                        return s.home.showingPopup = false
                    })
                }
            }
            // Maha

            // Dean

        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState(s => {
                    s.auth.signedIn = true
                    s.user.userID = user.uid
                    return s
                })
                setTimeout(() => {
                    firebase.firestore().collection('users')
                    .where('userID', '==', user.uid)
                    .limit(1)
                    .get()
                    .then(snapshot => {
                        snapshot.forEach(doc => {
                            this.state.user.setUserRef(doc.id)
                        })
                    })
                    .catch(err => {
                        console.error(err.code)
                    })
                }, 500)
            }
        })
    }

    render() {
        return (
            <GlobalContext.Provider value={this.state}>
                {this.props.children}
            </GlobalContext.Provider>
        )
    }
}