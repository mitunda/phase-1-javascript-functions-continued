const saturdayFun = function(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  const wrapAdjective = function(highlight = "*") {
    return function(adjective) {
      return `You are ${highlight}${adjective}${highlight}!`;
    }
  }

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }