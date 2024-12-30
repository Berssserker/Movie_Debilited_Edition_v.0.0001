import { Alert } from 'antd'

import { descriptionGenerate } from '../../utils/descriptionGenerate'

export const ErrorMessage = ({ isOnline, ratedListData, generalListData }) => {
  return (
    <Alert
      message="Ooops!"
      description={descriptionGenerate(isOnline, ratedListData, generalListData)}
      type="error"
      showIcon
      style={{ margin: 'auto' }}
    />
  )
}
