import React from 'react'

class DynamicallyGeneratedComponents extends React.Component {
  constructor(){
    super()
    this.state = {data: [
      {id: 1, name: "Nguyen Cong Uyen"},
      {id: 2, name: "Pham Danh Vu"},
      {id: 3, name: "Le Van Tuan"},
      {id: 4, name: "Mai Van Trong Nghia"},
      {id: 5, name: "Le Ngoc Son"},
      {id: 6, name: "Nguyen Tien Dung"},
      {id: 7, name: "Ha Thi Phuong Thao"},
      {id: 8, name: "Nguyen Thi Thanh Thao"}
    ]}
  }

  render(){
    let rows = this.state.data.map(person => {
      return <PersonRow key={person.id} data={person} />
    })

    return <table>
      <tbody>{rows}</tbody>
    </table>
  }
}

const PersonRow = (props) => {
  return  <tr>
    <td>{props.data.id}</td>
    <td>{props.data.name}</td>
  </tr>
}

export default DynamicallyGeneratedComponents