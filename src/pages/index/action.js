import { api } from 'utils/api';
import { NOOP } from 'utils/index';
import { qnRouter } from 'utils/qnRouter';
import { showConfirmModal } from 'utils/prompt';
/**
* 测试爱用api
*/
export function taoAuthListGet ({ auth_nick, callback = NOOP, errCallback = NOOP }) {
    return new Promise((resolve, reject) => {
        api({
            apiName:'aiyong.item.duplicateitems.taoauthlist.get',
            args: { auth_nick },
            callback: (res) => {
                showConfirmModal({
                    title: '成功',
                    content: JSON.stringify(res),
                });
                callback(JSON.parse(res));
            },
            errCallback: (err) => {
                showConfirmModal({
                    title: '温馨提示',
                    content: 'err' + JSON.stringify(err),
                });
                errCallback(err);
            },
        });
    });
}

// 测试淘系api
export function taobaoItemListGet ({ page_no = 1, page_size = 20, status, extraArgs = {}, callback = NOOP, errCallback = NOOP }) {
    let method = 'taobao.items.onsale.get';
    let banner = '';
    qnRouter({
        api: method,
        params: {
            fields:'nick,type,num_iid,title,num,price',
            page_no:'1',
            page_size:'10',
            banner,
            ...extraArgs,
        },
        callback: res => {
            showConfirmModal({
                title: '成功',
                content: JSON.stringify(res),
            });
            callback(res);
        },
        errCallback: (err) => {
            showConfirmModal({
                title: '温馨提示',
                content: 'err' + JSON.stringify(err),
            });
            errCallback();
        },
    });
}