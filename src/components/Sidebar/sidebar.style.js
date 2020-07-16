import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
	sidebar: {
		// width: '400px',
		// marginRight: '20px',
		backgroundColor: '#2C2B44',
		border: '2px solid #fff',
		borderRadius: '5px',
		color: '#fff',
		padding: '10px 20px',
		// marginLeft: '20px',
		// height:  '100vh',
		height:  `calc(100vh - ${55}px)`,
    position: 'fixed',
    width: '250px',

		// display: 'flex',
		// flexDirection: 'column',
		// justifyContent: 'space-around',

		'& .title': {borderBottom: '1px solid grey'},
		
		// '& p': {margin: 0},
		
		'& .div_two': {
			backgroundColor: 'blue',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around'
		}
	}
})
