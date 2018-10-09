import '../../node_modules/toastr/build/toastr.css';
var toastr = require('../../node_modules/toastr/toastr');

export function getToken(){
    const returnObj = JSON.parse(localStorage.getItem('authHeaders'));
    if (returnObj) {
        return returnObj;
    }
        else return false;
}

export function getPostJobsObject(obj){
    // const returnObj = JSON.parse(Object.assign({}, obj));
    console.log ('Урраа обжектос ' , obj);

       

    var requestConfig = {};

    // alert(obj.category.length);

    if (obj.title !== null) requestConfig.title = obj.title;
    if (obj.description !== null) requestConfig.description = obj.description;
    if (obj.category.filter(item => item.selected).lengh !== 0) requestConfig.category = obj.category.filter(item => item.selected).lengh;
    if (obj.commitment !== null) requestConfig.commitment = obj.commitment;
    if (obj.contract_general_notes !== null) requestConfig.contract_general_notes =obj.contract_general_notes;
    if (obj.hourly_price !== null) requestConfig.hourly_price = Number(obj.hourly_price);
    if (obj.level !== null) requestConfig.level = obj.level;
    if (obj.payment !== null) requestConfig.payment = obj.payment;
    if (obj.period !== null) requestConfig.period = Number(obj.period);
    if (obj.period_type !== null) requestConfig.period_type = Number(obj.period_type);
    if (obj.price !== null) requestConfig.price = Number(obj.price);
    if (obj.promotion_description !== null) requestConfig.promotion_description = obj.promotion_description;
    if (obj.promotion_title !== null) requestConfig.promotion_title = obj.promotion_title;
    requestConfig.skill_tags = obj.skill_tags ;
    if (obj.time_type !== null) requestConfig.time_type = obj.time_type;
    return requestConfig;
}


export function getObject(obj){
    const returnObj = JSON.parse(Object.assign({}, obj));
    console.log ('getObjekt ' , returnObj);
        return returnObj;
}

export function returnRequestObj(value) {
    var requestFilter = value.filter(item => {
        if (item.selected === true ) {
            return item;
        };
    });
    var objectId = requestFilter.map(item => {
        if(item.selected === true) return item.id;
    });
    return objectId.join(",");
}

export function returnRequestObjJobs(value) {
    var requestFilter = value.filter(item => {
        if (item.selected === true ) {
            return item;
        };
    });
    var objectId = requestFilter.map(item => {
        if(item.selected === true) return item.request;
    });
    return objectId.join(",");
}

export function getRequest (value) {
    var obj = {
        q:value.q,
        exp: returnRequestObj(value.exp),
        sort: returnRequestObj(value.sort),
        ds: returnRequestObj(value.ds),
        skill: returnRequestObj(value.skill),
        rate: returnRequestObj(value.rate),
        avl: returnRequestObj(value.avl),
        place: returnRequestObj(value.place),
        lang: returnRequestObj(value.lang),
        loc: returnRequestObj(value.loc),
    }	
    return obj;
}

export function getRequestJobs (value, p_from="", p_to="") {
    var obj = {
        q:value.q,
        exp: returnRequestObjJobs(value.exp),
        sort: returnRequestObjJobs(value.sort),
        post: returnRequestObjJobs(value.post),
        prop: returnRequestObjJobs(value.prop),
        payment: returnRequestObjJobs(value.payment),
        p_from: value.p_from,
        p_to: value.p_to,
        bud: returnRequestObjJobs(value.bud),
        avl: returnRequestObjJobs(value.avl),
        place: returnRequestObjJobs(value.place),
        lang: returnRequestObjJobs(value.lang),
        loc: returnRequestObjJobs(value.loc),
    }	
    return obj;
}


export function arrForUpdate (value){
// array convert to api congig format
    function getSkillCats(value) {
        var obj=[];
        value.map((item) => {
            if (item.selected == true) obj.push(item.id);
        })
        return obj;
    }

    var obj=[];
    value.map((item) => {
        obj.push({
            id:item.id,
            skill_categories: getSkillCats(item.skill_categories),
            skill_tags: item.skill_tags
        })
    });
    return obj;
}

export function successMessage(value) {
    toastr.success(value);
}
export function warningMessage(value) {
    toastr.warning(value);
}