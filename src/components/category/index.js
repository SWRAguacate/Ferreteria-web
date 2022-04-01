import React  from "react"
import { Button, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot, faTv, faCar, faBriefcase } from '@fortawesome/free-solid-svg-icons'

const icons = {
  'frutas': faCarrot,
  'electrodomesticos': faTv,
  'autos': faCar,
  'farmacia': faBriefcase
}

export const Category = ({
  iconName = 'frutas',
  color = 'success',
  text = 'fruits',
  path = 'https://www.google.com'
}) => (
  <col><h1><Button href ={path} variant={color}>{text}<FontAwesomeIcon icon={icons[iconName]}/></Button></h1></col>
);
