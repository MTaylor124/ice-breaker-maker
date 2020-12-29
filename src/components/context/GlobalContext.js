import React, {createContext} from 'react'

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
                        return s.auth.signedIn = false
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
                
            }
            // Maha

            // Dean

        }
    }

    render() {
        return (
            <GlobalContext.Provider value={this.state}>
                {this.props.children}
            </GlobalContext.Provider>
        )
    }
}