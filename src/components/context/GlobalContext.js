import React, {createContext} from 'react'

export const GlobalContext = createContext()

export class GlobalContextProvider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            test: 'yes',

            // Matt

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