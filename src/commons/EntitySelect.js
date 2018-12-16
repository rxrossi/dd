import React from "react"
import { Field } from "react-final-form"
import db from "../models"

class EntitySelect extends React.Component {
  state = {
    entities: []
  }

  componentDidMount() {
    db[this.props.entityName].findAll().then(entities => {
      this.setState({ entities })
    })
  }

  render() {
    const { entities } = this.state
    return (
      <div>
        <label>Professional</label>
        <Field name={this.props.name} component="select">
          <option>--</option>
          {entities.map(entity => (
            <option key={entity.id} value={entity.id}>
              {entity.name}
            </option>
          ))}
        </Field>
      </div>
    )
  }
}

export default EntitySelect
