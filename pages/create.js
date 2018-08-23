import React from 'react'
import Markdown from 'react-markdown'
import Editor from '../components/Form/Editor'
import FileList from '../components/Form/FileList'

// @TODO: add validations
class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      code: '# Home made markdown editor :D!',
      filename: '',
      description: '',
      files: {}
    }
  }

  handleChange = event => {
    event.preventDefault()
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  handleAddFile = event => {
    event.preventDefault()
    const { filename, code, files } = this.state
    if (filename) {
      const newFiles = {
        ...files,
        [filename]: {
          content: code
        }
      }
      this.setState({
        files: newFiles,
        code: '',
        filename: ''
      })
    }
 }

  handleSubmit = event => {
    event.preventDefault()
  }

  render () {
    const { code, filename, description, files } = this.state
    return (
      <div>
        <p>Description: </p>
        <input
            type='text'
            name='description'
            value={description}
            placeholder='my nice gist'
            onChange={this.handleChange}
          />
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='filename'
            value={filename}
            placeholder='name.md'
            onChange={this.handleChange}
          />
          <Editor handleChange={this.handleChange} code={code} />
          <div>
            <FileList files={files} />
          </div>
          <div>
            <button>Save!</button>
            <a href='#' onClick={this.handleAddFile}>add other file</a>
            <style jsx>{`
              div {
                display: flex;
              }
              `}</style>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
