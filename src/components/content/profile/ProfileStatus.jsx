import React, {Component} from "react";

class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status});
        }
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    };

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value});
    };

    render() {
        return (
            <>
                {this.state.editMode ?
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>
                    : <div onDoubleClick={this.activateEditMode}>
                        Status:<span> {this.props.status}</span>
                    </div>
                }
            </>
        );
    }
}

export default ProfileStatus;