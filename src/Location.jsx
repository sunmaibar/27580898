import styled from 'styled-components'
import Title from './Title'
const Location = () => {
  return (
    <>
      <Title text='店家資訊' />
      <Wrapper>
        <div className='imageContainer'>
          <img
            className='img'
            src='/public/images/念之為小圖/DSC06189.jpg'
            alt='念之味排骨'
          />
        </div>
        <div className='infoContainer'>
          <p>地址：台北市莊敬路287號</p>
          <p>電話：02-2758-0898</p>
          <p>訂購五個以上即可外送，外送請於11:00前訂購</p>
          <p>營業時間：11:00-14:00 / 17:00-20:00</p>
          <p className='weekend'>每週日公休</p>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  display: flex;
  /* width: 95%; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 3rem;
  gap: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 90%;
  }
  .imageContainer {
    width: 80%;
    flex: 1;
    display: flex;
    height: 300px;
  }
  .img {
    object-fit: cover;
    border-radius: 15px;
    overflow: hidden;
  }
  .infoContainer {
    flex: 1;
    width: 90%;
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 10px;
    color: var(--primary-900);
    font-size: 1.3rem;
    /* background: var(--primary-50); */
    padding: 3rem;
    border-radius: 15px;
  }
  .weekend {
    background: var(--primary-500);
    color: white;
    width: max-content;
    padding: 2px;
  }
`
export default Location
