import React from 'react'
import { Field as FinalFormField } from 'react-final-form'
import { Field as ReakitField, Label, Input } from 'reakit'
import db from '../models'

class EntitySelect extends React.Component {
  state = {
    entities: [],
  }

  componentDidMount() {
    db[this.props.entityName].findAll().then(entities => {
      this.setState({ entities })
    })
  }

  render() {
    const { entities } = this.state
    return (
      <ReakitField>
        <Label>Professional</Label>
        <FinalFormField name={this.props.name}>
          {({ input }) => (
            <Input as="select" {...input}>
              <option>--</option>
              {entities.map(entity => (
                <option key={entity.id} value={entity.id}>
                  {entity.name}
                </option>
              ))}
            </Input>
          )}
        </FinalFormField>
      </ReakitField>
    )
  }
}

export default EntitySelect
