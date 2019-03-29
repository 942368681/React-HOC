import React, { Component } from 'react';
import { Spin } from 'antd';
import './index.css';

// 属性代理
// export default size => WrappedComponent => class HOC extends Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             show: true
//         };
//     };
//     hide = () => {
//         this.setState({ show: false });
//     }
//     render () {
//         return(
//             <div>
//                 { this.state.show ? <Spin size={size ? size : "default"} /> : null }
//                 <WrappedComponent {...this.props} hideLoading={this.hide} />
//             </div>
//         );
//     }
// }

// 反向继承
export default loadingCheck => WrappedComponent => class HOC extends WrappedComponent {
    render () {
        console.log(this.state);
        console.log(this.props);
        return (
            <Spin tip="加载中" size="large" spinning={loadingCheck(this.state)}>
                {super.render()}
            </Spin>
        );
    }
}