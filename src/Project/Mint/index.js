import { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'shared/redux/blockchain/blockchainActions';
import { fetchData } from 'shared/redux/data/dataActions';
import styled, { keyframes } from 'styled-components';
import star from 'App/assets/images/star.png';
import genesisMintLogo from 'App/assets/images/genesis-mint-logo.png';
import buttonClick from 'App/assets/images/mint-button-click.png';
import buttonChange from 'App/assets/images/mint-button-change.png';
import boxBase from 'App/assets/images/box-base2.png';
import boxLid from 'App/assets/images/box-lid2.png';
import boxEyes from 'App/assets/images/box-eyes.png';
import { font } from 'shared/styles';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const truncate = (input, len) => (input.length > len ? `${input.substring(0, len)}...` : input);

const Mint = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector(state => state.blockchain);
  const data = useSelector(state => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [isSupplyLimited, setIsSupplyLimited] = useState(false);
  const [feedback, setFeedback] = useState(``);
  const [claimedNft, setClaimedNft] = useState(false);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: '',
    SCAN_LINK: '',
    NETWORK: {
      NAME: '',
      SYMBOL: '',
      ID: 0,
    },
    NFT_NAME: '',
    SYMBOL: '',
    MAX_SUPPLY: 0,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: 'Opeansea',
    MARKETPLACE_LINK: '',
    SHOW_BACKGROUND: false,
  });

  const checkButton = useCallback(() => {
    let maxMint = data.maxMintAmountPerTx;
    let remainingSupply = data.availableSupply - data.totalSupply;

    if (remainingSupply <= maxMint) {
      if (remainingSupply < mintAmount) setMintAmount(remainingSupply);
    } else {
      if (mintAmount > maxMint) {
        setMintAmount(20);
      }
    }

    if (remainingSupply === 0) setIsSupplyLimited(true);
  }, [mintAmount, data.totalSupply, data.availableSupply, data.maxMintAmountPerTx]);

  useEffect(() => {
    checkButton();
  }, [mintAmount, checkButton]);

  useEffect(() => {
    checkButton();
  }, [data.totalSupply, checkButton]);

  const incrementMintAmount = () => {
    setMintAmount(mintAmount + 1);
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch('/config/config.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  const claimNFTs = () => {
    // let cost = CONFIG.WEI_COST;
    let cost = data.cost ? data.cost : CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log(`Cost: ${totalCostWei / 1000000000000000000} ETH`);
    console.log(`Gas limit: ${totalGasLimit} GWEI`);
    setFeedback(``);
    setClaimingNft(true);
    setClaimedNft(false);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once('error', err => {
        console.log(err);
        toast.error('Sorry, something went wrong. Please try again.');
        // setFeedback('Sorry, something went wrong please try again later.');
        setClaimingNft(false);
      })
      .then(receipt => {
        console.log(receipt);
        toast.success(`${mintAmount > 1 ? mintAmount + ' Genesis Stanleys successfully minted!' : 'Genesis Stanley successfully minted!'}`);
        // setFeedback(`WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`);
        setClaimingNft(false);
        setClaimedNft(true);
        dispatch(fetchData(blockchain.account));
      });
  };

  return (
    <Wrapper>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      <Toaster position="top-right" reverseOrder={false} />
      <Stars>
        <StarPng duration={1.2} animation={Pulse1} left={'10%'} bottom={'20%'} src={star} alt="" />
        <StarPng duration={1.5} animation={Pulse1} left={'40%'} bottom={'40%'} src={star} alt="" />
        <StarPng duration={1.6} animation={Pulse2} left={'60%'} bottom={'60%'} src={star} alt="" />
        <StarPng duration={2.5} animation={Pulse1} left={'80%'} bottom={'30%'} src={star} alt="" />
        <StarPng duration={2} animation={Pulse1} left={'30%'} bottom={'0%'} src={star} alt="" />
        <StarPng duration={1} animation={Pulse0} left={'90%'} bottom={'0%'} src={star} alt="" />
      </Stars>
      <Container>
        <Link to={`/`}>
          <Title src={genesisMintLogo} alt="" />
        </Link>
        <PresentContainer>
          <Box claimedNft={claimedNft} src={boxBase} alt="" />
          <Eyes claimedNft={claimedNft} src={boxEyes} alt="" />
          <Lid claimedNft={claimedNft} isBusy={claimingNft} src={boxLid} alt="" />
        </PresentContainer>

        {/* <div>{truncate(CONFIG.CONTRACT_ADDRESS, 15)}</div>
        <div>
          1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST} {CONFIG.NETWORK.SYMBOL}.
        </div> */}
        {blockchain.account === '' || blockchain.smartContract === null ? (
          <MiniWrapper>
            {/* <div>Connect to the {CONFIG.NETWORK.NAME} network</div> */}

            <ButtonWrapper isBusy={claimingNft}>
              <ButtonBase
                onClick={e => {
                  e.preventDefault();
                  dispatch(connect());
                  getData();
                }}
              >
                <ButtonText>Connect Wallet</ButtonText>
              </ButtonBase>
            </ButtonWrapper>
            {blockchain.errorMsg !== '' ? toast.error(`${blockchain.errorMsg}`) : ''}
          </MiniWrapper>
        ) : (
          <MiniWrapper>
            <ButtonContainer isHidden={isSupplyLimited} isBusy={claimingNft}>
              <ButtonWrapperChange isBusy={claimingNft}>
                <ButtonChangeBase disabled={claimingNft ? 1 : 0} isBusy={claimingNft} onClick={() => decrementMintAmount()}>
                  <ButtonNumber>-</ButtonNumber>
                </ButtonChangeBase>
              </ButtonWrapperChange>
              <ButtonWrapper isBusy={claimingNft}>
                <ButtonBase
                  disabled={claimingNft ? 1 : 0}
                  onClick={e => {
                    e.preventDefault();
                    claimNFTs();
                    getData();
                  }}
                >
                  <ButtonText>
                    {claimingNft ? (
                      <>
                        Processing&nbsp;<TextEllipses>...</TextEllipses>
                      </>
                    ) : (
                      `Mint ${mintAmount} NFT`
                    )}
                  </ButtonText>
                </ButtonBase>
              </ButtonWrapper>
              <ButtonWrapperChange isBusy={claimingNft}>
                <ButtonChangeBase disabled={claimingNft ? 1 : 0} isBusy={claimingNft} onClick={() => incrementMintAmount()}>
                  <ButtonNumber>+</ButtonNumber>
                </ButtonChangeBase>
              </ButtonWrapperChange>
            </ButtonContainer>

            <TotalSupply isTriggered={!blockchain.account === '' && !blockchain.smartContract === null}>
              Supply: {data.totalSupply} / {data.availableSupply}
            </TotalSupply>
            <Feedback>{feedback}</Feedback>
          </MiniWrapper>
        )}
        {/* <div>
          Please make sure you are connected to the right network ({CONFIG.NETWORK.NAME} Mainnet) and the correct address. Please note: Once
          you make the purchase, you cannot undo this action.
        </div>
        <div>
          We have set the gas limit to {CONFIG.GAS_LIMIT} for the contract to successfully mint your NFT. We recommend that you don't lower
          the gas limit.
        </div> */}
      </Container>
    </Wrapper>
  );
};

