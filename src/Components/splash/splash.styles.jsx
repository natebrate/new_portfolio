import styled from 'styled-components';

export const Body = styled.div`
  margin: 0;
  overflow: hidden;
`

export const SplashScreen = styled.div `
  padding: 300px 400px 400px;
  box-sizing: border-box;
  background-color: #23201F;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Title = styled.div `
  font-size: 100px;
  font-family: Roboto, sans-serif;
  font-weight: 800;
  color: #056FAC;
  word-wrap: break-word;
  --animation: animate__fadeInUp; /* referring directly to the animation's @keyframe declaration */
  --animate-duration: 2s;
`
