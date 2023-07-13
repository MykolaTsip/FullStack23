import { connect } from "react-redux"


const Logger = ({myCount}) => (<div>I show you: {myCount}</div>);

const mapStateToProps = (state) => ({
    myCount: state.count
});

export default connect(mapStateToProps)(Logger)