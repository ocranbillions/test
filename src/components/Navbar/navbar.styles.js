import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    navbar: {
      // backgroundColor: '#2C2B44',
      // color: '#F1EFFA',
      color: '#6a6e73',
      borderBottom: '1px solid grey',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 20px',
      '& span, & i': {
        padding: '7px 15px'
      }
    },
    leftItems: {
      flex: 1,
      // border: '1px solid blue',

      '& .logo': {
        fontSize: '26px',
      }
    },
    rightItems: {
      // border: '1px solid green',
      display: 'flex',
      justifyContent: 'space-between',

      '& .transact': {
        width: '280px',
        display: 'flex',
        justifyContent: 'space-around'

      },
      '& .others': {
        width: '280px',
        display: 'flex',
        justifyContent: 'space-between',

        '& button': {
          backgroundColor: '#ADB0FB',
          color: '#fff',
          borderRadius: '3px',
          cursor: 'pointer',
          outline: 0,
          border: 0,
          padding: '7px 15px'

        },
        '& .image': {
          paddingRight: 0
        }
      }
    }
})
