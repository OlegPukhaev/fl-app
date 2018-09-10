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

export function getData(item, index){
   var categories = [{
        id:1,
        skill_categories:[8, 9, 10],
        skill_tags:[{
            id: 2412,
            name: "Translation English Yiddish"
        }]
    }]
}


export function getSkillCats(value) {
    var obj=[];
    value.map((item) => {
        if (item.selected == true) obj.push(item.id);
    })
    return obj;
}

export function arrForUpdate (value){
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