const ButtonContainer = styled.div`
  ${props => (props.isHidden ? 'display: none;' : 'display: flex;')}
  column-gap: 8px;
  ${props => (props.isBusy ? 'filter: grayscale(100%);transform: scale(0.99);' : '')}

  transition: all 0.35s cubic-bezier(0.26, 0.67, 0.48, 0.91);
`;

const FeedbackPosition = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const EyesAnimation = keyframes`
  0% {
    visibility: visible;
  }

  10% {
    visibility: hidden;
  }

  12% {
    visibility: visible;
  }

  80% {
    visibility: hidden;

  }

  81% {
    visibility: visible;
  }
`;

const Eyes = styled.img`
  position: absolute;
  ${props => (props.isVisible ? 'display: flex;' : 'display:none;')}
  top: 200px;
  left: 190px;
  animation: ${EyesAnimation} steps(2, end) 8000ms infinite;
`;

const BoxShake = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }

  94% {
    transform: translate(0, 0) rotate(0deg);
  }

  95% {
    transform: translate(-2px, -3px) rotate(2deg);
  }

  100% {
    transform: translate(3px, -1px) rotate(-3deg);
  }
`;

const LidShake = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }

  94% {
    transform: translate(0, 0) rotate(0deg);
  }

  95% {
    transform: translate(-2px, -11px);
  }

  100% {
    transform: translate(2px, -1px) rotate(-3deg);
  }
`;

