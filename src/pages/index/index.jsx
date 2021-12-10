import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import './index.scss';
import { taoAuthListGet, taobaoItemListGet } from './action';
import { events } from 'public/utils/eventManager';

@connect((store) => {
    return store.indexReducer;
 })
class ItemIndex extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    config = { navigationBarTitleText: "视频首页" };

    componentDidMount () {
        events.userInfoCallback.subscribe(() => {
            taoAuthListGet({ });
            // taobaoItemListGet({  })
        })
    }

    render () {
        const { isOpen } = this.state;
        const { name } = this.props;
        return (
            <View>
                商品首页
                {
                    isOpen ? (<View>aaaa</View>) : (<View>bbbb</View>)
                }
                姓名：
                { name }
            </View>
        )
    }
}
export default ItemIndex;