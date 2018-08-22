import moment from 'moment'

const parseHash = desc => desc.replace(/\s+|\//g, '-').toLowerCase()

const parseFiles = (files = {}) => Object.values(files)
  .slice(0, 3)
  .map(({ filename = '', language = '' }) => ({ filename, language }))

const parseGist = ({ id, created_at = '', description = '', files = [] }) => ({
  id,
  timeAgo: moment(created_at).fromNow(),
  description,
  filesLength: Object.keys(files).length,
  files: parseFiles(files),
  hash: parseHash(description)
})

export default (list = []) => list.map(parseGist)
