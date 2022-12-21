import React from "react";


class Header extends React.Component {
    constructor (props){
        super(props)
        this.state={
            input:''
        }
    }
    render() {
        return (
            <header className="app__header">
                <div className="Search__bar">
                <input className="Search__input" name="city" type="text"
                        onChange={e =>this.setState({input:e.target.value}) }
                        placeholder="city name" />
                <button onClick={e => this.props.event(this.state.input)} className="Search__button">Find Weather</button>
                </div>
            </header>   
        )
    }
}

export default Header