export function getToken(){
    const returnObj = JSON.parse(localStorage.getItem('authHeaders'));
    if (returnObj) {
        return returnObj;
    }
        else return false;
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