function todos(state = [], action) {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          {
            text: action.text,
            completed: false
          }
        ]
      case TOGGLE_TODO:
        return state.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      default:
        return state
    }
  }
  ​
  function todoApp(state = initialState, action) {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return Object.assign({}, state, {
          visibilityFilter: action.filter
        })
      case ADD_TODO:
        return Object.assign({}, state, {
          todos: todos(state.todos, action)
        })
      case TOGGLE_TODO:
        return Object.assign({}, state, {
          todos: todos(state.todos, action)
        })
      default:
        return state
    }
  }



  // ///////////////////////////////
  // добавление в редьюсер
  // [ADD_SKILL_TAG_JOB]: (state, action) => {
  //   var copyObj = Object.assign({}, state.config)	
  //   copyObj.skill_tags.push({"id": action.tagId, "name": action.tagName});
  //   return {
  //     ...state,
  //       config: copyObj,
  //       tagInput:""
  //   }
  // },

  // //удаление из редьюсера
  // [REMOVE_SKILL_TAG_JOB]: (state, action) => {
  //   var copyObj = Object.assign({}, state.config)	
  //   copyObj.skill_tags =state.config.skill_tags.filter(item => item.id !== Number(action.tagId));
  //   return {
  //     ...state,
  //       config: copyObj
  //   }
  // },