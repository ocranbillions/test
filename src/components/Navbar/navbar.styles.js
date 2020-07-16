import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
  navbar: {
    backgroundColor: '#F1EFFA',
    borderRadius: '5px',
    marginTop: '5px',
    height: '55px',
    position: 'fixed',
    color: '#6a6e73',
    border: '2px solid #fff',
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: '0 1.5px 1.5px 0 rgba(0, 0, 0, 0.16)',
    padding: '10px 10px',
    width: `calc(100% - ${40}px)`,
    '& span, & i': {
      padding: '7px 15px'
    }
  },
  leftItems: {
    flex: 1,

    '& .logo': {
      fontSize: '26px',
    }
  },
  rightItems: {
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
        backgroundColor: '#2C2B44',
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
