import './index.css'

const DisplayTab = props => {
  const {tabDetails, onClickTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClicking = () => {
    onClickTab(tabId)
  }

  const tabClass = isActive ? 'activeTab' : ''

  return (
    <li className="tabBton" onClick={onClicking}>
      <p className={`tabText ${tabClass}`}>{displayText}</p>
    </li>
  )
}

export default DisplayTab
