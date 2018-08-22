import moment from 'moment'
import { pick as _pick } from 'lodash'

const fileParams = [
  'content',
  'language',
  'type',
  'filename'
]

const parseFiles = (files = {}) => Object.values(files)
  .map(file => _pick(file, fileParams))

const parseOwner = (owner = {}) => ({
  url: owner.html_url,
  id: owner.id,
  user: owner.login,
  avatar_url: owner.avatar_url
})

export default ({ description, created_at, comments, files, owner, html_url }) => ({
  description,
  timeAgo: moment(created_at).fromNow(),
  comments,
  url: html_url,
  files: parseFiles(files),
  owner: parseOwner(owner)
  })
