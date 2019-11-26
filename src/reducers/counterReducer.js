const initialState = {
  counter:0
}

export const counterItem = (state = initialState, {type,payload}) => {
    switch (type) {
      case 'INCREMENT_COUNTER':
        console.log("incrementRRRRRRRRRRRRR"+ payload);
       return payload;
      case 'DECREMENT_COUNTER':
        return payload;
      default:
        return state;
    }
  }
