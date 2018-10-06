import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { listQuestion } from '../../../reducers/reducer.question';

// Styled
import StyledBase from '../../../styled/Base';

class Survey extends React.Component {
  componentDidMount() {
    const { getListQuestion } = this.props;
    getListQuestion();
  }

  onSubmit(payload) {
    console.log(payload);
    console.log(this);
  }

  renderQuestionItems() {
    const { questionItems } = this.props;
    return _.map(questionItems, (item) => {
      const index = _.findIndex(questionItems, o => o.id === item.id) + 1;
      return (
        <div key={item.id} style={{ marginBottom: '1rem' }}>
          <fieldset style={{ border: 'none' }}>
            <legend>{`${index}. ${item.title}`}</legend>
            {_.map(item.selection_items, selection => (
              <div key={selection.id} style={{ textIndent: '1rem' }}>
                <label htmlFor={`question-${item.id}`}>
                  <Field
                    name={`question-${item.id}`}
                    component="input"
                    type="radio"
                    value={`selection-${selection.id}`}
                    required
                  />
                  <span style={{ marginLeft: '0.5rem' }}>
                    {selection.select}
                  </span>
                </label>
              </div>
            ))}
          </fieldset>
        </div>
      );
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <StyledBase.FlexWrapper>
        <StyledBase.ColumnWrapper>
          <form action="post" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            {this.renderQuestionItems()}
            <StyledBase.BasicButton type="submit">
              Submit
            </StyledBase.BasicButton>
          </form>
        </StyledBase.ColumnWrapper>
      </StyledBase.FlexWrapper>
    );
  }
}

Survey.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
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
