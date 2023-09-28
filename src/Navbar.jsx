import styled from 'styled-components'
const Navbar = () => {
  return (
    <Wrapper>
      <div className='center'>
        <div>
          <img className='logo' src='/public/logo.png' alt='念之味' />
        </div>
        <div className='info'>
          <div className='tel'>
            訂購電話：<span>02-2758-0898</span>
          </div>
          {/* <div>地址：台北市莊敬路287號</div> */}
          <div className='worning'>五個可外送，請於11點前來電</div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--primary-500);
  height: 5rem;
  display: flex;
  align-items: center;
  .logo {
    height: 50px;
    align-items: center;
  }

  .center {
    width: 95%;
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    margin: 0 auto;
  }
  .info {
    color: white;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    /* align-items: center; */
    /* text-align: center; */
    .tel {
      /* font-weight: bold; */
    }
    .worning {
      font-size: 0.6rem;
    }
  }
`

export default Navbar
