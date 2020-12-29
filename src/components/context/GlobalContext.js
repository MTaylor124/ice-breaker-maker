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
                }
            },
            createPrompt: {
                type: null,
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
                setType: (newType) => {
                    if (this.state.createPrompt.type === newType) {
                        this.setState(s => {
                            return s.createPrompt.type = null
                        })
                    } else {
                        this.setState(s => {
                            return s.createPrompt.type = newType
                        })
                    }
                },
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