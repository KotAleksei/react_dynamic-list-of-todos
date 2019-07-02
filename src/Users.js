import React from 'react';
import { Dropdown, TransitionablePortal, Grid } from 'semantic-ui-react';

export class Users extends React.Component {
    state = {
        user: {},
        open: false
    }
    handleClose = () => this.setState({ open: false })
    render() {
        const { users } = this.props; 
        const { user,open } = this.state;
        const staticHeader = ['id', 'Name', 'Username', 'Email', 'City','Phone', 'Website', 'Company'];
        return (
            <div>
            <Dropdown text='Users' style={{border: '1px solid rgba(34,36,38,.15)', padding: '10px'}}>
                <Dropdown.Menu>
                {
                    users.map((el, index) => (
                        <Dropdown.Item 
                            text={el.name} 
                            key={index}
                            onClick={() => this.setState({user: { ...el }, open: true}) }
                        />
                    ))
                }
                </Dropdown.Menu>
            </Dropdown>
            <TransitionablePortal open={open} onClose={this.handleClose}>

            <div>
                <Grid>
                    <Grid.Row>
                    {
                        staticHeader.map((el,index) => (
                            <Grid.Column computer={2} mobile={4} key={index} style={{border: '1px solid grey', padding: '10px'}}>
                                {el}
                            </Grid.Column>
                        ))
                    }
                    </Grid.Row>
                </Grid>
                <Grid>
                    <Grid.Row>
                    {
                        Object.keys(user).map((el,index) => (
                            <Grid.Column computer={2} mobile={4} key={index} style={{border: '1px solid grey', padding: '10px'}}>
                            {
                                el === 'address' ? user[el].city : 
                                el === 'company' ? user[el].name :
                                user[el]
                            } 
                            </Grid.Column>
                        ))
                    }
                    </Grid.Row>
                </Grid>
            </div>
            </TransitionablePortal>
            </div>
        )
    }
}