const LidOpen = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }

  39% {
    transform: translateY(0) rotate(0deg);
  }

  48% {
    transform: translateY(-15px) rotate(1deg) translateX(1px);
  }

  63%{
    transform: translateY(-43px) rotate(2deg) translateX(2px);
  }

  100% {
    transform: translateY(-43px) rotate(2deg) translateX(2px);
  }
`;

const Lid = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${props => (props.claimedNft ? LidOpen : LidShake)} steps(2, end) ${props => (props.isBusy ? '3500ms' : '5000ms')}
    ${props => (props.claimedNft ? 1 : 'infinite')};
  transition: transform 0.6s cubic-bezier(0.26, 0.67, 0.48, 0.91);
  animation-fill-mode: forwards;
`;

const Box = styled.img`
  position: absolute;
  top: 210px;
  left: 9px;
  animation: ${BoxShake} steps(2, end) 5000ms infinite;
  ${props => (props.claimedNft ? `animation: null;` : ``)}
`;

const PresentContainer = styled.div`
  position: relative;
  height: 450px;
  width: 475px;
`;

const ButtonWrapperChange = styled.div`
  position: relative;
  height: 85px;

  button > div {
    ${props => (props.isBusy ? 'transform: translate(0);' : '')};
  }

  &:hover {
    button > div {
      transform: translateY(-2px);
      ${props => (props.isBusy ? 'transform: translate(0);' : '')};
    }
  }

  transition: transform 0.05s ease-in-out;
`;

const ButtonWrapper = styled.div`
  position: relative;
  height: 85px;

  button > div {
    ${props => (props.isBusy ? 'transform: translate(4px, 6px);' : '')};
  }

  &:hover {
    button > div {
      transform: translateY(-2px);
      ${props => (props.isBusy ? 'transform: translate(4px, 6px);' : '')};
    }
  }

  transition: transform 0.05s ease-in-out;
`;

const MiniWrapper = styled.div`
  display: flex;
  row-gap: 25px;
  flex-direction: column;
  column-gap: 8px;
  align-items: center;
`;

const AnimateTotalSupply = keyframes`
  0% {
    opacity: 0;
    transform: translateY(3px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TotalSupply = styled.div`
  font-size: 26px;
  opacity: 0;
  color: #fff;
  font-weight: 400;

  animation: ${AnimateTotalSupply} 0.6s 2.1s cubic-bezier(0.26, 0.67, 0.48, 0.91);
  animation-fill-mode: forwards;
`;

const Feedback = styled.div`
  color: #95b9ea;
  font-size: 22px;
`;

const AnimateEllipses = keyframes`
  10% {
    width: 0;    
  }

  100% {
    width: 0.9em;    
  }
`;

const TextEllipses = styled.div`
  position: absolute;
  letter-spacing: 1px;
  left: 100%;
  overflow: hidden;
  vertical-align: bottom;
  animation: ${AnimateEllipses} steps(4, end) 3000ms infinite;
  animation-fill-mode: none;
  width: 0px;
`;

const ButtonText = styled.div`
  position: absolute;
  color: #fff;
  ${font.header};
  font-size: 26px;
  display: flex;
