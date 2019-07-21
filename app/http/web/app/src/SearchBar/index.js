import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { withAuth } from '@okta/okta-react';
import styles from  "./styles"


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    async logout(e) {
        e.preventDefault();
        this.props.auth.logout('/');
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" style={{alignItems: 'center'}}>
                    <Toolbar>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search Whatever..."
                                onKeyPress={this.props.onSearch}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>

                        <div className={classes.grow} />
                        <Button onClick={this.props.onSearch} classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }} color="inherit">Search</Button>

                        <div className={classes.grow} />
                        <Button onClick={this.logout} color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withAuth(SearchBar));