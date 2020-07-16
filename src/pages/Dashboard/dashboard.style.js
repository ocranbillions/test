import {createUseStyles} from 'react-jss'

export const useStyles = createUseStyles({
    main: {
        width: '100%',
        // position: 'fixed',
        marginTop: `${55 + 20}px`,
        // bottom: 0,
        // marginTop: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        flexGrow: 1,
        borderBottom: '1px solid grey'
    }
})
