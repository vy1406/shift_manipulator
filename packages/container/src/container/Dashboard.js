import React,  { lazy, Suspense } from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import _ from 'lodash';
import Progress from '../components/Progress';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const MessagesLazy = lazy(() => import('../components/MessagesApp'))
const ShiftsLazy = lazy(() => import('../components/ShiftsApp'))
const UsersLazy = lazy(() => import('../components/UsersApp'))

const generateClassName =  createGenerateClassName({
    productionPrefix: 'db',
})


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    tabWrapper: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 'calc(100vh - 64px)',
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));
  
export default ( ) => { 

    const tabs = [
            {
            component: <UsersLazy />,
            label: 'Users'
            },
            {
            component: <ShiftsLazy />,
            label: 'Shifts'
            },
            {
            component: <MessagesLazy />,
            label: 'Messages'
            }
        ]     

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    return (
        <div>
            {/* <Suspense fallback={<Progress />}>
                       <MessagesLazy />
            </Suspense>
            <Suspense fallback={<Progress />}>
                       <ShiftsLazy />
            </Suspense>
            <Suspense fallback={<Progress />}>
                       <UsersLazy />
            </Suspense> */}

            <div className={classes.tabWrapper}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
            {_.map(tabs, (tab, index) => <Tab label={tab.label} {...a11yProps(index)} />)}
            </Tabs>
                {_.map(tabs, (tab, index) =>
                <TabPanel value={value} index={index}>
                    <Suspense key={index} fallback={<div>loading...</div>}>
                            {tab.component}
                    </Suspense>
                </TabPanel>)
            }

            </div>
        </div>
    )
}