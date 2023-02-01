import React from 'react';
import { connect } from 'react-redux';
import './ProductPrice.css';

class ProductPrice extends React.Component {
    state = {
        price : {
            symbol : '',
            amount : 0
        }
    }
    
    componentDidMount() {
        const currentProductPrice = this.props.prices.filter(price => price.currency.symbol === this.props.currency)[0];
        this.setState({price : {symbol : this.props.currency, amount : currentProductPrice.amount}})
    }
    
    componentDidUpdate() {
        if(this.props.currency !== this.state.price.symbol) {
            const currentProductPrice = this.props.prices.filter(price => price.currency.symbol === this.props.currency)[0];
            this.setState({price : {symbol : currentProductPrice.currency.symbol ,amount : currentProductPrice.amount}})
        }
    }

    render() {
        return (
            <div className="product-price"> 
                {this.state.price.symbol}
                {this.state.price.amount}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state.currency;
  }

export default connect(mapStateToProps)(ProductPrice);