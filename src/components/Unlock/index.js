// Write your code here

import {useState} from 'react'

import {BgContainer, LockImage, Text, Button} from './styledComponents'

const Unlock = () => {
  const [isLocked, toggleLock] = useState(true)

  const onClickLockButton = () => {
    toggleLock(prev => !prev)
  }

  const imageUrl = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altText = isLocked ? 'lock' : 'unlock'
  const textContent = isLocked
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'

  return (
    <BgContainer>
      <LockImage src={imageUrl} alt={altText} />
      <Text>{textContent}</Text>
      <Button type="button" onClick={onClickLockButton}>
        {isLocked ? 'Unlock' : 'Lock'}
      </Button>
    </BgContainer>
  )
}

export default Unlock
