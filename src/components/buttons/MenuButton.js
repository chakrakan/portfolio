import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

export default function MenuButton(props) {
  const { item } = props
  return (
    <OutboundLink
      href={item.link}
      onClick={props.onClick}
      target="_blank"
      rel="noreferrer"
    >
      <MenuItem title={item.title}>
        <img src={item.icon} alt={item.title} height="25px" width="25px" />
        {item.title}
      </MenuItem>
    </OutboundLink>
  )
}

const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: ${props => (props.title ? '5px' : '0px')};
  align-items: center;
  padding: 5px;
  margin-left: -2px;
  transition: 0.5s ease-out;
  border-radius: 10px;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`
