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

export function getRequestJobs (value) {
    var obj = {
        q:value.q,
        exp: returnRequestObj(value.exp),
        post: returnRequestObj(value.post),
        prop: returnRequestObj(value.prop),
        payment: returnRequestObj(value.payment),
        bud: returnRequestObj(value.bud),
        avl: returnRequestObj(value.avl),
        place: returnRequestObj(value.place),
        lang: returnRequestObj(value.lang),
        loc: returnRequestObj(value.loc),
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