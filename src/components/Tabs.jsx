import React from 'react'

function Tabs({ children, buttons, Container }) {
  // const Container = container;
  return (
    <>
        <Container>
            {buttons}
        </Container>
        {children}
    </>
  )
}

export default Tabs