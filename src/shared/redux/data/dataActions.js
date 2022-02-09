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
      let isGenesisLocked = await store.getState().blockchain.smartContract.methods.isGenesisLocked().call();
      let totalSupply = await store.getState().blockchain.smartContract.methods.totalSupply().call();
      let price = await store.getState().blockchain.smartContract.methods.price().call();
      let maxMint = await store.getState().blockchain.smartContract.methods.maxMint().call();

      dispatch(
        fetchDataSuccess({
          totalSupply,
          price,
          isGenesisLocked,
          maxMint,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed('Could not load data from contract.'));
    }
  };
};
