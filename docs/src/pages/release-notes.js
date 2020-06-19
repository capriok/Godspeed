import React from 'react'
import ReleaseNotes from '../components/layouts/release-notes'
import { ReleaseNotes as MarkDown } from 'godspeed'

const ReleaseNotesPage = () => {
  return (
    <ReleaseNotes>
      <MarkDown />
    </ReleaseNotes>
  )
}

export default ReleaseNotesPage