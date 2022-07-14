import React, { useState } from 'react'
import useTimer from './useTimer'
import { useReactMediaRecorder } from 'react-media-recorder'
import { FaMicrophone, FaPause, FaPlay, FaStop } from 'react-icons/fa'
const DurationRecorder = ({
  getFile,
  getUrl,
  containerStyle = {},
  timer = true,
  btnClass = '',
  showPreview = true,
  duration = {
    hours: 0,
    minutes: 0,
    seconds: 30
  }
}) => {
  const {
    startRecording,
    stopRecording,
    status,
    mediaBlobUrl,
    clearBlobUrl,
    pauseRecording,
    resumeRecording
  } = useReactMediaRecorder({ audio: true })
  const [isRecordingPaused, setIsRecordingPaused] = useState(false)

  const upload = async () => {
    let file = await fetch(mediaBlobUrl).then((r) => r.blob())
    getFile(file)
    getUrl(mediaBlobUrl)
  }

  const [hrs, mins, secs] = useTimer({
    hoursMinSecs: { ...duration },
    start: status === 'recording' ? true : false,
    onTimeEnd: upload,
    restart: status === 'idle' ? true : false,
    timer
  })

  const defaultContainer = {
    maxWidth: '350px',
    padding: '10px'
  }

  const innerContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }

  return (
    <div style={{ ...defaultContainer, ...containerStyle }}>
      <div style={{ ...innerContainer }}>
        {status === 'stopped' ? (
          showPreview && <audio src={mediaBlobUrl} controls />
        ) : (
          <span>
            {timer ? (
              <h1>{`${hrs}:${mins}:${secs}`}</h1>
            ) : (
              <h1>{status === 'idle' ? '' : status}</h1>
            )}
          </span>
        )}
        <p>{status === 'idle' && 'Click on the Mic to record your voice'}</p>
        {status === 'idle' ? (
          <FaMicrophone
            fontSize={'30'}
            style={{ cursor: 'pointer' }}
            onClick={startRecording}
          />
        ) : status === 'stopped' ? (
          <div>
            <button className={btnClass} onClick={upload}>
              Upload
            </button>
            <button
              className={btnClass}
              style={{ marginLeft: '20px' }}
              onClick={() => {
                clearBlobUrl()
                setIsRecordingPaused(false)
              }}
              sx={{ marginLeft: '10px' }}
            >
              Clear
            </button>
          </div>
        ) : (
          <div>
            <FaStop
              onClick={stopRecording}
              fontSize={'25'}
              style={{ cursor: 'pointer', marginLeft: '20px' }}
            />
            {isRecordingPaused ? (
              <FaPlay
                fontSize={'25'}
                style={{ cursor: 'pointer', marginLeft: '20px' }}
                onClick={() => {
                  resumeRecording()
                  setIsRecordingPaused(false)
                }}
              />
            ) : (
              <FaPause
                fontSize={'25'}
                style={{ cursor: 'pointer', marginLeft: '20px' }}
                onClick={() => {
                  pauseRecording()
                  setIsRecordingPaused(true)
                }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default DurationRecorder
