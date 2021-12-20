import React from 'react'
import styled from 'styled-components'
import { ReactLogo } from './graphic'

const C = styled.div`
  position: absolute;
  opacity: 0.2;
`

const Spin = styled.div`
  animation:spin 12s linear infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`

const X = styled.div`
  animation: x 30s linear infinite alternate;
  width: 100px;
  height: 100px;

  @keyframes x {
    100% {
      transform: translateX( calc(100vw - 100px) )
    }
  }
`

const Y = styled.div`
  width: 100px;
  height: 100px;
  animation: y 19s linear infinite alternate;

  @keyframes y {
    100% {
      transform: translateY( calc(100vh - 100px) )
    }
  }
`

const FloatingLogo = () => (
  <C>
        <X>
          <Y>
            <Spin>
              <ReactLogo />
            </Spin>
          </Y>
        </X>
      </C>
)

export default FloatingLogo