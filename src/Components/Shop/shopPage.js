import React, { Component } from "react";
import Shop from "./shop";
import ProductListItem from "../Product/productListItem";
import { getShopDetails } from "../../actions/shops";
import { connect } from "react-redux";
import LoadingModal from "../LoadingModal";
import { addToOrder } from "../../actions/orders";

class shopDetails extends Component {
  componentDidMount() {
    const { shopId } = this.props.match.params;
    this.props.getShopDetails(shopId);
  }
  handleClick = event => {
    console.log(event, this.props.product);
    this.props.addToOrder(this.props.product);
  };
  render() {
    console.log("SHOPPAGE", this.props);
    const { ShopId } = this.props.match.params;
    console.log(this.props)
    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div>
            {this.props.shops && (
              <div>
                <Shop
                  key={this.props.match.params.id}
                  shop={this.props.shops}
                />

                <div className="container">
                  <div className="row">
                    {this.props.shops.products &&
                      this.props.shops.products.length &&
                      this.props.shops.products.map(product => {
                        return (
                          <div key={product.id} className="col-lg-3 col-md-4">
                            <ProductListItem
                              product={product}
                              detail={false}
                              ShopId={ShopId}
                              handleClick={this.handleClick}
                              addToOrder={this.props.addToOrder}
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shopDetails: state.shopDetails,
    loading: state.appStatus.loading,
    shops: state.shops
  };
};

export default connect(
  mapStateToProps,
  { getShopDetails, addToOrder }
)(shopDetails);
