import styled from 'styled-components'

export const BackDrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 990;
`

export const Modal = styled.div`
  position: fixed;
  top: 20%;
  left: calc(50% - 350px);
  align-items: center;
  padding-top: 100px;
  width: 700px;
  height: 70vh;
  background-color: rgb(236, 236, 236);
  border-radius: 10px;
  z-index: 999;
  min-height: 10em;
  padding: 25px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  overflow-y: scroll;
  @media (max-width: 600px) {
    width: 280px;
  }
`
export const ModalTitle = styled.h2`
  font-size: 1em;
  font-weight: bold;
  color: #000;
  margin-bottom: 0.5em;
  text-align: center;
  margin-bottom: 2em;
  margin-top: 2em;
  `

export const ModalIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: var(--barbecue);
  border-radius:50%;
  padding: 10px;
  color: white;
  cursor: pointer;
  top: 82%;
  left: 97%;
  position: fixed;
  transition: all;
  z-index: 1;
  :hover { box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75); }
  `

export const ButtonSelect = styled.button`
  width:50%;
  height: 40px;
  background-color:${(props) => (props.isButtonSelected ? "green" : "#1e7686")};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 0.8em;
  font-weight: bold;
  cursor: pointer;
  transition: all;
  margin-bottom: 10px;
 
  left:50%;
  :hover { box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75); }
  `
export const ButtonSelectAll = styled.button`
  width:60px;
  height: 60px;
  background-color:${(props) => (props.isButtonSelected ? "var(--amarillo)" : "#ec671a")};
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 0.8em;
  font-weight: bold;
  cursor: pointer;
  transition: all;
  margin-bottom: 10px;
  left:50%;
  :hover { box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75); }
  `



export const ButtonConfirm = styled.button`
  width:30%;
  height: 40px;
  background-color: var(--green);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: all;
  margin-bottom: 2rem;
  margin-top: 0.2rem;
  align-items: center;
  :hover { box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75); }
  `

export const ContendButton = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  margin-bottom:0.2em
  `

export const ImgModal = styled.img`
  width: 30%;
  height: auto;
  border-radius:50%;
  margin-bottom: 2em;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  `
