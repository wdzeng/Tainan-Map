function toChName(enName) {
    console.log(enName);
    //www.tntb.gov.tw/core/eng/images/Tainan-map.jpg
    
    switch (enName) {
        
        //city
        case 'east': return '東區';
        case 'south': return '南區';
        case 'north': return '北區';
        case 'west-central': return '中西區';
        case 'an-ping': return '安平';
        case 'an-nan': return '安南';
        
        //northern
        case 'houbi': return '後壁';
        case 'baihe': return '白河';
        case 'dongshan': return '東山';
        case 'liouying': return '柳營';
        case 'shinying': return '新營';
        case 'yanshuei': return '鹽水';
        case 'siaying': return '下營';
        case 'lioujia': return '六甲';
        case 'guantian': return '官田';
        case 'shanhua': return '善化';
        case 'danei': return '大內';

        //west-northern
        case 'beimen': return '北門';
        case 'syuejia': return '學甲';
        case 'jiangjun': return '將軍';
        case 'cigu': return '七股';
        case 'jiali': return '佳里';
        case 'madou': return '麻豆';
        case 'shigang': return '西港';
        case 'an-ding': return '安定';

        //east-soutern
        case 'shinshih': return '新市';
        case 'yongkang': return '永康';        
        case 'sinhua': return '新化';
        case 'shanshang': return '山上';
        case 'yujing': return '玉井';
        case 'nansi': return '楠西';
        case 'nanhua': return '南化';
        case 'zuojhen': return '左鎮';
        case 'rende': return '仁德';
        case 'gueiren': return '歸仁';
        case 'guanmiao': return '關廟';
        case 'longci': return '龍崎';
    }

    return enName;
}