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
            <Dropdown text='Users' className="dropDownTittle">
                <Dropdown.Menu>
                <Dropdown.Item text='All Users' onClick={() => this.setState({user: [ ...users ], open: true}) }/>
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
                            <Grid.Column computer={2} mobile={4} key={index} className="userColumnStyle">
                                {el}
                            </Grid.Column>
                        ))
                    }
                    </Grid.Row>
                </Grid>
                <Grid>
                    {   !Array.isArray(user) ?
                        <Grid.Row>
                         {
                             Object.keys(user).map((el,index) => (
                            <Grid.Column computer={2} mobile={4} key={index} className="userColumnStyle">
                            {
                                el === 'address' ? user[el].city : 
                                el === 'company' ? user[el].name :
                                user[el]
                            } 
                            </Grid.Column>
                            ))
                        }
                        </Grid.Row> :
                        user.map((userEl,indexEl) => (
                            <Grid.Row key={indexEl}>
                            {
                                Object.keys(userEl).map((el,index) => (
                                <Grid.Column computer={2} mobile={4} key={index} className="userColumnStyle">
                                {
                                    el === 'address' ? userEl[el].city : 
                                    el === 'company' ? userEl[el].name :
                                    userEl[el]
                                } 
                                </Grid.Column>
                                ))
                            }
                            </Grid.Row>
                        ))
                    }
                    
                </Grid>
            </div>
            </TransitionablePortal>
            </div>
        )
    }
}

