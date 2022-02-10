const initialState = {
  loading: false,
  totalSupply: 0,
  cost: 0,
  maxMintAmountPerTx: 20,
  availableSupply: 5,
  error: false,
  errorMsg: '',
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: '',
      };
    case 'CHECK_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        totalSupply: action.payload.totalSupply,
        cost: action.payload.cost,
        maxMintAmountPerTx: action.payload.maxMintAmountPerTx,
        availableSupply: action.payload.availableSupply,
        error: false,
        errorMsg: '',
      };
    case 'CHECK_DATA_FAILED':
      return {
        ...initialState,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
