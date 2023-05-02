import React from 'react'
import "./SelectForm.css"

export default function SelectForm({name, onChangeDropdown, optionsList}) {
  return (
    <select defaultValue={optionsList[0].abbreviation} id={name} name={name} onChange={(e) => {onChangeDropdown(e.target.value)} }>
      {
          optionsList.map((option, index) => {
              return <option key={index} value={option["abbreviation"]}>{option["name"]}</option>
          })
      }
    </select>
  )
}
