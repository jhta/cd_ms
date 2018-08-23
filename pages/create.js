import React from 'react'
import Markdown from 'react-markdown'
import Editor from '../components/Form/Editor'
import Bottom from '../components/Form/Bottom'
import Input from '../components/ui/Input'
import FileList from '../components/Form/FileList'
import withAuth from '../utils/oauth/withAuth'

import { createGist } from '../services/github/api'

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

  handleSubmit = async (event) => {
    event.preventDefault()
    const { files, description } = this.state
    const { token } = this.props

    if (!Object.keys(files).length) return false;
    const data = {
      files,
      description,
      public: true
    }

    try {
      const response = await createGist(data, token)
      window.location.replace('/')
    } catch (e) {
      console.log(e.message)
    }
  }

  render () {
    const { code, filename, description, files } = this.state
    return (
      <div>
        <Input name='description' value={description} handleChange={this.handleChange} />
        <form onSubmit={this.handleSubmit}>
          <Input name='filename' value={filename} handleChange={this.handleChange} />
          <Editor handleChange={this.handleChange} code={code} />
          <div>
            <FileList files={files} />
          </div>
          <Bottom handleAddFile={this.handleAddFile}/>
        </form>
        <style jsx>{`
          form {
            width: 100%;
            position: relative;
          }
          `}</style>
      </div>
    )
  }
}

export default withAuth(Form)
