import React, { Component } from 'react'

export class ComponentTariff extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            isClicked: !prevState.isClicked
        }));
    };

    render() {
        const {title, price, description, text, color} = this.props;
        const { isClicked } = this.state;
        const componentStyle = {
            backgroundColor: color,
            boxShadow: isClicked ? '0 4px 8px 0 rgba(0,0,0,0.2)' : 'none',
            transform: isClicked ? 'scale(1.3)' : 'scale(1)',
            zIndex: isClicked ? '99999' : 'auto'
        };
        return (
            <div className='component' style={componentStyle} onClick={this.handleClick}>
                <h4 className='component-title'>{title}</h4>
                <div className='component-price'>
                    <span className='component-price-info'>{price}</span>
                </div>
                <div className='component-description'>{description}</div>
                <div className='component-text'>{text}</div>
            </div>
        );
    }
}

export default ComponentTariff