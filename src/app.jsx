import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux';
import Index from './reducers';
import cloud from '@tbmp/mp-cloud-sdk';
import configStore from './store';
import { userInfoInit } from 'utils/userinfo';
import { settingManagerInit } from 'utils/settings';
import './app.scss'

cloud.init({
    env: 'online'
});

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();
class App extends Component {
    store = store;
    config = {
        pages: [
            'pages/index/index',
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: '爱用视频',
            navigationBarTextStyle: 'black',
            navigationBarForceEnable: true,
        }
    }
    cloud = cloud;
    platform = 'mb';
    Settings = settingManagerInit(); // 初始配置

    componentDidMount() {
        // 用户信息初始化
        userInfoInit();
    }

    componentDidShow() { }

    componentDidHide() { }

    componentDidCatchError() { }

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return (
            <Provider store={store}>
                <Index />
            </Provider>
        )
    }
}

Taro.render(<App />, document.getElementById('app'))
