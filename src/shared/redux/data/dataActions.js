// log
import store from 'shared/redux/store';

const fetchDataRequest = () => {
  return {
    type: 'CHECK_DATA_REQUEST',
  };
};

const fetchDataSuccess = payload => {
  return {
    type: 'CHECK_DATA_SUCCESS',
    payload: payload,
  };
};

const fetchDataFailed = payload => {
  return {
    type: 'CHECK_DATA_FAILED',
    payload: payload,
  };
};

export const fetchData = () => {
  return async dispatch => {
    dispatch(fetchDataRequest());
    try {
      let availableSupply = await store.getState().blockchain.smartContract.methods.availableSupply().call();
      let totalSupply = await store.getState().blockchain.smartContract.methods.totalSupply().call();
      let cost = await store.getState().blockchain.smartContract.methods.cost().call();
      let maxMintAmountPerTx = await store.getState().blockchain.smartContract.methods.maxMintAmountPerTx().call();

      dispatch(
        fetchDataSuccess({
          availableSupply,
          totalSupply,
          cost,
          maxMintAmountPerTx,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed('Could not load data from contract.'));
    }
  };
};
