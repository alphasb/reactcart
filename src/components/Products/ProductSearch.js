import React, {PureComponent} from 'react';
import { Dropdown } from 'semantic-ui-react';
import { Subject } from 'rxjs';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { searchProduct } from "./ProductSearchAction";
import { selectProduct } from "./ProductActions";

class ProductSearch extends PureComponent {
    componentWillMount(){
        this.onSearch$ = new Subject();
        this.subscription = this.onSearch$
            .debounceTime(500).distinctUntilChanged().subscribe( (el)=>{
                this.props.searchProduct(this.props.products, el);
           });
        this.searchEvent = this.searchEvent.bind(this);
        this.changeEvent = this.changeEvent.bind(this);
    }
    componentWillUnmount(){
        if(this.subscription){
            this.subscription.unsubscribe();
        }
    }

    searchEvent(e) {
        this.onSearch$.next(e.target.value);
    } 

    changeEvent(e, data) {
        this.props.selectProduct(data.value, this.props.products);
    }

    render(){
        return (
            <Dropdown placeholder='Start typing to search by ingredient or description. Example: "white wine" or "cheese" ' 
            fluid search={p=>p} onChange={this.changeEvent}
            selection options={this.props.searchResult}  
            onSearchChange={this.searchEvent} />
        )
    }
};

ProductSearch.propTypes= {
    searchResult: PropTypes.array.isRequired, 
    searchProduct: PropTypes.func.isRequired,
    selectProduct: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired
}
export default connect(state => {return {
    products: state.products,
    searchResult: state.search
}}, {searchProduct, selectProduct} )(ProductSearch);