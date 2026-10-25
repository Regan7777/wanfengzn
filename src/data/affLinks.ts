export interface AffLinkItem {
  id: string;
  name: string;
  path: string;
  targetUrl: string;
  code?: string;
  discountCode?: string;
  backupDomain?: string;
}

export const AFF_LINKS: Record<string, AffLinkItem> = {
  shenxing: {
    id: 'shenxing',
    name: '神行加速',
    path: '/go/shenxing',
    targetUrl: 'https://wuhan01.shenxingaff.com/#/?code=WUQMrgI8',
    code: 'WUQMrgI8',
    discountCode: 'sx0077',
    backupDomain: 'a01vipaff.shenxingaff.com'
  },
  dalaoyun: {
    id: 'dalaoyun',
    name: '大佬云',
    path: '/go/dalaoyun',
    targetUrl: 'https://fugui0077.dalaoyunaff.com/#/?code=1o7gYhTL',
    code: '1o7gYhTL',
    discountCode: 'dly88'
  },
  shandianshu: {
    id: 'shandianshu',
    name: '闪电鼠',
    path: '/go/shandianshu',
    targetUrl: 'https://fugui0077.shandianshuaff.com/#/?code=I2yK9PfK',
    code: 'I2yK9PfK',
    discountCode: 'sd88'
  },
  liulianyun: {
    id: 'liulianyun',
    name: '榴莲云',
    path: '/go/liulianyun',
    targetUrl: 'https://fugui007.liulianyunaff.com/#/?code=Y6A1M1MN',
    code: 'Y6A1M1MN',
    discountCode: 'll88'
  },
  huanqiuti: {
    id: 'huanqiuti',
    name: '环球梯',
    path: '/go/huanqiuti',
    targetUrl: 'https://fugui0077.huanqiutiaff.com/#/?code=rJyQn4xG',
    code: 'rJyQn4xG',
    discountCode: 'HQ66'
  },
  yunjiexian: {
    id: 'yunjiexian',
    name: '云界线',
    path: '/go/yunjiexian',
    targetUrl: 'https://fugui0077.yunjiexianaff.com/#/?code=qA3LF6hW',
    code: 'qA3LF6hW',
    discountCode: 'yjx888'
  },
  edgenova: {
    id: 'edgenova',
    name: '边缘节点',
    path: '/go/edgenova',
    targetUrl: 'https://wep.edgenovaaff.com/#/?code=q1BOP7EV',
    code: 'q1BOP7EV',
    discountCode: 'xk808'
  },
  yuezhianmian: {
    id: 'yuezhianmian',
    name: '月之暗面',
    path: '/go/yuezhianmian',
    targetUrl: 'https://xn--6qrq26ad01c.org/#/register?code=lAzTYBl2',
    code: 'lAzTYBl2'
  },
  feiv: {
    id: 'feiv',
    name: '飞V',
    path: '/go/feiv',
    targetUrl: 'https://fugui.flyvaff.com/#/?code=gxmUajhy',
    code: 'gxmUajhy',
    discountCode: 'fly20'
  },
  lingdongyun: {
    id: 'lingdongyun',
    name: '灵动云',
    path: '/go/lingdongyun',
    targetUrl: 'https://fugui.lingdongaff.com/#/?code=lyfEXnqR',
    code: 'lyfEXnqR'
  }
};

export const getAffPath = (id: string): string => {
  return AFF_LINKS[id]?.path || '#';
};
