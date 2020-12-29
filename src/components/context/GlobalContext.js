import React, {createContext} from 'react'

export const GlobalContext = createContext()

export class GlobalContextProvider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            test: 'yes',

            // Matt

            auth: {
                signedIn: true,
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