`;

const ButtonNumber = styled.div`
  position: absolute;
  color: #fff;
  font-size: 30px;
  display: flex;
`;

// &:after {
//   content: '...'; /* ascii code for the ellipsis character */

//   ${props => (props.isBusy ? 'display: inline-block;' : 'display: none;')}
//   overflow: hidden;
//   vertical-align: bottom;
//   animation: ${AnimateEllipses} steps(4, end) 900ms infinite;
//   width: 0px;
// }

const TitleButton = keyframes`
  0% {
    transform: translateY(2px);
    opacity: 0;
  }

  30% {

    transform: translateY(1px);
  }

  100% {
    opacity: 1;
    transform: scale(1);
    transform: translateY(0);
  }
`;

const ButtonChangeBase = styled.button`
  position: relative;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #000;
  width: 68px;
  height: 85px;
  background: url(${buttonChange});
  transition: transform 0.05s ease-in-out;
  animation: ${TitleButton} 0.6s 1.5s cubic-bezier(0.26, 0.67, 0.48, 0.91);

  animation-fill-mode: forwards;

  &:disabled {
    cursor: default;
  }

  &:hover {
    ${props => (props.isBusy ? 'background-position-y: 85px;' : 'background-position-y: 170px;')};
    ${props => props.isBusy && 'background-position-y: 0;'}
  }

  &:active {
    background-position-y: 85px;
    ${props => props.isBusy && 'background-position-y: 0;'}
  }

  ${props => (props.isBusy ? 'background-position-y: 0;' : '')}
`;

const TitleButtonOut = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }


  100% {
    opacity: 0;
    transform: scale(0.8);
  }
`;

const ButtonBase = styled.button`
  position: relative;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #000;
  width: 266px;
  height: 85px;
  background: url(${buttonClick});
  transition: transform 0.05s ease-in-out;
  animation: ${TitleButton} 0.6s 1.5s cubic-bezier(0.26, 0.67, 0.48, 0.91);

  animation-fill-mode: forwards;

  &:disabled {
    cursor: default;
  }

  &:hover {
    ${props => (props.isBusy ? 'background-position-y: 85px;' : 'background-position-y: 170px')};
  }

  &:active {
    ${props => (props.isBusy ? 'background-position-y: 85px;' : 'background-position-y: 255px;')};
  }

  ${props => (props.isBusy ? 'background-position-y: 85px;' : '')};
`;

const TitleAnimat = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Title = styled.img`
  opacity: 0;
  animation: ${TitleAnimat} 0.9s 0.4s cubic-bezier(0.26, 0.67, 0.48, 0.91);
  animation-fill-mode: forwards;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 100px;
`;

const Container = styled.div`
  width: 800px;
  row-gap: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Pulse0 = keyframes`
0% { opacity: 0.3; transform: scale(0.8); }
50% { opacity: 0.8; transform: scale(0.9);}
100% { opacity: 0.3; transform: scale(0.7);}
`;

const Pulse1 = keyframes`
0% { opacity: 0.5; transform: scale(0.5); }
50% { opacity: 0.9; transform: scale(0.7);}
100% { opacity: 0.5; transform: scale(0.5);}
`;

const Pulse2 = keyframes`
0% { opacity: 0.2; transform: scale(0); }
50% { opacity: 0.6; transform: scale(0.5);}
100% { opacity: 0.3; transform: scale(0);}
`;

const StarPng = styled.img`
  position: absolute;
  width: auto;
  height: auto;
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  animation: ${props => props.animation} ${props => props.duration}s steps(1, end) infinite;
`;

const StarsAnimate = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  

  100% {
    opacity: 1;
    transform: translateY(0);
  }

`;

const Stars = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  bottom: 0;
  opacity: 0;
  animation: ${StarsAnimate} 3s 1s cubic-bezier(0.26, 0.67, 0.48, 0.91);
  animation-fill-mode: forwards;
`;

export default Mint;
