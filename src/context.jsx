import React, {Component} from "react"

const Context = React.createContext()

class Provider extends Component {
    state = {
        weekday: ""
    }

    async componentDidMount() {
        const now = new Date()

        this.setState({
            weekday: now
        })
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Provider
export const Consumer = Context.Consumer;