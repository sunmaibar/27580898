import styled from 'styled-components'
const Hero = () => {
  return (
    <Wrapper>
      <img className='img' src='/public/DSC06183.JPG' />
      <div className='info'>
        <h4>細節不平凡</h4>
        <p className='desc'>
          念之味排骨是在莊敬路上認真經營超過十年以上的便當店，店內採用上選的食材，米飯更是挑選東部的優質米，與特殊的烹飪方式，米飯粒粒分明，軟糯Q彈，入口即化，香氣四溢，餘味悠長。
          <br />
          我們精心製作便當，安排菜色，每日的菜色都不同，許多客人更是一試成主顧，天天報到，更是附近上班大樓與北醫首選。
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* width: 100%; */
  height: calc(100vh - 5rem);
  /* background: red; */
  position: relative;
  .img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    background: rgba(0, 0, 0, 0.5);
    color: white;

    h4 {
      width: 90%;
      margin-bottom: 2rem;
    }
    .desc {
      width: 90%;
      font-size: 1.3rem;
      line-height: 1.3;
      @media screen and (min-width: 768px) {
        width: 50%;
        line-height: 1.5;
      }
    }
  }
`
export default Hero
