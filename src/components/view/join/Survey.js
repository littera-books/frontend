import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { listQuestion } from '../../../reducers/reducer.question';

// Styled
import StyledBase from '../../../styled/Base';

class Survey extends React.Component {
  componentDidMount() {
    const { getListQuestion } = this.props;
    getListQuestion();
  }

  renderQuestionItems() {
    const { questionItems } = this.props;
    return _.map(questionItems, (item) => {
      const index = _.findIndex(questionItems, o => o.id === item.id) + 1;
      return (
        <div key={item.id} style={{ marginBottom: '1rem' }}>
          <h4>{`${index}. ${item.title}`}</h4>
          <form action="post">
            {_.map(item.selection_items, selection => (
              <div key={selection.id} style={{ textIndent: '1.1rem' }}>
                <p>{selection.select}</p>
              </div>
            ))}
          </form>
        </div>
      );
    });
  }

  render() {
    return (
      <StyledBase.FlexWrapper>
        <StyledBase.ColumnWrapper>
          {this.renderQuestionItems()}
        </StyledBase.ColumnWrapper>
      </StyledBase.FlexWrapper>
    );
  }
}

Survey.propTypes = {
  getListQuestion: PropTypes.func.isRequired,
  questionItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  questionItems: state.question.items,
});

const mapDispatchToProps = dispatch => ({
  getListQuestion: () => dispatch(listQuestion()),
});

export default reduxForm({
  form: 'SelectSurveyForm',
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Survey),
);
